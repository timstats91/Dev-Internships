import axios from "axios";
import { wordpressUrl } from "utils/variables";

export default async function getTotalCounts() {
    const res = await axios.get(`${wordpressUrl}/wp-json/sitemap/v1/totalpages`);
    let data = await res.data;
    if (!data) return [];
    const propertyNames = Object.keys(data);
    // add pages to excludeItems array if you don't want them included
    let excludeItems = ["user", "category"];
    let totalArray = propertyNames
        .filter((name) => !excludeItems.includes(name))
        .map((name) => {
            return {name, total: data[name] };
        });

    return totalArray;
}