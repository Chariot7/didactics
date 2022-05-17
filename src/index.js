import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Screen1 from "./routes/screen1";
import Screen2 from "./routes/screen2";
import Screen3 from "./routes/screen3";
import Screen4 from "./routes/screen4";
import Artists from "./routes/artists";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="screen1" element={<Screen1 />} />
        <Route path="screen2" element={<Screen2 />} />
        <Route path="screen3" element={<Screen3 />} />
        <Route path="screen4" element={<Screen4 />} />
        <Route path="artists" element={<Artists />} />
      </Route>
    </Routes>
  </BrowserRouter>
);