import logo from './logo.svg';
import './App.css';

import LoginPage from './pages/LoginPage';
import {Route,Routes} from 'react-router';
import ListOfPost from './pages/ListOfPost';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />}></Route>
      <Route path='/posts' element={<ListOfPost />}></Route>
    </Routes>
  );
}

export default App;
