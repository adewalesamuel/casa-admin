//'use client'
import { Utils } from '../../utils';

export function FeatureProductForm(props) {
    const {_} = Utils.String;

    return (
        <form className="p-3 col-12 col-md-8 col-xl-6 bg-white rounded" 
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='feature_id'>feature_id</label>
                        <select className='select2 form-control' id='feature_id' name='feature_id' 
                        value={props.useFeatureProduct.feature_id ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.useFeatureProduct.setFeature(e.target.value) ?? null}>
                            <option hidden>Choisissez une option</option>
                            {
                                props.features.map((feature, index) => {
                                    return (<option key={index} value={feature.id ?? ''}>
                                                {feature.nom}
                                            </option>)
                                })
                            }
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='product_id'>product_id</label>
                        <select className='select2 form-control' id='product_id' name='product_id' 
                        value={props.useFeatureProduct.product_id ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.useFeatureProduct.setProduct(e.target.value) ?? null}>
                            <option hidden>Choisissez une option</option>
                            {
                                props.products.map((product, index) => {
                                    return (<option key={index} value={product.id ?? ''}>
                                                {product.nom}
                                            </option>)
                                })
                            }
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='quantite'>quantite</label>
                        <input className='form-control' type='number' id='quantite' name='quantite' 
                        placeholder='quantite' value={props.useFeatureProduct.quantite ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useFeatureProduct.setQuantite(e.target.value) ?? null} />
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