import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function Main() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
