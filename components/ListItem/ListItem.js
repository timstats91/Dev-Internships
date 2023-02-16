import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const ListItem = ({content}) => {
    return (
        <li className="pb-2"
        dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }} 
        />
    )
}