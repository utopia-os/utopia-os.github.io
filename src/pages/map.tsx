import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import UtopiaOSFeatures from '@site/src/components/HomepageFeatures/utopia-os';
import UtopiaUIFeatures from '@site/src/components/HomepageFeatures/utopia-ui';
import UtopiaP2PFeatures from '@site/src/components/HomepageFeatures/utopia-p2p';
import BrowserOnly from '@docusaurus/BrowserOnly';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            const MapComponent = require('@site/src/components/map').Map;
            return <MapComponent height='calc(100vh - 60px)' width='100vw' center={[50.6, 9.6]} zoom={11}/>;
          }}
        </BrowserOnly>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Map Demo`}
      description="Map Demo">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
