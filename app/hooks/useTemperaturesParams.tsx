//NextJS
import { useSearchParams } from "next/navigation";


//Typings
type useTemperatureSearchParams = {
	temperature: number;
	sourceType: string;
};

const useTemperatureSearchParams = (): useTemperatureSearchParams => {
	const params = useSearchParams();

	const temperature = Number(params.get('temperature'));
	const sourceType = String(params.get('source-type')).toLowerCase();

	return {
		temperature,
		sourceType
	};
};


export default useTemperatureSearchParams;
