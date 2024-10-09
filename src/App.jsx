import { useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome.jsx';
import Counter from './pages/Counter.jsx';
import MultipleList from './pages/MultipleList.jsx';
import BookPage from './pages/BookPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Users from './pages/Users.jsx';
import UserProfile from './components/UserProfile.jsx';
import Register from './pages/Register.jsx';

function App() {
  const [name, setName] = useState('Vite');

  return (
    <>
      <div className="row">
        <Header />
      </div>
      <Routes>
        <Route path="/welcome" element={<Welcome name={name} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/listMultiple" element={<MultipleList />} />
        <Route path="/listBook" element={<BookPage />} />
        <Route path="/listUser" element={<Users />} />
        <Route path="/listUser/:id" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
