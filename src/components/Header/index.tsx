import React from 'react'
import Image from "next/image";
import logoImg from '../../../public/assets/capputeeno.svg'

export function Header() {
    return (
        <header className='flex h-20 w-screen items-center bg-white justify-between' >
            <Image className='ml-40' src={logoImg} alt='Capputeeno' />

            <div className=" flex h-6 mr-64 items-center justify-between">

                <label htmlFor="inputBusca" className="relative">
                    <input id="inputBusca" className="form-input bg-gray-100 rounded-lg pl-5 pr-4 py-2 w-80 h-10" type="text" placeholder="Procurando por algo específico?" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-6 h-6 right-0 mr-4 top-1/4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </label>

                <div className='relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                    <span className='absolute bg-red-600 text-white ml-5 rounded-2xl w-5 h-5 text-center text-xs top-0 mt-4 flex justify-center items-center' >2</span>
                </div>


            </div>
        </header>
    )
}