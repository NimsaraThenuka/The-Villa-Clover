import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'gallery' | 'contact';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const navigate = (p: string) => {
    setPage(p as Page);
  };

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About onNavigate={navigate} />;
      case 'gallery':
        return <Gallery onNavigate={navigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      <Navbar currentPage={page} onNavigate={navigate} />
      <main style={{ flex: 1, width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
      <FloatingActions />
    </div>
  );
}
