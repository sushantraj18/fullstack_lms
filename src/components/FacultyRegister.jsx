import React from 'react'
import { Link } from 'react-router-dom';


function FacultyRegister() {

    const handleSubmit = async()=>{

    }

    const handleChange = ()=>{

    }

    const loading = false;

    return (
        <div className="flex  items-center p-4 ">
      <div className="text-center  text-white w-[50%] " >
        <h1 className="text-1xl text-3xl font-bold  "> Faculty Signup</h1>
      </div>
      <div className="relative py-3 sm:max-w-xs sm:mx-auto">
        <div className="min-h-96 px-8 py-6 mt-4 text-left bg-zing-800  rounded-xl shadow-lg">
          <div className="flex flex-col justify-center items-center h-full select-none">
            <div className="flex flex-col items-center justify-center gap-2 mb-8">

              <p className="m-0 text-gray-400 text-[16px] font-semibold ">
                Sign Up
              </p>

            </div>
          <form  method='POST' onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400">Username</label>
              <input placeholder="Username" id="username" className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" onChange={handleChange} />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400">Email</label>
              <input placeholder="yourmail@" id="email" type='email' className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" onChange={handleChange} />
            </div>

            <div className="w-full flex flex-col gap-2">
            <label className="font-semibold text-xs text-gray-400">Password</label>
            <input placeholder="••••••••" id="password" type='password' className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"  onChange={handleChange} />
          </div>

          <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400">Upload Profile</label>
              <input placeholder="yourmail@" id="email" type='file' className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" onChange={handleChange} />
            </div>
          <div>

            <button disabled={loading} className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
              {loading ? 'Loading...' :'Sign Up' }
            </button>
          </div>
          <div>
              
          </div>
          </form>
          <div className="text-sm text-gray-400 flex gap-2 mt-3">
            <span>Hava an account?</span>
            <Link className="hover:text-blue-800" to={"/login"}>Sign-in</Link>
          </div>

          </div>
          

        </div>
      </div>
    </div>
    )
}

export default FacultyRegister