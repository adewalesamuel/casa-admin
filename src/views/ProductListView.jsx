//'use client'
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Services } from '../services';
import { Components } from '../components';

export function ProductListView() {
    let abortController = new AbortController();

    const { ProductService } = Services;

    const tableAttributes = {
        'nom': {},
		'slug': {},
		'prix': {},
		'type_paiement': {},
		'type': {},
		'images_url_list': {},
		'category_id': {},
		'municipality_id': {},
		'user_id': {},
		
    }
    const tableActions = ['edit', 'delete'];
    
    const navigate = useNavigate();
    const [searchParams,] = useSearchParams();

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [pageLength, setPageLength] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const handleEditClick = (e, data) => {
        e.preventDefault();
        navigate(`/products/${data.id}/edit`);
    }
    const handleDeleteClick = async (e, product) => {
        e.preventDefault();

        if (confirm('Voulez vous vraiment supprimer ce product')) {
            const productsCopy = [...products];
            const index = productsCopy.findIndex(productItem => 
                productItem.id === product.id);

            productsCopy.splice(index, 1);
            setProducts(productsCopy);

            await ProductService.destroy(product.id, 
                abortController.signal);
        }
    }

    const init = useCallback(async () => {
        try {
            const {products} = await ProductService.getAll(
                {page: page}, abortController.signal);

            setProducts(products.data);
            setPageLength(products.last_page);
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
            <h6>Liste Products</h6>
            <Components.Loader isLoading={isLoading}>
                <Link className='btn btn-info' to='/products/create'>
                    <i className='icon ion-plus'></i> Créer product
                </Link>
                <Components.Table controllers={{handleEditClick, handleDeleteClick}} 
                tableAttributes={tableAttributes} tableActions={tableActions} 
                tableData={products}/>
 
                <Components.Pagination page={page} pageLength={pageLength}/>
            </Components.Loader>
        </>
    )
}
