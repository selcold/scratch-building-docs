import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'High degree of freedom',
    description: `The game offers a variety of features and high freedom for players. Progress through the game in your own way and enjoy playing!`,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  },
  {
    title: 'Abundant elements',
    description: `The game frequently receives updates to add and enhance various elements, making it more enjoyable and superior.`,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  },
  {
    title: 'Real-time features',
    description: `Experience real-time profile creation, chat, and saving with our game using Scratch's cloud variables.`,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Translate>{title}</Translate>
        </Heading>
        <p>
          <Translate>{`${description}`}</Translate>
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
