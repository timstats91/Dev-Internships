import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { Results } from "./Results";
import queryString from "query-string";

export const BlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const pageSize = 12;
    const router = useRouter();

    const search = async () => {
        const {page} = queryString.parse(window.location.search);
        const response = await fetch(`/api/blogs`, {
            method: "POST",
            body: JSON.stringify({
                page: parseInt(page || "1"),
            }),
        });
        const data = await response.json();
        setPosts(data.posts);
        setTotalResults(data.total);
    };

    useEffect(() => {
        search();
    }, []);
    const handlePageClick = async (pageNumber) => {
        await router.push(`${router.query.slug.join("/")}?page=${pageNumber}`, null, {
            shallow: true,
        });
        search();
    };

    return (
        <div>
            <Results posts={posts} />
            <Pagination 
                onPageClick={handlePageClick}
                totalPages={Math.ceil(totalResults / pageSize)} 
            />
        </div>
    );
};