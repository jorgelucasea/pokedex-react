import { 
  createBrowserRouter,
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom';

//pages
import Home from './pages/Home'
import Details from './pages/Details'

//layout
import NavBar from './layout/NavBar';

import './App.css';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavBar />}>
      <Route 
        index 
        element={<Home />}
        />
      <Route 
        path=':id' 
        element={<Details />}
        />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
