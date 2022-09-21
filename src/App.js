import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './common/Header'
import Sidebar from './common/Siderbar';

function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
          <div className='col-12 col-sm-12 col-md-3 col-lg-3'>
              <Sidebar />
          </div>
          <div className='col-12 col-sm-12 col-md-9 col-lg-9'>
              <Header />
            </div>
      </div>
    </div>
  );
}

export default App;
