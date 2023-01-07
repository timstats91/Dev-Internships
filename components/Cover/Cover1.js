/* eslint-disable react/jsx-no-undef */
import Image from "next/image";

export const Cover = ({children, background}) => {
    return (
        <div className="h-[80vh] text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
            {!!background && (
                <Image 
                    alt="Cover" 
                    src={background} 
                    layout="fill" 
                    objectFit="cover"
                     className="mix-blend-soft-light" 
                />
            )}
            <div className="max-w-5xl z-10">
                {children}
            </div>
            
        </div>
    );
};