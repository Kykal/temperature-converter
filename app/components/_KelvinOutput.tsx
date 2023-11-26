//NextJS
'use client';


//Hooks
import useTemperatureSearchParams from "../hooks/useTemperaturesParams";


//Lib
import fixNumber from "../lib/fixNumber";


//Components
import TemperatureOutput from "./TemperatureOutput";


//Main component content
const KelvinOutput = (): JSX.Element => {

	const { temperature, sourceType } = useTemperatureSearchParams();
	
	let finalTemperature = 0;

	switch (sourceType) {
		case 'celsius': {
			finalTemperature = fixNumber( temperature + 273.15 );
			break;
		};

		case 'kelvin': {
			finalTemperature = temperature;
			break;
		};

		case 'fahrenheit': {
			finalTemperature = fixNumber( (temperature - 32) * 5/9 + 273.15 );
			break;
		};

		case 'rankine': {
			finalTemperature = fixNumber( temperature * 5/9 );
			break;
		};
	};


	//Main component render
	return (
		<TemperatureOutput
			id='kelvin'
			temperature={finalTemperature}
			label='Kelvin'
			acronym='K'
		/>
	);
};


export default KelvinOutput; //Export main component
