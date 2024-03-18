import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.querySelector('#app');

const root = createRoot(container);

// Tester d'abord avec du HTML en dur puis lancer yarn dans le terminal
root.render(<App />)
// Puis appeler <App /> dans le rendu