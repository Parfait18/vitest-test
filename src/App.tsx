import { useState } from 'react'
import './App.css'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
	username: string,
	password: string

}

function App() {

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	console.log(watch("username"));

	return (
		<>
			<div className='text-gray-600'>
				<div className="bg-white card">
					<div className="max-w-md">
						<h4 className="text-gray-600 text-center font-medium text-2xl">Connexion</h4>
						<form onSubmit={handleSubmit(onSubmit)} className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
							<div className="mb-4">
								<label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2" >
									Username
								</label>
								<input {...register("username", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="username" type="text" placeholder="Username" />
								{errors.username && <p className="text-red-500 text-xs italic">Please choose a username</p>}
							</div>
							<div className="mb-6">
								<label htmlFor='password' className="block text-gray-700 text-sm font-bold mb-2" >
									Password
								</label>
								<input {...register("password", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
									id="password" type="password" placeholder="******************" />
								{errors.password && <p className="text-red-500 text-xs italic">Please choose a password</p>}
							</div>
							<div className="flex items-center justify-between">
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
									Sign In
								</button>
							</div>
						</form>
						<p className="text-center text-gray-500 text-xs">
							&copy;2020 Acme Corp. All rights reserved.
						</p>
					</div>

				</div>
			</div>
		</>
	)
}

export default App
