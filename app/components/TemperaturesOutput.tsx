//Components
import CelsiusOutput from "./_CelsiusOutput";
import FahrenheitOutput from "./_FahrenheitOutput";
import KelvinOutput from "./_KelvinOutput";
import RankineOutput from "./_RankineOutput";


//Main component content
const TemperaturesOutput = (): JSX.Element => {
	//Main component render
	return (
		<div
			className='temperatures-output'
		>
			<CelsiusOutput />
			<KelvinOutput />
			<FahrenheitOutput />
			<RankineOutput />
		</div>
	);
};


export default TemperaturesOutput; //Export main component
