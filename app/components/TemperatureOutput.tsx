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
const TemperatureOutput = ({ id,temperature,label,acronym }: TemperatureOutput): JSX.Element => {

	const output = `${temperature.toFixed(3)} ${acronym}`;

	const onClickHandler = () => {
		navigator.clipboard.writeText(temperature.toFixed(3));
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
			<MdContentCopy
				className='temperature-copy-icon group-hover:scale-100'
				aria-label='Copy temperature output'
			/>
		</div>
	);
};


export default TemperatureOutput; //Export main component
