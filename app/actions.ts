//NextJS
'use server';
import { redirect } from 'next/navigation'



export const temperatureAction = async (formData: FormData): Promise<void> => {
	const temperature = formData.get('temperature-value');
	const sourceType = formData.get('temperature-source-type');

	
	const newUrl = `/?temperature=${temperature}&source-type=${sourceType}`;

	redirect(newUrl);
};
