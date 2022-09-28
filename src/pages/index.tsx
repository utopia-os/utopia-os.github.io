import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import UtopiaOSFeatures from '@site/src/components/HomepageFeatures/utopia-os';
import UtopiaUIFeatures from '@site/src/components/HomepageFeatures/utopia-ui';
import UtopiaP2PFeatures from '@site/src/components/HomepageFeatures/utopia-p2p';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            const MapComponent = require('@site/src/components/map').Map;
            return <MapComponent height='380px' width='100vw' center={[50.6, 9.55]} zoom={10}/>;
          }}
        </BrowserOnly>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="the Web Framework to build Apps for Real Life Communities">
      <HomepageHeader />
      <main>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center shadow--lw">
            <div className="container">
              <h1 className="hero__title">Utopia OS</h1>
              <p className="hero__subtitle">the Web Framework to build Apps for Real Life Action</p>
              <div>
              <UtopiaOSFeatures />
                <Link href='/docs/intro'>
                  <button className="button button--secondary button--outline button--lg">
                    read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center shadow--lw">
            <div className="container">
              <h1 className="hero__title">Utopia UI </h1>
              <p className="hero__subtitle">easy customizable UI Components which fit your projects needs</p>
              <div>
              <UtopiaUIFeatures />
                <Link href='/docs/utopia-ui/getting-started'>
                  <button className="button button--secondary button--outline button--lg">
                    Getting Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center">
            <div className="container">
              <h1 className="hero__title">Utopia p2p</h1>
              <p className="hero__subtitle">imagine to run everything in a fully decentralized environment</p>
              <div>
              <UtopiaP2PFeatures />
                <Link href='/category/utopia-p2p'>
                  <button className="button button--secondary button--outline button--lg">
                    read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
