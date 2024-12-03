import Banner from "./components/banner/Banner"
import Blog from "./components/blog/Blog"
import Client from "./components/client/Client"
import Connector from "./components/connector/Connector"
import Contact from "./components/contact/Contact"
import Design from "./components/design/Design"
import  {Faq}  from "./components/faq/Faq"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Project from "./components/project/Project"
import Work from "./components/work/Work"



function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Work/>
      <Project/>
      <Design/>
      <Client/>
      <Faq/>
      <Contact/>
      <Blog/>
      <Footer/>
      <Connector/>
    </>
  )
}

export default App
