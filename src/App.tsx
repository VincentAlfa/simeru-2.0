import Aside from './components/Aside/Aside';
import Container from './components/Container';
import Jadwal from './components/Jadwal/Jadwal';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='bg-[#f9f9f9] h-screen w-full'>
      <Navbar />
      <Container>
        <Aside />
        <Jadwal />
      </Container>
    </div>
  );
}

export default App;
