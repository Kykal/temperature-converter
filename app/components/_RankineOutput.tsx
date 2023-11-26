//NextJS
'use client';


//Hooks
import useTemperatureSearchParams from "../hooks/useTemperaturesParams";


//Components
import TemperatureOutput from "./TemperatureOutput";


//Main component content
const RankineOutput = (): JSX.Element => {

	const { temperature, sourceType } = useTemperatureSearchParams();

	let finalTemperature = 0;

	switch (sourceType) {
		case 'celsius': {
			finalTemperature = temperature * 9/5 + 491.67;
			break;
		};

		case 'kelvin': {
			finalTemperature = temperature * 1.8;
			break;
		};

		case 'fahrenheit': {
			finalTemperature = temperature + 459.67;
			break;
		};

		case 'rankine': {
			finalTemperature = temperature;
			break;
		};
	};


	//Main component render
	return (
		<TemperatureOutput
			id='rankine'
			temperature={finalTemperature}
			label='Rankine'
			acronym='R'
		/>
	);
};


export default RankineOutput; //Export main component
