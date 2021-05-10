import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'

import './Landingpage.css'
import Landingpage  from './Landingpage';
import {Route , Link} from 'react-router-dom'
import Userproflie from './Userproflie';
import './responsive.css'

function App() {
  return (
    <>
      <Route exact path ="/"component={Landingpage}/>
      <Route exact path ="/Userproflie"component={Userproflie}/>

    </>
  );
}

export default App;
