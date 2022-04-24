import Main from "./components/MainComponent";
import './App.css';
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
