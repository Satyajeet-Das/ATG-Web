import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Posts from "./components/Posts";

function App() {
  return (
    <Router>
      <Routes>
        {/* If there is written anything inside the custom component it is passed as prop in children */}
        <Route
          path="/"
          element={
            <Layout>
              <Posts/>
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
