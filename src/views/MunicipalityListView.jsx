//'use client'
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Services } from '../services';
import { Components } from '../components';


export function MunicipalityListView() {
    let abortController = new AbortController();

    const { MunicipalityService } = Services;

    const tableAttributes = {
        'nom': {},
		'slug': {},
		'city_id': {},
		
    }
    const tableActions = ['edit', 'delete'];
    
    const navigate = useNavigate();
    const [searchParams,] = useSearchParams();

    const [municipalities, setMunicipalitys] = useState([]);
    const [page, setPage] = useState(1);
    const [pageLength, setPageLength] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const handleEditClick = (e, data) => {
        e.preventDefault();
        navigate(`/municipalities/${data.id}/edit`);
    }
    const handleDeleteClick = async (e, municipality) => {
        e.preventDefault();

        if (confirm('Voulez vous vraiment supprimer ce municipality')) {
            const municipalitiesCopy = [...municipalities];
            const index = municipalitiesCopy.findIndex(municipalityItem => 
                municipalityItem.id === municipality.id);

            municipalitiesCopy.splice(index, 1);
            setMunicipalitys(municipalitiesCopy);

            await MunicipalityService.destroy(municipality.id, 
                abortController.signal);
        }
    }

    const init = useCallback(async () => {
        try {
            const {municipalities} = await MunicipalityService.getAll(
                {page: page}, abortController.signal);

            setMunicipalitys(municipalities.data);
            setPageLength(municipalities.last_page);
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
            <h6>Liste Municipalitys</h6>
            <Components.Loader isLoading={isLoading}>
                <Link className='btn btn-info' to='/municipalities/create'>
                    <i className='icon ion-plus'></i> Créer municipality
                </Link>
                <Components.Table controllers={{handleEditClick, handleDeleteClick}} 
                tableAttributes={tableAttributes} tableActions={tableActions} 
                tableData={municipalities}/>
 
                <Components.Pagination page={page} pageLength={pageLength}/>
            </Components.Loader>
        </>
    )
}
