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
    title: 'Local Connection',
    Svg: require('@site/static/img/3markers-arrow.svg').default,
    description: (
      <>
        Find like-minded people, places and events. In your neighbourhood and wherever you are!
      </>
    ),
  },
  {
    title: 'Mapping the Change',
    Svg: require('@site/static/img/3markers-globe.svg').default,
    description: (
      <>
        Everywhere in the world, people build our future. Make this transformation visible. Worldwide!
      </>
    ),
  },
  {
    title: 'Decentralized Networks',
    Svg: require('@site/static/img/network.svg').default,
    description: (
      <>
        Get away with hierarchies and organise your life in decentralized ways - physically and technically
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
