//'use client'
import { useCallback, useEffect, useState } from 'react';
import { Components } from '../components';
import { Hooks } from '../hooks';
import { useParams } from 'react-router-dom';
import { Services } from '../services';

export function MunicipalityEditView() {
    let abortController = new AbortController();

    const {id} = useParams();

    const useMunicipality = Hooks.useMunicipality();

    const [cities, setCitys] = useState([]);
	
    const [errorMessages, setErrorMessages] = useState([]);

    const handleFormSubmit = async e => {
        e.preventDefault();
        useMunicipality.setIsDisabled(true);
        setErrorMessages([]);
        
        try {
            await useMunicipality.updateMunicipality(
            	id, abortController.signal);
        } catch (error) {
            if ('message' in error) setErrorMessages([error.message]);
            if (!('messages' in error)) return;

            const messages = await error.messages;

            setErrorMessages(messages);
        } finally {
            useMunicipality.setIsDisabled(false);
        }
    }

    const init = useCallback(async () => {
        useMunicipality.setIsDisabled(true);

        try {
            await useMunicipality.getMunicipality(id, abortController.signal);
            
            const { cities } = await Services.CityService
			.getAll(abortController.signal);
			setCitys(cities);

			
        } catch (error) {
            console.log(error);
        } finally{
            useMunicipality.setIsDisabled(false);
        }
    }, [])

    useEffect(() => {
        init();
    }, [init])

    return (
        <>
            <h3>Modifier Municipality</h3>

            <Components.ErrorMessages>
                {errorMessages}
            </Components.ErrorMessages>
            <Components.MunicipalityForm useMunicipality={useMunicipality}
            cities={cities} setCitys={setCitys}
			isDisabled={useMunicipality.isDisabled} handleFormSubmit={handleFormSubmit}/>
        </>
    )
}
