import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "views/Login";
import PostsWall from "views/PostsWall";
import Signup from "views/SignUp";
import CreatePost from "views/CreatePost";
import NavBar from "components/ui/NavBar";
import AuthProvider from "context/AuthContext";
import PrivateRoute from "components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<PostsWall/>} />
          <Route path="/create" element={<PrivateRoute>
            <CreatePost />
          </PrivateRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
