import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ViewCard from "./components/ViewCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"  element ={<Home/>} /> 
        <Route path="/view/:id"  element ={<ViewCard/>} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
