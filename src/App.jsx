import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
        </Routes>
    </Router>
  );
}

export default App;
