import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';

import Posts from './components/Posts';
import Create from './components/Create'
import Modify from './components/Modify'
import Error from './components/Error'

function App() {

  return (
    <div className="App">
      <Router>
        <nav className="navbar">
            <h2><Link to = '/'>Posts</Link></h2>
            <h2><Link to = '/createpost'>Create Post</Link></h2>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Posts />
          </Route>
          <Route path='/createpost'>
            <Create />
          </Route>
          <Route path='/modifypost/:id' children={<Modify />}></Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
