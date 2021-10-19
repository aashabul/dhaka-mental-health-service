
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Pages/Components/Header/Header';
import Footer from './Pages/Components/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notfound from './Pages/Components/NotFound/Notfound';
import LearnMore from './Pages/Components/LearnMore/LearnMore';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/learnmore/:serviceId">
              <LearnMore></LearnMore>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
