import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AdminRegister() {
	const [adminFormData,setAdminFormData] = useState({})
	const [loading, setLoading] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		console.log(adminFormData)

	}

	function handleChange(e) {
		setAdminFormData({...adminFormData,[e.target.id] : e.target.value})
	}

	return (
		<div>
			<div className="relative py-3 sm:max-w-xs sm:mx-auto">
				<div className="min-h-96 px-8 py-6 mt-4 text-left bg-zing-800  rounded-xl shadow-lg">
					<div className="flex flex-col justify-center items-center h-full select-none">
						<div className="flex flex-col items-center justify-center gap-2 mb-8">

							<p className="m-0 text-gray-400 text-[16px] font-semibold ">
								Admin Sign Up
							</p>

						</div>
						<form  onSubmit={handleSubmit}>
							<div className="w-full flex flex-col gap-2">
								<label className="font-semibold text-xs text-gray-400">Admin name</label>
								<input placeholder="Username" id="adminname" className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" onChange={handleChange} />
							</div>

							<div className="w-full flex flex-col gap-2">
								<label className="font-semibold text-xs text-gray-400">Email</label>
								<input placeholder="yourmail@" id="email" type='email' className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" onChange={handleChange} />
							</div>

							<div className="w-full flex flex-col gap-2">
								<label className="font-semibold text-xs text-gray-400">Password</label>
								<input placeholder="••••••••" id="password" type='password' className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" onChange={handleChange} />
							</div>

							<div>
								<label className="form-control w-full max-w-xs">
									<div className="label">
										<span className="label-text">Pick a Profile</span>
									</div>
									<input type="file" id="file" className="file-input file-input-bordered w-full max-w-xs" />
									
								</label>
							</div>

							<div>
								<button disabled={loading} className="py-1 mt-4 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
									{loading ? 'Loading...' : 'Sign Up'}
								</button>
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

export default AdminRegister