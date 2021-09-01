import Navbar from "./components/navbar/Navbar";
import Card from "./components/Card/Card";
import { useUsers } from "./UserContext";

import "./App.css";

const App = () => {
  const { users,status } = useUsers();

  return (
    <div>
       <Navbar/>
       { status === "pending" && <p className="home-para">Loading...</p>}
       <div className="card-container">
          {
            users.map(user => (
              <Card user={user} key={user.id}/>
            )) 
          }
       </div>
       { users.length === 0 && status === "idle" && <p className="home-para">Click on 'Get Users' button to see the users</p>}
    </div>
  );
};

export default App;
