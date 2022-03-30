import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ContactList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
