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
        ["Bullion Operation", dashboard],
        ["Transaction", dashboard],
        ["Your Network", dashboard],
        ["Other Operation", dashboard],
        ["Manage Bank Account", dashboard],
        ["FAQ", dashboard],
        ["Customize Dashboard", dashboard]
      ]} />
      <Page1 />
      {/* <Page2 /> */}
      
    </div>
  );
}

export default App;
