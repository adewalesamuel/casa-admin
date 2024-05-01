//'use client'
import { Utils } from '../../utils';

export function FeatureForm(props) {
    const {_} = Utils.String;

    return (
        <form className="p-3 col-12 col-md-8 col-xl-6 bg-white rounded" 
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom'>{_('nom')}</label>
                        <input className='form-control' type='text' id='nom' name='nom' 
                        placeholder={_('nom')} value={props.useFeature.nom ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useFeature.setNom(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='icon_img_url'>{_('icon_img_url')}</label>
                        <input className='form-control ' type='file' id='icon_img_url' name='icon_img_url' 
                        placeholder={_('icon_img_url')}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useFeature.setIcon_img_url(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='display_img_url'>{_('display_img_url')}</label>
                        <input className='form-control ' type='file' id='display_img_url' name='display_img_url' 
                        placeholder={_('display_img_url')}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useFeature.setDisplay_img_url(e.target.value) ?? null} />
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