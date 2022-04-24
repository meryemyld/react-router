import NavbarMenu from "./components/NavbarMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./components/HomePage";
import AlbumPage from "./components/AlbumPage";

function App() {
  
  return (
    <Router>
      <div className="App">
        <NavbarMenu />

        <Switch>
          <Route path="/" exact component={HomePage}/> 
          <Route path="/album" component={AlbumPage} /> 
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;


