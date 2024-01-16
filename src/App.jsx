import SideBar from './components/SideBar/SideBar';
import './css/output.css'

function App() {

  sessionStorage.setItem('userSession', JSON.stringify({isLogged: false}))


  return (
    <div>
      <SideBar/>
    </div>
  );
}

export default App;
