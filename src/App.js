import './App.scss';
import {store} from './redux/store'
import {Provider} from 'react-redux';
import CakeContainer from './components/CakeContainer';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
    
  );
}

export default App;
