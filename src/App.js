import {BrowserRouter, Route, Routes, RouterProvider,
  createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Protected from './pages/Protected';
import Paintings from './pages/Paintings';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import {setIsAuthenticated, logout} from './store/authSlice';
import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import {auth} from './firebase';
import { onAuthStateChanged } from "firebase/auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        
        <Route element={<Protected redirectTo="/" />}>
          <Route path='/home' element={<Home/>} />
          <Route path='/paintings' element={<Paintings/>} /> 
        </Route>
      </Route>
    </>
  )
);

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setIsAuthenticated());
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return <RouterProvider router={router} />;

  // const user = useSelector(selectUsers);

  // return (
  //   <div>
  //     <h1 className="bg-sky-200 text-3xl font-bold underline">
  //     Hello world!
  //     </h1>

      
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path='/' element={<Register/>} />
  //         <Route path='/login' element={<Login/>} />
  //         <Route path='/protected' element={<Protected/>} />
  //       </Routes>
  //     </BrowserRouter>

  //   </div>
  // );
}

export default App;
