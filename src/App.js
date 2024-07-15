import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SurveyCarousel from "./components/SurveyCarousel/SurveyCarousel";
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SurveyCarousel />
      </div>
    </Provider>
  );
}

export default App;
