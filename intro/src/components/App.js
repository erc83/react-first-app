import Home from './Home'
import About from './About'
import Topics from './Topics'
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
        </ul>
      </div>
    </BrowserRouter>
  );
}

export default App
