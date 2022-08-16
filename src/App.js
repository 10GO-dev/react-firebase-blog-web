import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "views/Login";
import Home from "views/Home";
import Signup from "views/SignUp";
import CreatePost from "views/CreatePost";
import NavBar from "components/ui/NavBar";
import AuthProvider from "context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
