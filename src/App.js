import './App.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Puzzle from "./components/Puzzle";
import PuzzleBox from "./components/PuzzleBox";

function App() {
  return (
    <section className="App">
        <Canvas>
            <axesHelper/>
            <OrbitControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Puzzle/>
            <PuzzleBox/>
        </Canvas>
    </section>
  );
}

export default App;
