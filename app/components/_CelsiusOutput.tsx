//NextJS
'use client';


//Hooks
import useTemperatureSearchParams from "../hooks/useTemperaturesParams";


//Components
import TemperatureOutput from "./TemperatureOutput";


//Main component content
const CelsiusOutput = (): JSX.Element => {

	const { temperature, sourceType } = useTemperatureSearchParams();

	let finalTemperature = 0;

	switch (sourceType) {
		case 'celsius': {
			finalTemperature = temperature;
			break;
		};

		case 'kelvin': {
			finalTemperature = temperature - 273.15;
			break;
		};

		case 'fahrenheit': {
			finalTemperature = (temperature - 32) * 5/9;
			break;
		};

		case 'rankine': {
			finalTemperature = (temperature - 491.67) * 5/9;
			break;
		};
	};


	//Main component render
	return (
		<TemperatureOutput
			id='celsius'
			temperature={finalTemperature}
			label='Celsius'
			acronym='ºC'
		/>
	);
};


export default CelsiusOutput; //Export main component
