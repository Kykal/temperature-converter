//NextJS
'use client';


//React
import { useFormStatus } from 'react-dom';


//Actions
import { temperatureAction } from "../actions";
import useTemperatureSearchParams from '../hooks/useTemperaturesParams';


//Main component content
const TemperatureForm = (): JSX.Element => {
	
	const { temperature, sourceType, } = useTemperatureSearchParams();
	

	//Main component render
	return (
		<form action={temperatureAction} className='space-y-4 md:pb-3' >
			<div className='flex flex-col md:flex-row gap-4 md:items-end' >
				<fieldset className='input-fieldset' >
					<legend className='input-legend' >
						Temperature
					</legend>
					<div className='input-container' >
						<input
							type="number"
							name="temperature-value"
							id="temperature-value"
							required
							step='any'
							className='temperature-input'
							defaultValue={temperature || 0}
						/>
					</div>
				</fieldset>
				<select
					name="temperature-source-type"
					id="temperature-source-type"
					className='h-11 md:w-1/4 cursor-pointer'

					defaultValue={sourceType || 'celsius'}
				>
					<option value="celsius">ºC</option>
					<option value="kelvin">K</option>
					<option value="fahrenheit">ºF</option>
					<option value="rankine">R</option>
				</select>
			</div>
			<SubmitButton />
		</form>
	);
};


export default TemperatureForm; //Export main component



const SubmitButton = () => {

	const { pending } = useFormStatus();

	const buttonLabel = pending
		? 'Converting...'
		: 'Convert';
	

	return(
		<button
			type='submit'
			className='bg-black disabled:bg-black/25'
			disabled={pending}
			aria-disabled={pending}
		>
			{buttonLabel}
		</button>
	);
};
