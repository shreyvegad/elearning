import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header className='bg-green-500/100'>
            {/* logo part */}
            <span className='justify-center'>
                <img className='iconimg' src="" alt="" />
                <h1 className='text-4xl font-bold text-white'>E-Learning</h1>
            </span>

            {/* navigation part */}
            <nav className="flex flex-wrap md:flex justify-center md:space-x-2 md:space-x-5 sm:p-2 md:p-5">
                {[
                    ['Home', '/home'],
                    ['Courses', '/courses'],
                    ['Pricing', '/price'],
                    ['About Us', '/about'],
                    ['Contact', '/contact'],
                ].map(([title, url]) => (
                    <NavLink to={url} activeStyle={{
                        fontWeight: "bold",
                        borderBottom: "3px solid white"
                    }} className=" px-3 py-2 text-white font-medium hover:rounded-lg hover:bg-slate-100 hover:text-green-500/100 ">{title}</NavLink>
                ))}
            </nav>


        </header>
    );
};

export default Header;