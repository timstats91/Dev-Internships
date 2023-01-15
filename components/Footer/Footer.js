import Link from "next/link";

export const Footer = () => {

    return (
        <div className="bg-slate-800 text-white md:px-5 py-3 mt-6 z-20 flex flex-col">
            <p className="text-center">Copyright &copy; 2023 - <Link href="/">DevInternships.com</Link></p>
            <p className="text-center">All Rights Reserved</p>
        </div>
    );
};