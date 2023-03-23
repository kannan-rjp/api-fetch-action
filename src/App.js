import logo from './logo.svg';
import './App.css';

import LoginPage from './pages/LoginPage';
import {Route,Routes} from 'react-router';
import ListOfPost from './pages/ListOfPost';
import ViewPerPost from './pages/ViewPerPost';


function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />}></Route>
      <Route path='/posts' element={<ListOfPost />}></Route>
      <Route path='/posts/view' element={<ViewPerPost />}></Route>
    </Routes>
  );
}

export default App;
