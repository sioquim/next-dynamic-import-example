import React from "react";

import Head from "next/head";
import Nav from "../components/nav";
import { RegionConsumer } from "../components/region-provider";
import dynamic from "next/dynamic";

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <RegionConsumer>
        {({ region, changeRegion }) => {
          const CowsayHi = dynamic({
            loader: () => import("../components/cowsay-hi"),
            loading: () => <p>Loading ...</p>
          });

          return (
            <>
              <button type="button" onClick={() => changeRegion("all")}>
                All Regions
              </button>
              <button type="button" onClick={() => changeRegion("nz")}>
                NZ Region
              </button>
              <button type="button" onClick={() => changeRegion("au")}>
                AU Region
              </button>
              <p>Current region is {region}</p>
              {region === "nz" && <CowsayHi message="I'm from NZ" />}
              {region === "au" && <CowsayHi message="I'm from AU" />}
            </>
          );
        }}
      </RegionConsumer>
    </div>
  );
}

export default Home;
