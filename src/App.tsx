import './App.css';
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';
import NavLinks from './components/Navigation/Nav';
import DataGridDemo from './components/Pages/viewGrid/viewGrid';
import TabGrid from './components/Pages/viewTabGrid/TabGrid';
import MediaCard from './components/Pages/Helper/user-detailed-page';
import ViewComplete from './components/Pages/autCompleteData/autoCompleteData'
// import SearchBar from './components/Shared/searchBar';
// import SearchUI from './components/Shared/tranformation'


function App() {

  return (
 <Router>
<NavLinks></NavLinks>
  <main>
    <Routes>
    <Route path='/' element={<DataGridDemo/>}/>
    <Route path='/tabGrid' element={<TabGrid/>}/>
    <Route path='/userInfo/:id' element={<MediaCard/>}/>
    <Route path='/autoCompleteHandler' element={<ViewComplete/>}/>
    {/* <Route path='/searchUI' element={<SearchUI/>}/> */}
    <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </main>
 </Router>
  );
}

export default App;
