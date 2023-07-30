import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./Router/MainRouter";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
