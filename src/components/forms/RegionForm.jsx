//'use client'
import { Utils } from '../../utils';

export function RegionForm(props) {
    const {_} = Utils.String;
    
    return (
        <form className="p-3 col-12 col-md-8 col-xl-6 bg-white rounded" 
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom'>{_('nom')}</label>
                        <input className='form-control' type='text' id='nom' name='nom' 
                        placeholder={_('nom')} value={props.useRegion.nom ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useRegion.setNom(e.target.value) ?? null}/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='slug'>{_('slug')}</label>
                        <input className='form-control' type='text' id='slug' name='slug' 
                        placeholder={_('slug')} value={props.useRegion.slug ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useRegion.setSlug(e.target.value) ?? null}/>
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