import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
