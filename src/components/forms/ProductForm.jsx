//'use client'
import { Utils } from '../../utils';

export function ProductForm(props) {
    const {_} = Utils.String;

    return (
        <form className="p-3 col-12 bg-white rounded" 
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col'>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='display_img_url_list'>{_('display_img_url_list')}</label>
                            <input className='form-control' type='text' id='display_img_url_list' name='display_img_url_list' 
                            placeholder={_('display_img_url_list')} value={props.useProduct.display_img_url_list ?? ''}
                            disabled={props.isDisabled} onChange={ e => 
                                props.useProduct.setDisplay_img_url_list(e.target.value) ?? null} />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='nom'>{_('nom')}</label>
                            <input className='form-control' type='text' id='nom' name='nom' 
                            placeholder={_('nom')} value={props.useProduct.nom ?? ''}
                            disabled={props.isDisabled} onChange={ e => 
                                props.useProduct.setNom(e.target.value) ?? null} />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='description'>{_('description')}</label>
                            <textarea className='form-control' rows={4}  id='description' name='description' 
                            placeholder={_('description')} value={props.useProduct.description ?? ''}
                            disabled={props.isDisabled} onChange={ e => 
                                props.useProduct.setDescription(e.target.value) ?? null} />
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='prix'>{_('prix')}</label>
                            <input className='form-control' type='text' id='prix' name='prix' 
                            placeholder={_('prix')} value={props.useProduct.prix ?? ''}
                            disabled={props.isDisabled} onChange={ e => 
                                props.useProduct.setPrix(e.target.value) ?? null} />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='type_paiement'>{_('type_paiement')}</label>
                            <select className='select2 form-control' id='type_paiement' name='type_paiement' 
                            value={props.useProduct.type_paiement ?? ''} disabled={props.isDisabled} 
                            onChange={ e => props.useProduct.setType_paiement(e.target.value) ?? null}>
                                <option hidden>Choisissez une option</option>
                                <option value='mois'>Par mois</option>
                                <option value='an'>Par an</option>
                                <option value='unique'>Par unique</option>
                                <option value='semaine'>Par semaine</option>
                                <option value='jour'>Par jour</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='type'>{_('type')}</label>
                            <select className='select2 form-control' id='type' name='type' 
                            value={props.useProduct.type ?? ''} disabled={props.isDisabled} 
                            onChange={ e => props.useProduct.setType(e.target.value) ?? null}>
                                <option hidden>Choisissez une option</option>
                                <option value='location'>location</option>
                                <option value='achat'>achat</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='category_id'>{_('category_id')}</label>
                            <select className='select2 form-control' id='category_id' name='category_id' 
                            value={props.useProduct.category_id ?? ''} disabled={props.isDisabled} 
                            onChange={ e => props.useProduct.setCategory(e.target.value) ?? null}>
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
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='municipality_id'>{_('municipality_id')}</label>
                            <select className='select2 form-control' id='municipality_id' name='municipality_id' 
                            value={props.useProduct.municipality_id ?? ''} disabled={props.isDisabled} 
                            onChange={ e => props.useProduct.setMunicipality(e.target.value) ?? null}>
                                <option hidden>Choisissez une option</option>
                                {
                                    props.municipalities.map((municipality, index) => {
                                        return (<option key={index} value={municipality.id ?? ''}>
                                                    {municipality.nom}
                                                </option>)
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label htmlFor='user_id'>{_('user_id')}</label>
                            <select className='select2 form-control' id='user_id' name='user_id' 
                            value={props.useProduct.user_id ?? ''} disabled={props.isDisabled} 
                            onChange={ e => props.useProduct.setUser(e.target.value) ?? null}>
                                <option hidden>Choisissez une option</option>
                                {
                                    props.users.map((user, index) => {
                                        return (<option key={index} value={user.id ?? ''}>
                                                    {user.nom}
                                                </option>)
                                    })
                                }
                            </select>
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