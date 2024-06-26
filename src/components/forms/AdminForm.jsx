//'use client'
import { Utils } from '../../utils';

export function AdminForm(props) {
    const {_} = Utils.String;

    return (
        <form className="p-3 col-12 col-md-8 col-xl-6 bg-white rounded" 
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom'>{_('nom')}</label>
                        <input className='form-control' type='text' id='nom' name='nom' 
                        placeholder={_('nom')} value={props.useAdmin.nom ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useAdmin.setNom(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='email'>{_('email')}</label>
                        <input className='form-control' type='text' id='email' name='email' 
                        placeholder={_('email')} value={props.useAdmin.email ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useAdmin.setEmail(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='password'>{_('password')}</label>
                        <input className='form-control' type='text' id='password' name='password' 
                        placeholder={_('password')} value={props.useAdmin.password ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useAdmin.setPassword(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='profile_img_url'>{_('profile_img_url')}</label>
                        <input className='form-control ' type='file' id='profile_img_url' name='profile_img_url' 
                        placeholder={_('_')}disabled={props.isDisabled} onChange={ e => 
                            props.useAdmin.setProfile_img_url(e.target.value) ?? null} />
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='role_id'>{_('role_id')}</label>
                        <select className='select2 form-control' id='role_id' name='role_id' 
                        value={props.useAdmin.role_id ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setRole(e.target.value) ?? null}>
                            <option hidden>Choisissez une option</option>
                            {
                                props.roles.map((role, index) => {
                                    return (<option key={index} value={role.id ?? ''}>
                                                {role.nom}
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