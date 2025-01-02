import './App.css'
import { Applayout } from './component/layout/Applayout';
import { CountryDetails } from './component/layout/CountryDetails';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Country } from './pages/Country';
import { ErrorPage } from './pages/ErrorPage';
import {Home} from "./pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

 const App = () =>{
  return <RouterProvider router={router}></RouterProvider>
} 
export default App;