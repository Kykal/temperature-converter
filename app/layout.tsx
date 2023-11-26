//NextJS
import sharedMetadata from './sharedMetadata';
export const metadata = sharedMetadata;
export const viewport = sharedViewport;


//Styles
import './globals.css'
import { Roboto } from 'next/font/google'
import sharedViewport from './sharedViewport';
const roboto = Roboto({
  subsets: ['latin'],
   weight: [
    '400',
    '500',
    '700'
   ],
});



//Typings
type RootLayout = {
  children: JSX.Element;
};


//Main component content
const RootLayout = (props: RootLayout): JSX.Element => {
  //Main component render
  return (
    <html
      lang='en'
    >
      <body
        className={roboto.className}
      >
        <header>
          <div className='py-4' >
            Temperature converter
          </div>
        </header>
        {props.children}
      </body>
    </html>
  );
};


export default RootLayout; //Export main component
