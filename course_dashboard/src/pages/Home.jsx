import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
function Home() {

      const {theme}= useContext(ThemeContext)
      return (
            <div style={{
                  padding:"40px",
                  backgroundColor : theme  == "light" ? "white" : "black", 
                  color : theme == "light" ? "black" : "white",
                  minHeight:"100vh"
            }}>
            <h1> Welcome Home Page</h1>
                  <p>This Platform show all the courses Here</p>
                  <Link to="/courses">
                  <button style={{
                        cursor:"pointer"
                  }}>Explore Course</button>
                  </Link>
            </div>

      )
}

 export default Home