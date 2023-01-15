import Image from "next/image"
import Link from "next/link"

export const PostCard = ({title, destination, image, description}) => {
    return (
        <Link href={destination}>
            <a className="p-5 block border-2 border-slate-200 hover:bg-slate-50">
                <div className="flex w-full">
                    <Image src={image} height="600px" width="900" objectFit="cover" alt={title} className="bg-slate-200" />
                </div>
                <p className="text-lg text-black font-bold pt-3 pb-2">{title}</p>
                <p className="text-black">{description}</p>
            </a>
        </Link>
    )
}