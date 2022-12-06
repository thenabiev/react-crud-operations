import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmpEdit from './EmpEdit';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetails from './EmpDetails';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}>
          </Route>
          <Route path='/create' element={<EmpCreate />}/>
          <Route path='/detail/:empid' element={<EmpDetails />}/>
          <Route path='/edit/:empid' element={<EmpEdit />}/>


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
