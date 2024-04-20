//'use client'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Components } from '../components';
import { Hooks } from '../hooks';

export function UserCreateView() {
    let abortController = new AbortController();

    const navigate = useNavigate();

    const useUser = Hooks.useUser();

    
    const [errorMessages, setErrorMessages] = useState([]);

    const handleFormSubmit = async e => {
        e.preventDefault();
        useUser.setIsDisabled(true);
        setErrorMessages([]);
        
        try {
            await useUser.createUser(abortController.signal);

            navigate('/users');
        } catch (error) {
            if ('message' in error) setErrorMessages([error.message]);
            if (!('messages' in error)) return;

            const messages = await error.messages;

            setErrorMessages(messages);
        } finally {
            useUser.setIsDisabled(false);
        }
    }

    return (
        <>
            <h3>Créer User</h3>

            <Components.ErrorMessages>
                {errorMessages}
            </Components.ErrorMessages>
            <Components.UserForm useUser={useUser}
            isDisabled={useUser.isDisabled} handleFormSubmit={handleFormSubmit}/>
        </>
    )
}
