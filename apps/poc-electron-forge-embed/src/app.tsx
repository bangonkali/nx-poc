import { createRoot } from 'react-dom/client';
import { PocReactSharedComponents } from '@poc/poc-react-shared-components';

const container = document.getElementById('react-content')!;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <div>
    <PocReactSharedComponents />
  </div>
);
