import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/screens/Home"
import SignIn from "./components/screens/Login"
import Profile from "./components/screens/Profile"
import SignUp from "./components/screens/Signup"
import CreateRecipe from "./components/screens/CreateRecipe"
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<CreateRecipe />} />     
      </Routes>
</BrowserRouter>
  );
}

export default App;
