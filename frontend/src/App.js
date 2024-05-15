import UserSignIn from "./Components/Authantication/Login";
import UserSignUp1 from "./Components/Authantication/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "./Components/Authantication/userProfile";
import ProtectedRoutesJWT from "./Components/Authantication/protectedRoute";
import HomePage from "./Components/Homepage";
import Newsfeed from "./Components/newsFeed";
import App1 from "./Components/Carousal2";
import UserSignUp from "./Components/Authantication/Registration";
import AdminUserProfile from "./Components/Authantication/adminuserProfile";
import FileUpload from "./Components/Authantication/addgames";




function App() {
  return (
    <div >
      {/* <UserSignUp1/> */}
      
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Login" element={<UserSignIn/>}/>
          <Route path="/registration" element={<UserSignUp/>}/>
          <Route path="/userprofile" element={<UserProfile/>} />
          <Route path='/adminuserprofile' element={<AdminUserProfile/>} />
          <Route path="/newsFeed" element={<Newsfeed/>}/>
          <Route path="/fileup" element={<FileUpload/>}/>
          {/* <Route path="/" element={<App1/>}/> */}
          

          
        </Routes>
        {/* <Routes>
          <Route element={<ProtectedRoutesJWT/>}>
          <Route path="/userprofile" element={<UserProfile/>} />
          </Route>
        </Routes> */}
        
      </Router>

    </div>
  );
}

export default App;
