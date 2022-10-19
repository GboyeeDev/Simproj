import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import "./Home.css"


function Home() {
    return (
        <div className="container">
            <Header/>
            <MainContent />
            <Footer />
        </div>
      );
}

export default Home;