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
			finalTemperature = temperature + 273.15;
			break;
		};

		case 'kelvin': {
			finalTemperature = temperature;
			break;
		};

		case 'fahrenheit': {
			finalTemperature = (temperature - 32) * 5/9 + 273.15;
			break;
		};

		case 'rankine': {
			finalTemperature = temperature * 5/9;
			break;
		};
	};


	//Main component render
	return (
		<TemperatureOutput
			id='rankine'
			temperature={temperature}
			label='Rankine'
			acronym='R'
		/>
	);
};


export default RankineOutput; //Export main component
