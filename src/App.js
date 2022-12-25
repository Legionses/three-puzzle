import './App.css';
import { Canvas } from "@react-three/fiber";
import Puzzle from "./components/Puzzle";
import PuzzleBox from "./components/PuzzleBox";
import Controls from "./components/Controls";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <section className="App">
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
    </section>
  );
}

export default App;
