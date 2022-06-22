import Home from "./screens/home/Home";
import List from "./screens/list/List";
import Login from "./screens/login/Login";
import NewPage from "./screens/new/NewPage";
import Single from "./screens/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<NewPage />} />
            </Route>
            <Route path="songs">
              <Route index element={<List />} />
              <Route path=":songId" element={<Single />} />
              <Route path="new" element={<NewPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
