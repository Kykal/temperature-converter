//NextJS
'use client';


//React
import { useState } from "react";


//MATERIAL DESIGN
//Icons
import {
	MdContentCopy,
	MdCheck,
} from "react-icons/md";


//Typings
type TemperatureOutput = {
	id?: string;
	temperature: number;
	label: string;
	acronym: string;
};


//Main component content
const TemperatureOutput = ({ id,temperature,label,acronym }: TemperatureOutput): JSX.Element => {

	const [ clicked, setClicked ] = useState<boolean>(false);


	const fixedTemperature = temperature.toFixed(3);

	const output = `${fixedTemperature} ${acronym}`;

	const onClickHandler = () => {
		navigator.clipboard.writeText(fixedTemperature);
		setClicked(true);
		setTimeout( () => setClicked(false), 5_000 );
	};



	//Main component render
	return (
		<div
			id={id}
			className='temperature-container group'
			onClick={onClickHandler}
		>
			<div className='temperature-label' >
				{label}
			</div>
			<output className='temperature-output' >
				{output}
			</output>
			{clicked ? (
				<MdCheck
					className='temperature-copy-icon group-hover:scale-100 fill-green-500'
					aria-label='Copied temperature output'
				/>
			) : (
				<MdContentCopy
					className='temperature-copy-icon group-hover:scale-100'
					aria-label='Copy temperature output'
				/>
			)}
		</div>
	);
};


export default TemperatureOutput; //Export main component
