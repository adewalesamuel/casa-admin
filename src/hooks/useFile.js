import { useState } from 'react';
import { Services } from '../services';

export const useFile = (type) => {
	const abortController = new AbortController();

	const [fileUrl, setFileUrl] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessages, setErrorMessages] = useState('');

	const handleFileChange = async file => {
		const store = (type == 'product') ? 
		Services.FileService.product_store :
		Services.FileService.store;

		setIsLoading(true);

		try {
			const formData = new FormData();

			formData.append('image', file);

			const {image_url} = await store(
				formData, abortController.signal);

			setFileUrl(image_url);
		} catch(error) {
			if ('message' in error) alert(error.message);
			if (!('messages' in error)) return;

			const messages = await error.messages;
			
			alert(messages.join(', '));
		} finally {
			setIsLoading(false);
		}
	}

	return {
		fileUrl,
		isLoading,
		errorMessages,
		handleFileChange
	}
}