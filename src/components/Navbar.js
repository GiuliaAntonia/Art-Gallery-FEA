
import React from 'react'
import logo from './logo.png';
import {useDispatch} from 'react-redux';
import {signOut } from "firebase/auth";
import {auth} from '../firebase';
import { logout } from '../store/authSlice';


export function Navbar() {
    const dispatch = useDispatch();

    function handleLogout(){
        if(window.confirm('Are you sure you want to log out?')){
        signOut(auth).then(() => {
            dispatch()
        }).catch((error) => {
            console.log(error);
        });
        
        }
    
  }
  return (

        <nav class="bg-indigo-100 border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} class="h-12 w-12 rounded-full" alt="Luminous Nature logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Luminous Nature Gallery</span>
            </div>
            <div class="bg-indigo-100 hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-indigo-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <a href="/home" class=" block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#about-us" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                <a href="/paintings" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Paintings</a>
                </li>
                <li>
                <a href="#contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
                <li>
                    <button onClick={handleLogout}
                        class=" tracking-wide font-semibold bg-indigo-500 text-gray-100 w-35 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <svg class="w-5 h-5 -ml-3" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">

                        </svg>
                        <span class="ml-3 flex items-center">
                            Log Out <p class="text-indigo-500 ">jkn</p>
                        </span>
                    </button>
                </li>
            </ul>
            </div>
        </div>
        </nav>

  )
}

// export default Navbar
