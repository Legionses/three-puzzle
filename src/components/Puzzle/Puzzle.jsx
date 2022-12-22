import React, {useEffect, useState} from "react"
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Puzzle = () => {
    const [canvases, setCanvases] = useState([]);

    useEffect(() => {
        const image = new Image();

        const cutImageUp = () => {
            const { width, height } = image;
            const pieceWidth = width / 3;
            const pieceHeight = height / 3;
            const imagePieces = [];

            for (let y = 0; y < 3; y++) {
                const row = [];
                for (let x = 0; x < 3; x++) {
                    const canvas = document.createElement('canvas');
                    canvas.width = pieceWidth;
                    canvas.height = pieceHeight;
                    const context = canvas.getContext('2d');
                    context.drawImage(
                        image,
                        x * pieceWidth,
                        y * pieceHeight,
                        pieceWidth,
                        pieceHeight,
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );
                row.push(canvas);
                }

                imagePieces.push(row)
            }

            setCanvases(imagePieces);
        }
        image.onload = cutImageUp;
        image.src = 'symbol.png';

    },[])

    return (
        <group position={[0, 0, 0]}>
            {
                canvases.map((row, rowInd) =>
                    row.map((canvas, col) => (
                    <mesh position={[(col * 2) - 2, -(rowInd * 2) + 2, 0]}>
                        <planeGeometry args={[2,2]} />
                        <meshBasicMaterial color="red" >
                            <canvasTexture
                                attach="map"
                                image={canvas}
                            />
                        </meshBasicMaterial>
                    </mesh>
                        )
                    )
                )
            }
        </group>
    )
}

export default Puzzle;