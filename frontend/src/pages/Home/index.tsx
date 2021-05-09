import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron bg-transparent">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analyze sales performance from different perspectives</p>
                    <hr />
                    <p>This application consists of displaying a dashboard from data provided by a back end built with Spring Boot.</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Open dashboard
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
