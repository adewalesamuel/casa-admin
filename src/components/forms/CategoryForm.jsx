//'use client'
import { Utils } from '../../utils';

export function CategoryForm(props) {
    const {_} = Utils.String;

    return (
        <form className="p-3 col-12 col-md-8 col-xl-6 bg-white rounded" 
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom'>{_('nom')}</label>
                        <input className='form-control' type='text' id='nom' name='nom' 
                        placeholder={_('nom')} value={props.useCategory.nom ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useCategory.setNom(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='slug'>{_('slug')}</label>
                        <input className='form-control' type='text' id='slug' name='slug' 
                        placeholder={_('slug')} value={props.useCategory.slug ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useCategory.setSlug(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>{_('description')}</label>
                        <textarea className='form-control' rows={4}  id='description' name='description' 
                        placeholder={_('description')} value={props.useCategory.description ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useCategory.setDescription(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='icon_img_url'>{_('icon_img_url')}</label>
                        <input className='form-control ' type='file' id='icon_img_url' name='icon_img_url' 
                        placeholder={_('icon_img_url')}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useCategory.setIcon_img_url(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='display_img_url'>{_('display_img_url')}</label>
                        <input className='form-control ' type='file' id='display_img_url' name='display_img_url' 
                        placeholder={_('display_img_url')}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useCategory.setDisplay_img_url(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='quantite'>{_('quantite')}</label>
                        <input className='form-control' type='number' id='quantite' name='quantite' 
                        placeholder={_('quantite')} value={props.useCategory.quantite ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useCategory.setQuantite(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='category_id'>{_('category_id')}</label>
                        <select className='select2 form-control' id='category_id' name='category_id' 
                        value={props.useCategory.category_id ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.useCategory.setCategory_id(e.target.value) ?? null}>
                            <option hidden>Choisissez une option</option>
                            {
                                props.categories.map((category, index) => {
                                    return (<option key={index} value={category.id ?? ''}>
                                                {category.nom}
                                            </option>)
                                })
                            }
                        </select>
                    </div>
                </div>
				
                <div className='col-12 text-right'>
                    <button disabled={props.isDisabled ?? false} type='submit' 
                    className='btn btn-primary'>
                        {props.isDisabled ? 'Chargement...' :  'Enregistrer'}
                    </button>
                </div>
            </div>
        </form>
    )
}