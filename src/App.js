import Home from "./pages/home/home";
import ViewResume from "./pages/view-resume/view-resume";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/view" component={ViewResume} />
      </Router>
    </div>
  );
}

export default App;
