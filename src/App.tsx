import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Experience from '@/pages/Experience';
import Skills from '@/pages/Skills';
import About from '@/pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background noise-overlay">
        {/* Global ambient glow blobs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
               style={{ background: 'radial-gradient(circle, hsl(245 80% 70%), transparent 70%)' }} />
          <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
               style={{ background: 'radial-gradient(circle, hsl(38 95% 60%), transparent 70%)' }} />
          <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
               style={{ background: 'radial-gradient(circle, hsl(320 70% 65%), transparent 70%)' }} />
        </div>

        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
