//NextJS
'use client';


//Hooks
import useTemperatureSearchParams from "../hooks/useTemperaturesParams";


//Components
import TemperatureOutput from "./TemperatureOutput";


//Main component content
const CelsiusOutput = (): JSX.Element => {

	const { temperature, sourceType } = useTemperatureSearchParams();

	//Main component render
	return (
		<TemperatureOutput
			id='celsius'
			temperature={temperature}
			label='Celsius'
			acronym='ºC'
		/>
	);
};


export default CelsiusOutput; //Export main component
