import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { getCookie, setCookies } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { GoogleFonts } from 'next-google-fonts';
import Script from 'next/script';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Palatino Linotype:wght@400;700&display=swap" />
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Segoe UI:wght@400;700&display=swap" />
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto Condensed:wght@400;700&display=swap" />
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Patrick Hand:wght@400;700&display=swap" /> */}
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C274YYFH7B"
        strategy="afterInteractive"
      />
            <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-C274YYFH7B');
        `}
      </Script>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            breakpoints: {
              xs: 500,
              sm: 800,
              md: 1000,
              lg: 1275,
              xl: 1800,
            },
          }}
          withGlobalStyles
          withNormalizeCSS
          defaultProps={{
            Container: {
              sizes: {
                xs: 540,
                sm: 720,
                md: 1140,
                lg: 1240,
                xl: 1320,
              },
            },
          }}
        >
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
