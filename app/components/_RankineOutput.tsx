//NextJS
'use client';


//Hooks
import useTemperatureSearchParams from "../hooks/useTemperaturesParams";


//Components
import TemperatureOutput from "./TemperatureOutput";


//Main component content
const RankineOutput = (): JSX.Element => {

	const { temperature, sourceType } = useTemperatureSearchParams();


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
