import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import IndexPage from "./Components/IndexPage";
import ShowPage from "./Components/ShowPage";
import EditPage from "./Components/EditPage";
import NewPage from "./Components/NewPage";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<IndexPage />} />
          <Route path="/cities/:id" element={<ShowPage />} />
          <Route path="/cities/:id/edit" element={<EditPage />} />
          <Route path="/cities/new" element={<NewPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
