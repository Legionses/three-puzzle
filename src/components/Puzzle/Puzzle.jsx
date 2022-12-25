import { useEffect, useState} from "react"
import Segment from "./components/Segment";

const segmentSize = 1.3;
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
                            <Segment
                                key={`${row}${col}`}
                                position={[(col * segmentSize) - segmentSize, -(rowInd * segmentSize) + segmentSize, 0]}
                                img={canvas}
                                size={segmentSize}
                            />
                        )
                    )
                )
            }
        </group>
    )
}

export default Puzzle;