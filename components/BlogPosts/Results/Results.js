import { PostCard } from "./PostCard"

export const Results = ({posts}) => {
    return (
        <div className="max-w-5xl mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map(post => (
                <PostCard 
                    key={post.databaseId} 
                    title={post.title}
                    destination={post.uri}
                    image={post.featuredImage?.node?.sourceUrl}
                    description={post.seo?.metaDesc}
                />
            ))}
        </div>
    )
}