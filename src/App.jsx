import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/Home";
import PrivacyPolicyPage from "./pages/Privacy";
import TermsOfServicePage from "./pages/Terms";
import ChatApp from "./pages/Chat";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/home" element={<HomePage/>} />
          <Route exact path="/privacy" element={<PrivacyPolicyPage/>} />
          <Route exact path="/tos" element={<TermsOfServicePage/>} />
          <Route exact path="/chat" element={<ChatApp/>} />
          <Route exact path="/profile" element={<ProfilePage/>} />
        </Routes>
    </Router>
  );
}

export default App;
