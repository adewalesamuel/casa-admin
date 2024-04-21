//'use client'
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Services } from '../services';
import { Components } from '../components';


export function CategoryListView() {
    let abortController = new AbortController();

    const { CategoryService } = Services;

    const tableAttributes = {
        'nom': {},
		'slug': {},
		'description': {},
		'icon_img_url': {},
		'display_img_url': {},
		'quantite': {},
		'category_id': {},
		
    }
    const tableActions = ['edit', 'delete'];
    
    const navigate = useNavigate();
    const [searchParams,] = useSearchParams();

    const [categories, setCategorys] = useState([]);
    const [page, setPage] = useState(1);
    const [pageLength, setPageLength] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const handleEditClick = (e, data) => {
        e.preventDefault();
        navigate(`/categories/${data.id}/edit`);
    }
    const handleDeleteClick = async (e, category) => {
        e.preventDefault();

        if (confirm('Voulez vous vraiment supprimer ce category')) {
            const categoriesCopy = [...categories];
            const index = categoriesCopy.findIndex(categoryItem => 
                categoryItem.id === category.id);

            categoriesCopy.splice(index, 1);
            setCategorys(categoriesCopy);

            await CategoryService.destroy(category.id, 
                abortController.signal);
        }
    }

    const init = useCallback(async () => {
        try {
            const {categories} = await CategoryService.getAll(
                {page: page}, abortController.signal);

            setCategorys(categories.data);
            setPageLength(categories.last_page);
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
            <h6>Liste Categorys</h6>
            <Components.Loader isLoading={isLoading}>
                <Link className='btn btn-info' to='/categories/create'>
                    <i className='icon ion-plus'></i> Créer category
                </Link>
                <Components.Table controllers={{handleEditClick, handleDeleteClick}} 
                tableAttributes={tableAttributes} tableActions={tableActions} 
                tableData={categories}/>
 
                <Components.Pagination page={page} pageLength={pageLength}/>
            </Components.Loader>
        </>
    )
}
