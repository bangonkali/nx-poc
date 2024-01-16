// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { PocReactSharedComponents } from '@poc/poc-react-shared-components';

export function App() {
  return (
    <div>
      <NxWelcome title="poc-react-app-bravo" />
      <PocReactSharedComponents />
    </div>
  );
}

export default App;
