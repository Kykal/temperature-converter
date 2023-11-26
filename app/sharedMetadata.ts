//NextJS
import type { Metadata } from 'next'


const title: string = 'Temperature converter';
const description: string = 'Convert temperature to Kelving, degrees Celsius, degrees Fahrenheit and Rankine.';


export const sharedMetadata: Metadata = {
  title,
  description,

  openGraph: {
    title,
    description,
  },

  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
};


export default sharedMetadata;
