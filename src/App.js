
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AllUsers } from './components/AllUsers';
import { Navbar } from './components/Navbar';
import { AddUser } from './components/AddUser';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
     <Route path="/" element={<AllUsers />} />
     <Route path="/addUser" element={<AddUser />} />
     <Route path="/editUser/:id" element={<AddUser />} />
     <Route path="/deleteUser/:id" element={<AllUsers />} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
