import React from 'react';
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({textAlign, content, level}) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: content},
        className: `max-w-5xl mx-auto my-5 px-3 md:font-medium leading-tight md:leading-normal ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`,
    });
    return tag;
};