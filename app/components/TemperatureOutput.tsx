//MATERIAL DESIGN
//Icons
import { MdContentCopy } from "react-icons/md";


//Typings
type TemperatureOutput = {
	id?: string;
	temperature: number;
	label: string;
	acronym: string;
};


//Main component content
const TemperatureOutput = (props: TemperatureOutput): JSX.Element => {

	const output = `${props.temperature} ${props.acronym}`;

	//Main component render
	return (
		<div
			id={props.id}
			className='temperature-container group'
		>
			<div className='temperature-label' >
				{props.label}
			</div>
			<output className='temperature-output' >
				{output}
			</output>
			<MdContentCopy
				className='temperature-copy-icon group-hover:scale-100'
				aria-label='Copy temperature output'
			/>
		</div>
	);
};


export default TemperatureOutput; //Export main component
