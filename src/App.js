import logo from './logo.svg';
import Page1 from '../src/Components/Page1'
import Page2 from '../src/Components/Page2'
import Navbar from '../src/Components/Navbar'
import dashboard from '../src/Components/dashboard.png'

import './App.css';

function App() {
  return (
    <div  className='main-container'>
      <Navbar  li={[
        ["Dashboard", dashboard],
        ["Restautant’s", dashboard],
        ["Manage User’s", dashboard],
        ["Manage Order’s", dashboard],
        ["Manage Coupon’s", dashboard]
      ]} />
      <Page1 />
      
    </div>
  );
}

export default App;
