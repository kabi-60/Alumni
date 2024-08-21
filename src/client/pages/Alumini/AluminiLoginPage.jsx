import React from 'react';
import studentlogin from '../../assets/aluminiLoginpage.png';
import Graduation from '../../assets/Graduation.png';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import Tab from '../../components/Tab';

const   AluminiLoginPage = () => {
  return (
    <section>

      <Navbar/>
    <div className="flex  mx-auto   justify-center items-center h-full ">
      <div
        id="back-div"
        className="bg-white h-[90vh]  flex justify-center items-center rounded-[26px] "
      >
        <div className="h-[700px] relative shadow-2xl border-r-0  border  flex items-center  rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2 ">
        <div className='absolute top-3 right-8'>
            <Tab/>

          </div>
        <div>
       
          <h1 className="pt-8 pb-6 font-extrabold text-6xl text-center cursor-default">
            LogIn
          </h1>
          <form action="#" method="post" className="space-y-4 w-[400px]">
            <div className='mb-5 mt-10'>

              <input
                id="email"
                className="border p-3 shadow-md placeholder:text-base focus:scale-105 border-t-0 border-r-0 border-l-0 border-b-2 mb-5  ease-in-out duration-300 border-gray-300 rounded-lg w-full "
                type="email"
                placeholder="Alumini Email"
                required
              />
            </div>
            <div className=''>

              <input
                id="password"
                className="border p-3 shadow-md placeholder:text-base focus:scale-105 border-t-0 border-r-0 border-l-0 border-b-2 mb-5  ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="password"
                placeholder=" Password"
                required
              />
            </div>
            <a
              className="group text-gray-500 transition-all duration-100 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom bg-gradient-to-r text-sm bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Forget your password?
              </span>
            </a>
            <button
              className="bg-cyan-500 shadow-lg mt-24 p-2 text-white rounded-lg w-full hover:scale-100 hover:bg-cyan-700 transition duration-300 ease-in-out"
              type="submit"
            >
              LOG IN
            </button>
          </form>
          <div className="flex flex-col mt-10 items-center justify-center text-sm">
            <h3>
              Don't have an account?
              <a
                className="group text-cyan-500 ml-2  font-bold transition-all duration-100 ease-in-out"
                href="/aluminisignuppage"
              >
                <span  className="bg-left-bottom bg-gradient-to-r bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Sign Up
                </span>
              </a>
            </h3>
          </div>
        </div>
        </div>

      </div>
      <div className="relative shadow-2xl">
      <div className='absolute bottom-0 left-48'>
          <img src={Graduation} alt=""  className='h-[400px]'/>
      </div>
        <img
          src={studentlogin}
          className="rounded-3xl h-[700px]"
          alt="Login Illustration"
        />
      </div>
    </div>
    </section>

  );
};

export default  AluminiLoginPage;
