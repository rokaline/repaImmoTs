import "@mantine/core/styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import {ImmoLayout} from "./layouts/ImmoLayout";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImmoLayout/>}>
          <Route index element={<Products/>} />
          <Route path="/products" element={<Products/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;