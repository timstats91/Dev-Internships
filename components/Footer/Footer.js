import Link from "next/link";
import { FaBuilding, FaPaperPlane, FaPhone, } from 'react-icons/fa';

export const Footer = () => {

    return (
        <div className="bg-slate-800 text-white md:px-5 pb-3 mt-6 z-20 flex flex-col">
            <div className="max-w-5xl mx-auto py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="col-span-1 px-2 grid lg:justify-items-center">
                    <div>
                        <p className="text-xl font-medium lg:text-center pb-2">Featured Guides</p>
                        <ul className="list-disc">
                            <li className="mb-2">
                                <Link href="/blog/top-25-best-internships-for-computer-science-students">
                                    25 Best Computer Science Internships
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/blog/the-complete-guide-to-landing-a-google-internship">
                                    Get An Internship At Google: A Guide
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/blog/get-an-internship-at-facebook-the-complete-guide">
                                    Get An Internship At Facebook: A Guide
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/blog/get-an-internship-at-amazon-in-6-simple-steps">
                                    Get An Internship At Amazon: A Guide
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-1 px-2 grid lg:justify-items-center">
                    <div>
                        <p className="text-xl font-medium lg:text-center pb-2">Legal Information</p>
                        <ul className="list-disc">
                            <li className="mb-2">
                                <Link href="/privacy-policy">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/terms-and-conditions">
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/affiliate-disclosure">
                                    Affiliate Disclosure
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-1 px-2 grid lg:justify-items-center">
                    <div>
                        <p className="text-xl font-medium lg:text-center pb-2">Contact Us</p>
                        <Link href="tel:708-304-3175">
                            <div className="flex cursor-pointer mb-2">
                                <FaPaperPlane size={18} className="text-white"/>
                                <a className="pl-2">DevInternships@gmail.com</a>
                            </div>
                        </Link>
                        <Link href="tel:708-304-3175">
                            <div className="flex cursor-pointer mb-2">
                                <FaPhone size={18} className="text-white"/>
                                <a className="pl-2">(708) 304-3175</a>
                            </div>
                        </Link>
                        <div className="flex mb-2">
                            <FaBuilding size={18} className="text-white"/>
                            <p className="pl-2">515 Cass St, Crete, IL 60417</p>
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