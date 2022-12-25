import {useContext, useEffect, useState} from "react"
import Segment from "./components/Segment";
import {GameContext} from "../GameScene/Provider";

const segmentSize = 1.3;
const Puzzle = () => {
    const { canvases } = useContext(GameContext);

    return (
        <group position={[0, 0, 0]}>
            {/*{*/}
            {/*    canvases.map((row, rowInd) =>*/}
            {/*        row.map((canvas, col) => (*/}
            {/*                <Segment*/}
            {/*                    key={`${row}${col}`}*/}
            {/*                    position={[(col * segmentSize) - segmentSize, -(rowInd * segmentSize) + segmentSize, 0]}*/}
            {/*                    img={canvas}*/}
            {/*                    size={segmentSize}*/}
            {/*                />*/}
            {/*            )*/}
            {/*        )*/}
            {/*    )*/}
            {/*}*/}
        </group>
    )
}

export default Puzzle;