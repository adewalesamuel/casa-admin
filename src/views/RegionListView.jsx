//'use client'
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Services } from '../services';
import { Components } from '../components';


export function RegionListView() {
    let abortController = new AbortController();

    const { RegionService } = Services;

    const tableAttributes = {
        'nom': {},
		'slug': {},
		
    }
    const tableActions = ['edit', 'delete'];
    
    const navigate = useNavigate();
    const [searchParams,] = useSearchParams();

    const [regions, setRegions] = useState([]);
    const [page, setPage] = useState(1);
    const [pageLength, setPageLength] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const handleEditClick = (e, data) => {
        e.preventDefault();
        navigate(`/regions/${data.id}/edit`);
    }
    const handleDeleteClick = async (e, region) => {
        e.preventDefault();

        if (confirm('Voulez vous vraiment supprimer ce region')) {
            const regionsCopy = [...regions];
            const index = regionsCopy.findIndex(regionItem => 
                regionItem.id === region.id);

            regionsCopy.splice(index, 1);
            setRegions(regionsCopy);

            await RegionService.destroy(region.id, 
                abortController.signal);
        }
    }

    const init = useCallback(async () => {
        try {
            const {regions} = await RegionService.getAll(
                {page: page}, abortController.signal);

            setRegions(regions.data);
            setPageLength(regions.last_page);
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
            <h6>Liste Regions</h6>
            <Components.Loader isLoading={isLoading}>
                <Link className='btn btn-info' to='/regions/create'>
                    <i className='icon ion-plus'></i> Créer region
                </Link>
                <Components.Table controllers={{handleEditClick, handleDeleteClick}} 
                tableAttributes={tableAttributes} tableActions={tableActions} 
                tableData={regions}/>
 
                <Components.Pagination page={page} pageLength={pageLength}/>
            </Components.Loader>
        </>
    )
}
