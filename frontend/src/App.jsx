import './App.css';
import PrimarySearchAppBar from './components/Navbar.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MultipleItems from './components/MultipleItems.jsx';
import Slider from './components/Slider/Slider.jsx';
import cover1 from './pictures/cover1.jpg';
import cover2 from './pictures/cover2.jpg';
import cover3 from './pictures/cover3.jpg';
import cover4 from './pictures/cover4.jpg';
import PageRoutes from './components/PageRoutes.jsx';

import ApiCall from './components/Api.jsx';

function App() {
  const images1 = [
    cover1,
    cover2,
    cover3,
    cover4,
    "https://via.placeholder.com/250/00FF00?text=5",
    "https://via.placeholder.com/260/00FF00?text=6",
    "https://via.placeholder.com/270/00FF00?text=7",
    "https://via.placeholder.com/280/00FF00?text=8",
    "https://via.placeholder.com/250/00FF00?text=9",
    "https://via.placeholder.com/260/00FF00?text=10",
    "https://via.placeholder.com/270/00FF00?text=11",
    "https://via.placeholder.com/280/00FF00?text=12"
  ];

  return (
    <div className="App">
      <Router>
        {/* <PrimarySearchAppBar />
        <ApiCall />
        <br></br> */}
        <PageRoutes />
      </Router>
      {/* <Slider images={images1} title='Top Shows'/> */}
    </div>
  );
}

export default App;
