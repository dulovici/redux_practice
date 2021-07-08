import './App.scss';
import {store} from './redux/store'
import {Provider} from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import FridgeContainer from './components/FridgeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake/>
        <ItemContainer /> */}
        <CakeContainer />
        <NewCakeContainer />
        {/* <HooksCakeContainer/> */}
        <IceCreamContainer />
        <FridgeContainer />
        <br></br><br></br>
        <UserContainer />
      </div>
    </Provider>
    
  );
}

export default App;
