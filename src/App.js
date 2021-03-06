import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'

import 'normalize.css';
import './App.css';

function App() {
  const routes = useRoutes()

  return (
    <Router>
      { routes }
    </Router>
  );
}

export default App;
