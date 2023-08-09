import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import './index.scss'; // To indicate to bundle it
import { Container } from 'react-bootstrap';
import Media from 'react-media';

// Main component
const MyFlixApplication = () => {
  return <MainView />;
};

// Find root of app
const container = document.querySelector('#root');
const root = createRoot(container);

// Render app in the root DO element
root.render(<MyFlixApplication />);
