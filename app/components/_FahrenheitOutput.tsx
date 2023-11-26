//NextJS
'use client';


//Hooks
import useTemperatureSearchParams from "../hooks/useTemperaturesParams";


//Components
import TemperatureOutput from "./TemperatureOutput";


//Main component content
const FahrenheitOutput = (): JSX.Element => {

	const { temperature, sourceType } = useTemperatureSearchParams();


	//Main component render
	return (
		<TemperatureOutput
			id='fahrenheit'
			temperature={temperature}
			label='Fahrenheit'
			acronym='ºF'
		/>
	);
};


export default FahrenheitOutput; //Export main component
