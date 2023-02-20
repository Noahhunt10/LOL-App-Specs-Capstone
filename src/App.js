import './App.css';
import ChampionScreen from './screens/ChampionScreen';
import ProfileScreen from './screens/ProfileScreen';
import ItemScreen from './screens/ItemScreen';
import LoginScreen from './screens/LoginScreen';
import Header from './components/Header'
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/'></Route>
          <Route path='/champions' element={<ChampionScreen/>}></Route>
          <Route path='/items' element={<ItemScreen/>}></Route>
          <Route path='/login' element={<LoginScreen/>}></Route>
          <Route path='/profile' element={<ProfileScreen/>}></Route>
        </Routes>
    
    </div>
  );
}

export default App;
