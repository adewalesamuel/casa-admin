import { Link } from "react-router-dom";
import * as Icons from 'react-feather';

export function Pagination(props){

    return(
        <div className="pagination-wrapper mt-3 d-flex justify-content-end">
            <ul className="pagination mg-b-0">
                <li className="page-item">
                    <Link className="page-link" to={`?page=${props.page > 1 ? 
                        props.page - 1 : props.page}`}>
                        <Icons.ChevronLeft size={16}/>
                    </Link>
                </li>
                {Array(props.pageLength).fill(0).map((item, index) => {
                return (
                    <li className={`page-item ${props.page === index + 1 ? 
                    "active" : ''}`} key={index}>
                        <Link className="page-link" to={`?page=${index + 1}`}>
                            {index + 1}
                        </Link>
                    </li>)
                })}
                <li className="page-item">
                    <Link className="page-link" to={`?page=${props.page < props.pageLength ? 
                        props.page + 1 : props.page}`}>
                        <Icons.ChevronRight size={16}/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}