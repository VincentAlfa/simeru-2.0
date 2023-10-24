import Aside from "./components/Aside/Aside";
import Container from "./components/Container";
import Jadwal from "./components/Jadwal/Jadwal";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="h-screen w-full bg-[#f9f9f9]">
      <Navbar />
      <Container>
        <Aside />
        <Jadwal />
      </Container>
    </div>
  );
}

export default App;
