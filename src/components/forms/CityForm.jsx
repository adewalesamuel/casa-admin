//'use client'
import { Utils } from '../../utils';

export function CityForm(props) {
    const {_} = Utils.String;

    return (
        <form className="p-3 col-12 col-md-8 col-xl-6 bg-white rounded" 
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom'>{_('nom')}</label>
                        <input className='form-control' type='text' id='nom' name='nom' 
                        placeholder={_('nom')} value={props.useCity.nom ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useCity.setNom(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='slug'>{_('slug')}</label>
                        <input className='form-control' type='text' id='slug' name='slug' 
                        placeholder={_('slug')} value={props.useCity.slug ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useCity.setSlug(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='region_id'>{_('region_id')}</label>
                        <select className='select2 form-control' id='region_id' name='region_id' 
                        value={props.useCity.region_id ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.useCity.setRegion_id(e.target.value) ?? null}>
                            <option hidden>Choisissez une option</option>
                            {
                                props.regions.map((region, index) => {
                                    return (<option key={index} value={region.id ?? ''}>
                                                {region.nom}
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