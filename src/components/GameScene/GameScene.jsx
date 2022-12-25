import React from "react";
import {Canvas} from "@react-three/fiber";
import Sidebar from "../Sidebar";
import Controls from "../Controls";
import Puzzle from "../Puzzle";
import PuzzleBox from "../PuzzleBox";
import styles from "./styles.less"
import GameProvider from "./Provider";
const GameScene = () => {
    return(
        <GameProvider imgSrc="symbol.png">
            <div className={styles.container}>
                <Sidebar/>
                <Canvas>
                    <Controls>
                        <axesHelper/>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Puzzle/>
                        <PuzzleBox/>
                    </Controls>
                </Canvas>
            </div>
        </GameProvider>
    )
}

export default GameScene;