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
    title: 'Map Components',
    Svg: require('@site/static/img/map.svg').default,
    description: (
      <>
        The Map is the crystallization point between real and virtual world where everything comes together.
      </>
    ),
  },
  {
    title: 'Profile Components',
    Svg: require('@site/static/img/profiles.svg').default,
    description: (
      <>
        Profiles allow users to intodruce them self to the community
      </>
    ),
  },
  {
    title: 'Market Components',
    Svg: require('@site/static/img/market.svg').default,
    description: (
      <>
        Browse all Offers and Needs in the categorized p2p Market Place
      </>
    ),
  },
  {
    title: 'Calendar Components',
    Svg: require('@site/static/img/moon.svg').default,
    description: (
      <>
        coming soon ...
      </>
    ),
  },
  {
    title: 'Friends and Groups Components',
    Svg: require('@site/static/img/friends.svg').default,
    description: (
      <>
        Customize your App and manage your personal Network of Friends and Groups 
      </>
    ),
  },
  {
    title: 'Tags and Colors Components',
    Svg: require('@site/static/img/tags.svg').default,
    description: (
      <>
        Colors and Tags are an intuitive way to keep track of your content
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
