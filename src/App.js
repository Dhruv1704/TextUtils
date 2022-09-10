import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import {useState} from "react";
import Alert from "./Components/Alert";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


function App() {
    const [mode, setMode] = useState("Dark")
    const [alert, setAlert] = useState(null);

    const toggleMode = () => {
        if (mode === "Dark") {
            setMode("Light")
            document.body.style.background = "Black"
            document.body.style.color = "White"
            document.getElementById("textarea").style.background = "grey"
            document.getElementById("textarea").style.color = "white"
            showAlert("Dark Mode turned on.", "Success")
        } else {
            setMode("Dark")
            document.body.style.color = "Black"
            document.body.style.background = "White"
            document.getElementById("textarea").style.background = "White"
            document.getElementById("textarea").style.color = "Black"
            showAlert("Light Mode turned on.", "Success")
        }
    }

    const toggleAlert = () => {
        setAlert(null)
    }

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => toggleAlert(), 3000)
    }

    return (
        <>
            <Router>
                <Navbar title="TextUtils" navItem={"About"} mode={mode} toggleMode={toggleMode}/>
                <Alert toggleAlert={toggleAlert} alert={alert}/>
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<TextForm heading={"Enter the text below to analyze"}
                                                                 showAlert={showAlert}/>}/>
                        <Route exact path="/about" element={<About/>}/>
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App;


////+++++++ *************************
// Route tag : exact path  because  /users --> Component 1
//                                     /users/home --> Component 2
// if not used exact then if want to go to /users/home instead it will go to /users as react does partial matching if exact not written