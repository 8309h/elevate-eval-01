import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar () {
      const {theme,toggleTheme} = useContext(ThemeContext)

      return (
            <nav style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  backgroundColor: theme == "light" ? "white" : "black",
                  color : theme == "light" ? "black" : "white"
            }}>
                  <h2>Course Dashboard</h2>

                  <div style={{
                        display:"flex",
                        justifyContent:"space-around",
                        "alignItems": "center"
                  }}>
                        <Link to = "/" >Home</Link>
                        <Link to="/courses">Course</Link>

                        <button onClick={toggleTheme}>{theme == "light" ? "Dark Mode" : "Light Mode"}</button>
                  </div>
            </nav>
      )
}

export default Navbar