import React, {useEffect, useMemo, useState} from "react";

export const GameContext = React.createContext({});

export default function GameProvider({ imgSrc, children }) {
    const [canvases, setCanvases] = useState([]);

    useEffect(() => {
        const image = new Image();

        const cutImageUp = () => {
            const { width, height } = image;
            const pieceWidth = width / 3;
            const pieceHeight = height / 3;
            const imagePieces = [];

            for (let y = 0; y < 3; y++) {
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
                    imagePieces.push({
                        id: `${x}${y}`,
                        row: y,
                        col: x,
                        img: canvas.toDataURL('image/jpeg', 1.0)
                    })
                }
            }

            setCanvases(imagePieces);
        }
        image.onload = cutImageUp;
        image.src = imgSrc;

    },[])

    const state = useMemo(() => {
        return ({
            canvases
        })
    },[canvases])

    return (
            <GameContext.Provider value={state}>
                {children}
            </GameContext.Provider>
    );
}