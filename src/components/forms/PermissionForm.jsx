//'use client'
import { Utils } from '../../utils';

export function PermissionForm(props) {
    const {_} = Utils.String;

    return (
        <form className="p-3 col-12 col-md-8 col-xl-6 bg-white rounded" 
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>{_('name')}</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder={_('name')} value={props.usePermission.name ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.usePermission.setName(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='slug'>{_('slug')}</label>
                        <input className='form-control' type='text' id='slug' name='slug' 
                        placeholder={_('slug')} value={props.usePermission.slug ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.usePermission.setSlug(e.target.value) ?? null} />
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