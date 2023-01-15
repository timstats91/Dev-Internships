import Link from 'next/link';
import { useState } from 'react';
import { FaCode, FaBars } from 'react-icons/fa';

export const MainMenu = ({items}) => {

    const [showNav, setShowNav] = useState(false);

    return (
        <nav className="bg-slate-800 text-white md:px-5 h-[64px] justify-between sticky top-0 z-20 flex">
            <Link href="/">
                <div className="py-4 px-5 flex cursor-pointer hover:bg-slate-700">
                    <FaCode size={30} className="text-purple-500"/>
                    <p className="text-2xl font-semibold pl-2">Dev Internships</p>
                </div>
            </Link>
            <div className={(showNav ? "top-16" : "-top-full") + " md:flex md:flex-1 md:justify-end fixed md:static mx-auto text-center bg-slate-800 w-screen"}>
                {/* <button className="block justify-end md:hidden focus:outline-none p-5 hover:bg-slate-700">
                    <FaTimes size={25} />
                </button> */}
                {(items || []).map(item => (
                    <div key={item.id} className="hover:bg-slate-700 cursor-pointer relative group">
                        <div>
                            <Link href={item.destination}>
                                <a className="p-5 block text-white hover:text-white">{item.label}</a>
                            </Link>
                        </div>
                        {!!item.subMenuItems?.length && (
                            <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full">
                                {item.subMenuItems.map(subMenuItem => (
                                    <Link key={subMenuItem.id} href={subMenuItem.destination}>
                                        <a className="block whitespace-nowrap p-5 hover:bg-slate-700 text-white hover:text-white">
                                            {subMenuItem.label}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                {/* <div className="ml-3 my-auto">
                    <ButtonLink destination={callToActionDestination} label={callToActionLabel} />
                </div> */}
                
            </div>
            <button onClick={() => setShowNav(!showNav)} className="block justify-end md:hidden my-auto focus:outline-0 p-5 hover:bg-slate-700">
                <FaBars size={24} />
            </button>
        </nav>
    );
};