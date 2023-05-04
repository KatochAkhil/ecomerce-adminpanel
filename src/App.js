import "./App.css";
import { Navigate, Route, Routes as Switch } from "react-router-dom";
import Navbar from "./common/navbar";
import Sidebar from "./common/sidebar";
import HomePage from "./pages/home";
import Users from "./pages/users";
import Login from "./pages/auth/login";
import Products from "./pages/products";
import Addproduct from "./pages/products/Addproduct";
import AddUser from "./pages/users/Addusers";
import Orders from "./pages/orders";
import Customers from "./pages/customers";
import "bootstrap/dist/css/bootstrap.min.css";
import Editproduct from "./pages/products/EditProduct";
import Adduser from "./pages/users/Addusers";
import EditUser from "./pages/users/EditUser";

function App() {
  const user = localStorage.getItem("user");

  return (
    <div id="wrapper">
      {user && <Sidebar />}
      <div id="content-wrapper" className="d-flex flex-column">
        {user && <Navbar />}
        <Switch>
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={user ? <HomePage /> : <Login />} />
          <Route path="/users" element={user ? <Users /> : <Login />} />
          <Route path="/products" element={user ? <Products /> : <Login />} />
          <Route path="/orders" element={user ? <Orders /> : <Login />} />
          <Route path="/products" element={user ? <Products /> : <Login />} />
          <Route path="/customers" element={user ? <Customers /> : <Login />} />
          <Route
            path="/products/add"
            element={user ? <Addproduct /> : <Login />}
          />
          <Route path="/users/add" element={user ? <Adduser /> : <Login />} />
          <Route
            path="/product/:id"
            element={user ? <Editproduct /> : <Login />}
          />
          <Route path="/user/:id" element={user ? <EditUser /> : <Login />} />
          <Route path="/users/add" element={user ? <AddUser /> : <Login />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
