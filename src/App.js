import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import SortingVisualizer from './Components/SortingVisualizer';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <SortingVisualizer />
      </div>
    </Provider>
  );
}

export default App;
