import React from "react";
import Image from "next/image";
import {Bars3Icon,ShoppingCartIcon} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {signIn,signOut, useSession} from "next-auth/react"
import { useRouter } from "next/router";
const Header = () => {
  const { data: session, status } = useSession()
  const router = useRouter();
  return (
    <header >
      {/* Nav bar first */}
      <div className="flex items-center bg-amazon_blue p-2 flex-grow py-2 h-16 text-gray-400 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <div className="cursor-pointer">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/019/017/542/original/amazon-logo-free-png.png"
            width={150}
            height={40}
            alt="This is image"
            objectFit="contain"
         
            onClick={()=> router.push('/')}
          />
          </div>
        </div>
        <div className="hidden sm:flex items-center h-9 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer">
            {/* search bar */}
            <input className="p-2 h-full focus:outline-none w-6 flex-grow rounded-l-md" type="text" />
            <MagnifyingGlassIcon className="h-12 p-4 text-black  "/>
        </div>
        <div className="flex items-center text-white space-x-6 text-xs mx-6 whitespace-nowrap">
       <div onClick={!session?signIn:signOut} className="link" >
            <p className="font-extrabold  md:text-sm">
            {session?`Hello ,${session.user.name}`: "Sign In"}
            </p>
            <p>Account & List</p>
        </div>
        <div className="link">
            <p className="font-extrabold  md:text-sm">Return</p>
            <p>& Order</p>
        </div>
        <div className="link relative flex items-center" onClick={()=> router.push('/checkout')}>
           <ShoppingCartIcon  className="h-10"/>
           <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-500 text-center text-black rounded-full ">0</span>
            <p className="hidden md:inline font-extrabold md:text-sm mt-2 ">Basket</p>
        </div>
       </div>
      </div>
      {/* bottom nav bar */}
      <div className="flex items-center bg-amazon_blue-light text-white space-x-3 text-xs ">
            <p className="link flex items-center">
                <Bars3Icon className="h-6 mr-1"/>
                All
            </p>
            <p className="link "> Prime Video</p>
            <p className="link "> Amazon Business</p>
            <p className="link"> Today s Deal</p>
            <p  className="link hidden md:inline-block">Customer Service</p>
            <p  className="link hidden md:inline-block">Books</p>
            <p  className="link hidden lg:inline-flex">Mobile & Electronic & more Shop Now </p>
           
            <p  className="link hidden lg:inline-flex">Food and Grosery </p>
           
            <p  className="link hidden lg:inline-flex">Buy Again </p>
           
      </div>
    </header>
  );
};

export default Header;
