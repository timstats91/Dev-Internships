import Link from "next/link";
import { FaBuilding, FaPaperPlane, FaPhone, } from 'react-icons/fa';

export const Footer = () => {

    return (
        <div className="bg-slate-800 text-white md:px-5 pb-3 mt-6 z-20 flex flex-col">
            <div className="max-w-5xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0">
                <div className="col-span-1 px-2 grid lg:justify-items-center">
                    <div>
                        <p className="text-xl font-medium lg:text-center pb-2">Featured Guides</p>
                        <Link href="/blog/top-25-best-internships-for-computer-science-students">
                            <a className="mb-2"><p>25 Best Computer Science Internships</p></a>
                        </Link>
                        <Link href="/blog/the-complete-guide-to-landing-a-google-internship">
                            <a className="mb-2"><p>Get An Internship At Google: A Guide</p></a>
                        </Link>
                        <Link href="/blog/get-an-internship-at-facebook-the-complete-guide">
                            <a className="mb-2"><p>Get An Internship At Facebook: A Guide</p></a>
                        </Link>
                        <Link href="/blog/get-an-internship-at-amazon-in-6-simple-steps">
                            <a className="mb-2"><p>Get An Internship At Amazon: A Guide</p></a>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 px-2 grid lg:justify-items-center">
                    <div>
                        <p className="text-xl font-medium lg:text-center pb-2">Legal Information</p>
                        <Link href="/privacy-policy">
                            <a className="mb-2"><p>Privacy Policy</p></a>
                        </Link>
                        <Link href="/terms-and-conditions">
                            <a className="mb-2"><p>Terms and Conditions</p></a>
                        </Link>
                        <Link href="/affiliate-disclosure">
                            <a className="mb-2"><p>Affiliate Disclosure</p></a>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 px-2 grid lg:justify-items-center">
                    <div>
                        <p className="text-xl font-medium lg:text-center pb-2">Contact Us</p>
                        <div className="flex cursor-pointer mb-2">
                            <FaPaperPlane size={18} className="text-white"/>
                            <a href="mailto:devinternships@gmail.com" className="pl-2">DevInternships@gmail.com</a>
                        </div>
                        <div className="flex cursor-pointer mb-2">
                            <FaPhone size={18} className="text-white"/>
                            <a href="tel:708-304-3175" className="pl-2">(708) 304-3175</a>
                        </div>
                        <div className="flex mb-2">
                            <FaBuilding size={18} className="text-white"/>
                            <div className="col pl-2">
                                <p>515 Cass St. PO Box 283</p>
                                <p>Crete, IL 60417</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="bg-white" />
            <p className="text-center pt-3">Copyright &copy; 2023 - <Link href="/">DevInternships.com</Link></p>
            <p className="text-center">All Rights Reserved</p>
        </div>
    );
};