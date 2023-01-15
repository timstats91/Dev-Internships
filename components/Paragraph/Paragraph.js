import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({ textAlign = "left", content, textColor }) => {
    return (
        <p 
            className={`max-w-5xl mx-auto pb-4 px-3 ${getTextAlign(textAlign)}`} 
            style={{color: textColor}}
            dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }} 
        />
    );
};