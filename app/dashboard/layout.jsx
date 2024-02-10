import Footer from "../ui/footer/footer"
import NavBar from "../ui/navbar/navbar"
import Sidebar from "../ui/sidebar/sidebar"

const Layout = ({children}) => {
    return (
      <>
        {/* <div class="loader"></div> */}
        <div className="main-wrapper main-wrapper-1">
        <NavBar/>
        <Sidebar /> 
        {/* Main Content */}
        <div className="main-content">
            {children}
        </div>
        <Footer/>
      </div>
      </>
    )
  }
  
  export default Layout