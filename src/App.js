import './App.scss';
import {store} from './redux/store'
import {Provider} from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import FridgeContainer from './components/FridgeContainer';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        {/* <HooksCakeContainer/> */}
        <IceCreamContainer />
        <FridgeContainer />
      </div>
    </Provider>
    
  );
}

export default App;
