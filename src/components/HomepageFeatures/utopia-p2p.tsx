import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Serverless Hosting',
    Svg: require('@site/static/img/serverless.svg').default,
    description: (
      <>
        Let's avoid any kind of server to protect our data and make our Apps unstopable.
      </>
    ),
  },
  {
    title: 'p2p Database',
    Svg: require('@site/static/img/p2p-database.svg').default,
    description: (
      <>
        Instead we make use of decentralized databases in a p2p Environment.
      </>
    ),
  },
  {
    title: 'Key-based IDs',
    Svg: require('@site/static/img/public-private-key.svg').default,
    description: (
      <>
        Create a public-private Key Pair as your serverless decentralized Identity. 
      </>
    ),
  },
  {
    title: 'Web of Trust',
    Svg: require('@site/static/img/qr-scan.svg').default,
    description: (
      <>
        Build your Web of Trust by sharing your Public Key offline with people you trust.
      </>
    ),
  },
  {
    title: 'e2e Encryption',
    Svg: require('@site/static/img/web-of-trust.svg').default,
    description: (
      <>
        Share your private data end-to-end-encrypted within your Web of Trust.
      </>
    ),
  },
  {
    title: 'Offline Support',
    Svg: require('@site/static/img/offline.svg').default,
    description: (
      <>
        Use all this Features even without being connected to the Internet.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function UtopiaOSFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
