import { Api } from './Api';

const  ENPOINTS = {
    File: '/upload',
};

const store = (payload, signal) => {
    return Api.postFormData(ENPOINTS.File, payload, signal)
}

const product_store = (payload, signal) => {
    return Api.postFormData(`/product${ENPOINTS.File}`, payload, signal)
}


export const FileService = {
    store,
    product_store
}