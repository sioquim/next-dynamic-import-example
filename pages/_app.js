import App, { Container } from 'next/app';

import RegionProvider from '../components/region-provider';

class PlayApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
          <RegionProvider>
            <Component {...pageProps} />
          </RegionProvider>
      </Container>
    );
  }
}

export default PlayApp;