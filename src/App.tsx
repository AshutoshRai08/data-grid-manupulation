import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';
import NavLinks from './components/Navigation/Nav';
import DataGridDemo from './components/Pages/viewGrid/viewGrid';
import TabGrid from './components/Pages/viewTabGrid/TabGrid';
import ParentComponent from './Trail/MainComp';
import MediaCard from './components/Pages/Helper/user-detailed-page';
function App() {

  return (
 <Router>
<NavLinks></NavLinks>
  <main>
    <Routes>
    <Route path='/' element={<DataGridDemo/>}/>
    <Route path='/tabGrid' element={<TabGrid/>}/>
    <Route path='/parent' element={<ParentComponent/>}/>
    <Route path='/userInfo/:id' element={<MediaCard/>}/>
    <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </main>
 </Router>
  );
}

export default App;
