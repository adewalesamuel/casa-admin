//'use client'
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Services } from '../services';
import { Components } from '../components';


export function FavoriteListView() {
    let abortController = new AbortController();

    const { FavoriteService } = Services;

    const tableAttributes = {
        'product_id': {},
		'user_id': {},
		
    }
    const tableActions = ['edit', 'delete'];
    
    const navigate = useNavigate();
    const [searchParams,] = useSearchParams();

    const [favorites, setFavorites] = useState([]);
    const [page, setPage] = useState(1);
    const [pageLength, setPageLength] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const handleEditClick = (e, data) => {
        e.preventDefault();
        navigate(`/favorites/${data.id}/edit`);
    }
    const handleDeleteClick = async (e, favorite) => {
        e.preventDefault();

        if (confirm('Voulez vous vraiment supprimer ce favorite')) {
            const favoritesCopy = [...favorites];
            const index = favoritesCopy.findIndex(favoriteItem => 
                favoriteItem.id === favorite.id);

            favoritesCopy.splice(index, 1);
            setFavorites(favoritesCopy);

            await FavoriteService.destroy(favorite.id, 
                abortController.signal);
        }
    }

    const init = useCallback(async () => {
        try {
            const {favorites} = await FavoriteService.getAll(
                {page: page}, abortController.signal);

            setFavorites(favorites.data);
            setPageLength(favorites.last_page);
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
            <h6>Liste Favorites</h6>
            <Components.Loader isLoading={isLoading}>
                <Link className='btn btn-info' to='/favorites/create'>
                    <i className='icon ion-plus'></i> Créer favorite
                </Link>
                <Components.Table controllers={{handleEditClick, handleDeleteClick}} 
                tableAttributes={tableAttributes} tableActions={tableActions} 
                tableData={favorites}/>
 
                <Components.Pagination page={page} pageLength={pageLength}/>
            </Components.Loader>
        </>
    )
}
