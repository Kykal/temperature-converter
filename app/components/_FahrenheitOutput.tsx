//NextJS
'use client';


//Hooks
import useTemperatureSearchParams from "../hooks/useTemperaturesParams";


//Lib
import fixNumber from "../lib/fixNumber";


//Components
import TemperatureOutput from "./TemperatureOutput";


//Main component content
const FahrenheitOutput = (): JSX.Element => {

	const { temperature, sourceType } = useTemperatureSearchParams();

	let finalTemperature = 0;

	switch (sourceType) {
		case 'celsius': {
			finalTemperature = fixNumber( (temperature * 9/5) + 32 );
			break;
		};

		case 'kelvin': {
			finalTemperature = fixNumber( (temperature - 273.15) * 9/5 + 32 );
			break;
		};

		case 'fahrenheit': {
			finalTemperature = temperature;
			break;
		};

		case 'rankine': {
			finalTemperature = fixNumber( temperature - 459.67 );
			break;
		};
	};


	//Main component render
	return (
		<TemperatureOutput
			id='fahrenheit'
			temperature={finalTemperature}
			label='Fahrenheit'
			acronym='ºF'
		/>
	);
};


export default FahrenheitOutput; //Export main component
