import {useState} from "react";
import useDrag from "../../../hooks/useDrag";

const Segment = ({img, size, ...props}) => {
    const [position, setPosition] = useState(props.position);
    const dragProps = useDrag(v => {
        console.log(v.toArray())
        setPosition(v.toArray())
    });

    return(
        <mesh
            position={position}
            {...dragProps}
        >
            <planeGeometry args={[size, size]} />
            <meshBasicMaterial color="red" >
                <canvasTexture
                    attach="map"
                    image={img}
                />
            </meshBasicMaterial>
        </mesh>
    )
}

export default Segment;