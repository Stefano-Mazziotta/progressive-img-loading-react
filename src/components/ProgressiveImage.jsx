import { useState, useEffect } from "react";


const ProgressiveImage = ({ placeholderSrc, src, ...props }) => {
    const [imageSrc, setImageSrc] = useState(placeholderSrc || src);

    useEffect(() => {
        const image = new Image();

        image.src = src;
        image.onload = () => {
            setImageSrc(src);
        };
        
    }, [src]);

    const customClass = placeholderSrc && imageSrc === placeholderSrc ? "loading" : "loaded";
        
    return (
        <img 
            className={`image ${customClass}`}
            {... { src: imageSrc, ...props}}
            alt={props.alt || ""}            
        />
    );
};

export default ProgressiveImage;