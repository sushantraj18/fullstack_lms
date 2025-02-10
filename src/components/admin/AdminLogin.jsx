import React from 'react'

function AdminLogin() {
  return (
    <div>
        <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-50 dark:text-gray-800">
	<h1 className="text-3xl font-semibold">Sign in to your account</h1>
	<a className="text-sm dark:text-gray-600" href="/">Or start your free trial</a>
	<form noValidate="" className="space-y-4">
		<div className="flex flex-col">
			<label htmlFor="email" className="sr-only">Email address</label>
			<input id="email" type="email" placeholder="Email address" className="rounded-t-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2" />
			<label htmlFor="password" className="sr-only">Password</label>
			<input id="password" type="text" placeholder="Password" className="-mt-1 rounded-b-md dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2" />
		</div>
		<div className="flex justify-between">
			<div className="flex items-center">
				<input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 dark:accent-violet-600" />
				<label htmlFor="remember" className="text-sm dark:text-gray-600">Remember me</label>
			</div>
			<a className="text-sm dark:text-gray-600" href="/">Forgot your password?</a>
		</div>
		<button type="button" className="px-8 py-3 space-x-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign in</button>
	</form>
</div>
    </div>
  )
}

export default AdminLogin