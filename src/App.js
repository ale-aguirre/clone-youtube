import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import VideosRecomendados from "./components/VideosRecomendados/VideosRecomendados";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" component={Navbar}/>
        <Route path="/" component={Sidebar}/>
        <Route path="/" component={VideosRecomendados}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
