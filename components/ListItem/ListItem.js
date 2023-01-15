import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const ListItem = ({content}) => {
    return (
        <li className="pb-4"
        dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }} 
        />
    )
}