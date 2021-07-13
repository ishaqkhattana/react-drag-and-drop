import store from "./redux/store";
import { Provider } from "react-redux";

import LandingPage from './container/LandingPage/LandingPage';

import './App.css';

function App() {
  return (
    <Provider store={store}>
 <div className="App">
     <LandingPage/>
     </div>
    </Provider>
   
  );
}

export default App;
