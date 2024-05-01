import { useEffect } from 'react';
import imgPlaceholder from '../assets/images/placeholder.webp';
import { Hooks } from '../hooks';

export function ImageFileInput(props) {
    const useFile = Hooks.useFile();

    useEffect(() => {
        if (!useFile.fileUrl) return;

        props.setImg_url(useFile.fileUrl);
    }, [useFile.fileUrl])

    return (
        <span>
            <div className="position-relative" style={{maxWidth: "80px"}}>
                <input className='position-absolute w-100 h-100 fade' type='file' 
                role='button' onChange={e => useFile.handleFileChange(e.target.files[0])} 
                accept='.jpg,.jpeg,.png' role='button' style={{top: 0, left: 0}}/>
                <img src={props.img_url !== '' ? props.img_url : imgPlaceholder} 
                className="img-fluid rounded" alt=""/>
            </div>
        </span>
    )
}