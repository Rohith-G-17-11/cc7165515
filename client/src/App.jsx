import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800">
        <nav className="w-full bg-lime-100 shadow">
          <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-2xl font-bold text-lime-600">MARKET PLACE</h1>
            <div className="space-x-6">
              <Link to="/" className="text-lime-600 hover:text-lime-500 font-medium">Home</Link>
              <Link to="/add" className="text-lime-600 hover:text-lime-500 font-medium">Add Product</Link>
            </div>
          </div>
        </nav>

        <main className="flex-1 flex justify-center items-start">
          <div className="w-full max-w-5xl bg-white rounded-lg shadow p-8 mt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
