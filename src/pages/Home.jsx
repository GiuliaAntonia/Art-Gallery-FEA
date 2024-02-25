
import React from 'react'
import {signOut } from "firebase/auth";
import {useDispatch} from 'react-redux';
// import {setUser} from '../stores/usersSlice';
import { setIsAuthenticated, logout } from '../store/authSlice';
import {auth} from '../firebase';
import {Navbar} from '../components/Navbar';
import img1 from './img1.png';
import logo from '../components/logo.png';
import {Footer} from '../components/Footer';

function Home() {


  return (
    <div>
      <Navbar/>
      {/* <h2>Home</h2> */}

      <header className="bg-red-50 text-white text-center py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Text on the left */}
            <div className="md:w-1/2 text-left md:text-right px-4">
              <h1 className=" text-center text-slate-900 text-4xl font-bold mb-4">Welcome to Luminous Nature Gallery</h1>
              <p className="text-lg text-slate-900 text-center">
              The perfect place to purchase stunning paintings that capture the beauty of nature. 
              Immerse yourself in a world where each brushstroke brings the vibrant colors of nature to life. 
              Our curated collection features exquisite artworks that convey the essence of landscapes, flowers, 
              and the mesmerizing beauty of the outdoors
              </p>
            </div>

            {/* Image on the right */}
            <div className="md:w-1/2 px-4">
              <img
                src={img1}
                alt="Nature Painting"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section id="about-us" className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md flex">
        <div className="w-1/4">
          <img src={logo} alt="Luminous Nature Gallery Logo" className="mb-6 w-17 h-17 rounded-full" />
        </div>
        <div className="w-3/4 pl-8">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-center text-lg leading-relaxed mb-6">
            Welcome to Luminous Nature Gallery, where art meets nature in a symphony of colors and emotions. We are dedicated to curating an exquisite collection that transcends the boundaries between canvas and reality. Our gallery is a testament to the profound connection between talented artists and the breathtaking wonders of the natural world. Each piece in our collection is a visual poem, capturing the essence of landscapes, flora, and the ever-changing beauty that surrounds us. Whether you're an avid collector or a nature enthusiast, we invite you to immerse yourself in the stories that unfold with every brushstroke. Explore, discover, and join us on a journey of inspiration and appreciation for the unparalleled beauty that nature offers. Luminous Nature Gallery - where art and nature converge to create an everlasting masterpiece.
          </p>
        </div>
      </section>


      {/* Testimonial Section */}
      <section className="bg-slate-100 container mx-auto my-12">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 leading-relaxed">
                  "Amazing gallery! The paintings truly capture the essence of nature. Highly recommended."
                </p>
                <p className="text-gray-600 font-semibold mt-4">- Happy Customer 1</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 leading-relaxed">
                  "Incredible selection of nature-inspired art. Each piece tells a unique story and adds beauty to any space."
                </p>
                <p className="text-gray-600 font-semibold mt-4">- Satisfied Collector</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 leading-relaxed">
                  "Luminous Nature Gallery exceeded my expectations. The artistry and attention to detail are unmatched."
                </p>
                <p className="text-gray-600 font-semibold mt-4">- Nature Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer Section */}
      <section id="contact">
        <Footer/>
      </section>

    </div>

  )
}

export default Home
