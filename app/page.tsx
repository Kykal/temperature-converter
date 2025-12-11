//Components
import { Suspense } from 'react';
import TemperatureForm from "./components/TemperatureForm";
import TemperaturesOutput from "./components/TemperaturesOutput";


//Main component content
const Page = (): JSX.Element => {
  //Main component render
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className='container mx-auto' >
        <div className='px-4 space-y-8' >
          <div className="md:card md:py-2 md:px-4">
            <TemperatureForm />
          </div>
          <TemperaturesOutput />
        </div>
      </main>
    </Suspense>
  );
};


export default Page; //Export main component
