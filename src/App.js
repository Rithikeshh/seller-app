import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <div className='w-[100%] text-center top-[90%] bg-red-600 absolute'>Footer</div> */}
    </div>
  );
}

export default App;
