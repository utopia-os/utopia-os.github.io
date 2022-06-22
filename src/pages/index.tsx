import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import UtopiaOSFeatures from '@site/src/components/HomepageFeatures/utopia-os';
import UtopiaUIFeatures from '@site/src/components/HomepageFeatures/utopia-ui';
import UtopiaP2PFeatures from '@site/src/components/HomepageFeatures/utopia-p2p';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div id="map" className={styles.map}>
        <MapContainer scrollWheelZoom={false} style={{ height: "400px",   width: "100vw" }}  center={[51.3, 9.6]} zoom={8}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Utopia OS is a Framework to build apps for real life communities">
      <HomepageHeader />
      <main>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center shadow--lw">
            <div className="container">
              <h1 className="hero__title">Utopia OS</h1>
              <p className="hero__subtitle">the Framework to build apps for real life communities</p>
              <div>
              <UtopiaOSFeatures />
                <button className="button button--secondary button--outline button--lg">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center shadow--lw">
            <div className="container">
              <h1 className="hero__title">Reusable UI Components</h1>
              <p className="hero__subtitle">the Framework to build apps for real life communities</p>
              <div>
              <UtopiaUIFeatures />
                <button className="button button--secondary button--outline button--lg">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center shadow--lw">
            <div className="container">
              <h1 className="hero__title">Unstopable p2p Apps</h1>
              <p className="hero__subtitle">the Framework to build apps for real life communities</p>
              <div>
              <UtopiaP2PFeatures />
                <button className="button button--secondary button--outline button--lg">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center">
            <div className="container">
              <h1 className="hero__title">Docutopia</h1>
              <p className="hero__subtitle">the open organicly growing network is the origin and the initial use case of Utopia OS</p>
              <div>
              <UtopiaOSFeatures />
                <button className="button button--secondary button--outline button--lg">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
