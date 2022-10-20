import { RegisterUser } from './components/RegisterUser';
import { UserProvider } from './context/UserContext';
import './App.css';
import { ListUsers } from './components/ListUsers';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Lets bora</h1>
        <ListUsers />
        <RegisterUser />
      </div>
    </UserProvider>
  );
}

export default App;
