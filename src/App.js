import './assets/fontawesome/css/all.css'
import logo from './logo.svg';
import profile from './assets/profile.png'
import './App.css';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='grid main'>

      <div>
        <Sidebar/>
      </div>
      <div className='border '>
        <div className='flex border-b padding'>
          <div className='bold'>Home</div>
          <div>
            <i className='far fa-star'></i>
          </div>
        </div>
        
        <div className='padding'>
          <img className='profile' src={profile} />

          <div>
            
          </div>
        </div>


      </div>
      <div>RECHERCHE</div>
    </div>
  );
}

export default App;
