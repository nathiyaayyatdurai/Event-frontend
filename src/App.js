import './App.css';
import "./event.css";
import Register from './Register';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserLogin from './UserLogin';
import AdminDashboard from './AdminComponents/AdminDashboard';
import UserDashboard from './UserComponents/UserDashboard';
import AdminLogin from './AdminComponents/AdminLogin';
import EditEvent from './AdminComponents/EditEvent';
import AddEvent from './AdminComponents/AddEvent';
import ParticipateList from './AdminComponents/ParticipateList';
import Registerform from './UserComponents/Registerform';





function App() {
  return (
    <>
        
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />
          {/* Admin Routes */}

          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/ParticipateList" element={<ParticipateList />} />
          <Route path="/edit-event/:id" element={<EditEvent />} />

          {/* User Routes */}
         <Route path="/userdashboard" element={<UserDashboard />} />
         <Route path="/registerform" element={<Registerform />} />

    

        </Routes>
      </BrowserRouter>

     

    </>
  );
}

export default App; 