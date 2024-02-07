import React, { useState } from "react";



export default function Picture(props) {


    const [IndiImage, setIndImage] = useState(0);
    const CountImage = React.Children.count(props.children)


    function returnImage(index) {
        const currentImage = React.Children.toArray(props.children)[index]
        return React.cloneElement(currentImage);
    }
    return (
        <>
            <button
                disabled={IndiImage === 0}
                onClick={(e) => setIndImage(v => v - 1)}
            >תמונה קודמת</button>

            <button
                disabled={IndiImage >= CountImage - 1}
                onClick={(e) => setIndImage(v => v + 1)}
            >תמונה הבאה</button>
            {returnImage(IndiImage)}

        </>
    )




}