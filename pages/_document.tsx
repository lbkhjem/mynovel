import Document, { Html, Head, Main, NextScript } from 'next/document'
import { createGetInitialProps } from '@mantine/next';

const getInitialProps = createGetInitialProps();



class MyDocument extends Document {
  static getInitialProps = getInitialProps;
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=optional"
            rel="stylesheet"
          />
           <link
            href="https://fonts.googleapis.com/css2?family=Noticia+Text&display=optional"
            rel="stylesheet"
          />
            <link
            href="https://fonts.googleapis.com/css2?family=Times+New+Roman&display=optional"
            rel="stylesheet"
          />
           <link
            href="https://fonts.googleapis.com/css2?family=Nunito&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=optional"
            rel="stylesheet"
          />
           <link
            href="https://fonts.googleapis.com/css2?family=Lora&display=optional"
            rel="stylesheet"
          />
           <link
            href="https://fonts.googleapis.com/css2?family=Merriweather&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument