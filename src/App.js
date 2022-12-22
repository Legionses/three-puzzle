import './App.css';
import { Canvas } from "@react-three/fiber";
import Puzzle from "./components/Puzzle";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <section className="App">
        <Canvas>
            <axesHelper/>
            <OrbitControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Puzzle/>
        </Canvas>
    </section>
  );
}

export default App;
