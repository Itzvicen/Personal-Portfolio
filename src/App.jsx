import './App.css';
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Landing } from './pages/Landing';
import { Trayectoria } from './pages/Trayectoria'
import { Route } from 'wouter';
import { NotFound } from './pages/NotFound'
import { Switch } from 'wouter';
import { Proyectos} from './pages/Proyectos'

function App() {
  return (
    <div className='App bg-white dark:bg-slate-900' id='light'>
      
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <Landing/>
          </Route>
          <Route path='/trayectoria'>
            <Trayectoria/>
          </Route>
          <Route path='/proyectos'>
            <Proyectos/>
          </Route>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      
    </div>  
  );
}

export default App;
