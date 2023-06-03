import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import Header from "./components/header";
import MovieDetail from "./pages/movieDetail";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/movie/:movieId" element={<MovieDetail/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
