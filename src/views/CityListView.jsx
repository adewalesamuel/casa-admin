//'use client'
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Services } from '../services';
import { Components } from '../components';

export function CityListView() {
    let abortController = new AbortController();

    const { CityService } = Services;

    const tableAttributes = {
        'nom': {},
		'slug': {},
		'region_id': {},
		
    }
    const tableActions = ['edit', 'delete'];
    
    const navigate = useNavigate();
    const [searchParams,] = useSearchParams();

    const [cities, setCitys] = useState([]);
    const [page, setPage] = useState(1);
    const [pageLength, setPageLength] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const handleEditClick = (e, data) => {
        e.preventDefault();
        navigate(`/cities/${data.id}/edit`);
    }
    const handleDeleteClick = async (e, city) => {
        e.preventDefault();

        if (confirm('Voulez vous vraiment supprimer ce city')) {
            const citiesCopy = [...cities];
            const index = citiesCopy.findIndex(cityItem => 
                cityItem.id === city.id);

            citiesCopy.splice(index, 1);
            setCitys(citiesCopy);

            await CityService.destroy(city.id, 
                abortController.signal);
        }
    }

    const init = useCallback(async () => {
        try {
            const {cities} = await CityService.getAll(
                {page: page}, abortController.signal);
            const cityData = cities.data.map(city => {
                return {
                    ...city,
                    region_id: city?.region?.nom ?? ""
                }
            });

            setCitys(cityData);
            setPageLength(cities.last_page);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [page]);

    useEffect(() => {
        init();

        return () => {
            abortController.abort();
            abortController = new AbortController();
        }
    }, [init])

    useEffect(() => {
        if (searchParams.get('page')) 
            setPage(parseInt(searchParams.get('page')))
    }, [searchParams.get('page')])

    return (
        <>
            <h6>Liste Citys</h6>
            <Components.Loader isLoading={isLoading}>
                <Link className='btn btn-info' to='/cities/create'>
                    <i className='icon ion-plus'></i> Créer city
                </Link>
                <Components.Table controllers={{handleEditClick, handleDeleteClick}} 
                tableAttributes={tableAttributes} tableActions={tableActions} 
                tableData={cities}/>
 
                <Components.Pagination page={page} pageLength={pageLength}/>
            </Components.Loader>
        </>
    )
}
