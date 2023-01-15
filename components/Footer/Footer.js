import Link from "next/link";

export const Footer = () => {

    return (
        <div className="bg-slate-800 text-white md:px-5 h-[64px] mt-6 justify-center z-20 flex">
            <div className="py-5 px-5 flex">
                <p>Copyright &copy; 2023 - <Link href="/">DevInternships.com</Link> - All Rights Reserved</p>
            </div>
        </div>
    );
};