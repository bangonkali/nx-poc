import styles from './poc-react-shared-components.module.css';

/* eslint-disable-next-line */
export interface PocReactSharedComponentsProps {}

export function PocReactSharedComponents(props: PocReactSharedComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PocReactSharedComponents!</h1>
    </div>
  );
}

export default PocReactSharedComponents;
