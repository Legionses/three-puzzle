import * as THREE from "three";
import {useLoader} from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {useTexture} from "@react-three/drei";

const SOCKETS = [
    new Array(3).fill(1),
    new Array(3).fill(1),
    new Array(3).fill(1)
];

const path = 'wood/Wood_026_'
const BoxMaterial = () => {
    const props = useTexture( {
        map: `${path}basecolor.jpg`,
        // displacementMap: `${path}height.png`,
        normalMap: `${path}normal.jpg`,
        roughnessMap: `${path}roughness.jpg`,
        aoMap: `${path}ambientOcclusion.jpg`,
    });

    return <meshStandardMaterial {...props}/>
}

const Edge = ({width = 8.5, height = 8, deep = 0.5, position}) => (
    <mesh position={position}>
        <boxGeometry args={[width, height, deep]}/>
        <BoxMaterial/>
    </mesh>
)

const PuzzleBox = () => {
    return(
        <group position={[0,0,1]} scale={[0.5, 0.5, 0.5]}>
            <mesh>
                <boxGeometry args={[8, 8, 0.35]}/>
                <BoxMaterial/>
            </mesh>
            <group position={[-0.8, 0.5, 0.5]}>
                {
                    SOCKETS.map((row, rowInd) =>
                        row.map((_, colInd) => {
                                const x = colInd === 0 ? (colInd * 2) - 2 : (colInd * 2) - 2 + (0.8 * colInd);
                                const y = rowInd === 0 ? -(rowInd * 2) + 2 : -(rowInd * 2) + 2 - (0.55 * rowInd);
                                return (
                                    <mesh key={`${row}${colInd}`} position={[x, y, 0]}>
                                        <planeGeometry args={[2,2]} />
                                        <meshBasicMaterial color="yellow" side={THREE.DoubleSide}/>
                                    </mesh>
                                )
                            }
                        )
                    )
                }
            </group>
            <group>
                <Edge position={[0, 4, 0.1]} height={0.25}/>
                <Edge position={[0, 1.25, 0.05]} height={0.25} deep={0.35}/>
                <Edge position={[0, -1.25, 0.05]} height={0.25} deep={0.35}/>
                <Edge position={[0, -4, 0.1]} height={0.25}/>
                <Edge position={[-4.15, 0, 0.1]} width={0.25}/>
                <Edge position={[4.15, 0, 0.1]} width={0.25}/>
                <Edge position={[-1.5, 0, 0.05]} width={0.25} deep={0.35}/>
                <Edge position={[1.5, 0, 0.05]} width={0.25} deep={0.35}/>
            </group>
        </group>
    )
}

export default PuzzleBox;