import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Organicly growing Network ',
    Svg: require('@site/static/img/network.svg').default,
    description: (
      <>
        Join the communal journey of creating a healthier, fair, transparent and anarchic future      </>
    ),
  },
  {
    title: 'Symbiotic Synergy Solution',
    Svg: require('@site/static/img/3markers-globe.svg').default,
    description: (
      <>
        Let’s continue the path together from utopia to living commons. This is how individual dreams become simultaneous realities.
      </>
    ),
  },
  {
    title: 'Start Mapping Now',
    Svg: require('@site/static/img/map.svg').default,
    description: (
      <>
        Check out the prototyp at <Link to="https://new.docutopia.de">new.docutopia.de</Link>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
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
