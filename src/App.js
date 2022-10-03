import { Route, Routes } from "react-router-dom";
import TopLogo from "./components/TopLogo";
import DetailStarship from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <TopLogo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:name" element={<DetailStarship />} />
      </Routes>
    </>
  );
}

export default App;
