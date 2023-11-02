import { useEffect, useState } from "react";
import Aside from "./components/Aside/Aside";
import Container from "./components/Container";
import Jadwal from "./components/Jadwal/Jadwal";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768);

  useEffect(() => {
    const updateSize = () => {
      window.innerWidth > 768 ? setIsDesktop(true) : setIsDesktop(false);
    };
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="h-screen bg-[#f9f9f9]">
      <Navbar />
      <Container>
        {isDesktop && <Aside/>}
        <Jadwal />
      </Container>
    </div>
  );
}

export default App;
