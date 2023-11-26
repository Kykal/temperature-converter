//NextJS
'use client';


//Hooks
import useTemperatureSearchParams from "../hooks/useTemperaturesParams";


//Components
import TemperatureOutput from "./TemperatureOutput";


//Main component content
const KelvinOutput = (): JSX.Element => {

	const { temperature, sourceType } = useTemperatureSearchParams();
	

	//Main component render
	return (
		<TemperatureOutput
			id='kelvin'
			temperature={temperature}
			label='Kelvin'
			acronym='K'
		/>
	);
};


export default KelvinOutput; //Export main component
