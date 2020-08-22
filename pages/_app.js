import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/apollo";
import Style from "../components/shared/global.style";
import "react-image-lightbox/style.css";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ApolloProvider client={apollo}>
          <Style />
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}
export default withApollo(MyApp);
