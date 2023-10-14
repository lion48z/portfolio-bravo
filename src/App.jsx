import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import  Navbar from './Navbar';
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import ContactMe from "./pages/ContactMe";

function App() {
  let Component 
    switch (window.location.pathname) {
      case "/":
        Component = App
        break
      case "/aboutMe":
        Component = About
        break
      case "/contactMe":
        Component = ContactMe
        break
      case "education":
        Component = Education
        break
      case "experience":
        Component = Experience
      
    }
    return (
    <>
    <Navbar />
    <Component />
    </>
    )
   
  
}

export default App;