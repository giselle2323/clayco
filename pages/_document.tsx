import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
      //enables dark mode for entore application
    <Html> 
      <Head />
      <body className="bg-white dark:bg-minBlack text-white dark:text-minBlack">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}