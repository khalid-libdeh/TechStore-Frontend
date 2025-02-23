import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Layout from './Components/Layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
