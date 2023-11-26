//NextJS
import type { Metadata } from 'next'


const title: string = 'Temperature converter';
const description: string = 'Convert temperature to Kelving, degrees Celsius, degrees Fahrenheit and Rankine.';
const baseUrl: string = 'https://temperature-converter-lovat.vercel.app/';
const developer: string = 'Alan Xavier Benavides Benavides';


export const sharedMetadata: Metadata = {
  title,
  description,
  metadataBase: new URL(baseUrl),

  openGraph: {
    title,
    description,
    url: baseUrl,
    siteName: title,
    authors: developer,
    username: 'Kykal',
    firstName: 'Alan',
    lastName: 'Benavides',
    countryName: 'México',
    creators: developer,
  },

  twitter: {
    title,
    description,
    card: 'summary_large_image',
    site: baseUrl,
    creator: developer,
  },
};


export default sharedMetadata;
