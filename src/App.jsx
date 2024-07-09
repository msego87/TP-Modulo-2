import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Link, Outlet } from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  )
}

export default App
