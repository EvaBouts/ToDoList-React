import { createRoot } from 'react-dom/client';

const container = document.querySelector('#app');

const root = createRoot(container);

// Tester d'abord avec du HTML en dur puis lancer yarn dans le terminal
root.render(<h1>Test</h1>)
// Puis appeler <App /> dans le rendu