import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import IndexPage from "./Components/IndexPage";
import ShowPage from "./Components/ShowPage";
import EditPage from "./Components/EditPage";
import NewPage from "./Components/NewPage";
import PageNotFound from "./Components/PageNotFound";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cities" element={<IndexPage />} />
          <Route path="/cities/:id" element={<ShowPage />} />
          <Route path="/cities/:id/edit" element={<EditPage />} />
          <Route path="/cities/new" element={<NewPage />} />
          <Route path="/notfound" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
