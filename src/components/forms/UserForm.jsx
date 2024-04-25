//'use client'
import { Utils } from '../../utils';

export function UserForm(props) {
    const {_} = Utils.String;

    return (
        <form className="p-3 col-12 bg-white rounded" 
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-6'>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='nom'>{_('nom')}</label>
                            <input className='form-control' type='text' id='nom' name='nom' 
                            placeholder={_('nom')} value={props.useUser.nom ?? ''}
                            disabled={props.isDisabled} onChange={ e => 
                                props.useUser.setNom(e.target.value) ?? null}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='email'>{_('email')}</label>
                            <input className='form-control' type='text' id='email' name='email' 
                            placeholder={_('email')} value={props.useUser.email ?? ''}
                            disabled={props.isDisabled} onChange={ e => 
                                props.useUser.setEmail(e.target.value) ?? null}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='password'>{_('password')}</label>
                            <input className='form-control' type='text' id='password' name='password' 
                            placeholder={_('password')} value={props.useUser.password ?? ''}
                            disabled={props.isDisabled} onChange={ e => 
                                props.useUser.setPassword(e.target.value) ?? null}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='profile_img_url'>{_('profile_img_url')}</label>
                            <input className='form-control' type='file' id='profile_img_url' 
                            name='profile_img_url' placeholder={_('profile_img_url')}
                            disabled={props.isDisabled} onChange={ e => 
                                props.useUser.setProfile_img_url(e.target.value) ?? null}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='genre'>{_('genre')}</label>
                            <select className='select2 form-control' id='genre' name='genre' 
                            value={props.useUser.genre ?? ''} disabled={props.isDisabled} 
                            onChange={ e => props.useUser.setGenre(e.target.value) ?? null}>
                                <option hidden>Choisissez une option</option>
                                <option value='homme'>Homme</option>
                                <option value='femme'>Femme</option>
                                <option value='autre'>Autre</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='adresse'>{_('adresse')}</label>
                            <input className='form-control' type='text' id='adresse' name='adresse' 
                            placeholder={_('adresse')} value={props.useUser.adresse ?? ''}
                            disabled={props.isDisabled} onChange={ e => 
                                props.useUser.setAdresse(e.target.value) ?? null}/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='numero_telephone'>{_('numero_telephone')}</label>
                            <input className='form-control' type='text' id='numero_telephone' 
                            name='numero_telephone' placeholder={_('numero_telephone')} 
                            value={props.useUser.numero_telephone ?? ''} disabled={props.isDisabled} 
                            onChange={ e => props.useUser.setNumero_telephone(e.target.value) ?? null}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='numero_whatsapp'>{_('numero_whatsapp')}</label>
                            <input className='form-control' type='text' id='numero_whatsapp'
                            name='numero_whatsapp' placeholder={_('numero_whatsapp')} 
                            value={props.useUser.numero_whatsapp ?? ''} disabled={props.isDisabled} 
                            onChange={ e => props.useUser.setNumero_whatsapp(e.target.value) ?? null}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='numero_telegram'>{_('numero_telegram')}</label>
                            <input className='form-control' type='text' id='numero_telegram'
                            name='numero_telegram' placeholder={_('numero_telegram')} 
                            value={props.useUser.numero_telegram ?? ''} disabled={props.isDisabled} 
                            onChange={ e => props.useUser.setNumero_telegram(e.target.value) ?? null}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='company_name'>{_('company_name')}</label>
                            <input className='form-control' type='text' id='company_name'
                            name='company_name' placeholder={_('company_name')} 
                            value={props.useUser.company_name ?? ''} disabled={props.isDisabled} 
                            onChange={ e => props.useUser.setCompany_name(e.target.value) ?? null}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='company_logo_url'>{_('company_logo_url')}</label>
                            <input className='form-control ' type='file' id='company_logo_url'
                            name='company_logo_url' placeholder={_('company_logo_url')}
                            disabled={props.isDisabled} onChange={ e => 
                            props.useUser.setCompany_logo_url(e.target.value) ?? null}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='form-group'>
                            <label htmlFor='type'>{_('type')}</label>
                            <select className='form-control rounded-md' id='type' name='type' 
                            value={props.useUser.type ?? ''} disabled={props.isDisabled} 
                            onChange={ e => props.useUser.setType(e.target.value) ?? null}>
                                <option hidden>Choisissez une option</option>
                                <option value='client'>Acheteur</option>
                                <option value='vendeur'>Vendeur</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-check form-check-inline'>
                            <label htmlFor='is_active'>{_('is_active')}</label>
                            <input className='form-check-input ml-3 mb-2' type='checkbox' 
                            id='is_active' name='is_active' placeholder={_('is_active')} 
                            checked={props.useUser.is_active ?? false} disabled={props.isDisabled} 
                            onChange={ e => props.useUser.setIs_active(e.target.value) ?? null}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-check form-check-inline'>
                            <label htmlFor='is_company'>{_('is_company')}</label>
                            <input className='form-check-input ml-3 mb-2' type='checkbox' 
                            id='is_company' name='is_company' placeholder={_('is_company')} 
                            checked={props.useUser.is_company ?? false} disabled={props.isDisabled} 
                            onChange={ () => props.useUser.setIs_company(!props.useUser.is_company) ?? null}/>
                        </div>
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