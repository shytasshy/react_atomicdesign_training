import "./App.css";
import { UserProvider } from "./providers/UserProviders";
import { Router } from "./router/Router";

function App() {
    return (
        <UserProvider>
            <Router />
        </UserProvider>
    );
}

export default App;
