import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Success rate (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Sales</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py3">
          <h2 className="text-primary">Sales</h2>
          <DataTable />
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default App;
