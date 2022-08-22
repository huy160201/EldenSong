import './App.css';
import FooterBar from './components/utilities/footerBar';
import HeaderBar from './components/utilities/headerBar';
import MenuBar from './components/utilities/menuBar';
import MobileHeaderBar from './components/utilities/mobileHeaderBar';
import MobileMenuBar from './components/utilities/mobileMenuBar';
import MobileFooterBar from './components/utilities/mobileFooterBar';
import SocialButton from './components/utilities/socialButton';

function App() {
  return (
    <div>
      {/* Header logo & banner */}
      <div className='bg-transparent w-screen hidden md:flex items-center justify-center z-50'>
        <div className="max-w-6xl w-full px-24">
          <HeaderBar />
        </div>
      </div>

      {/* Menu bar */}
      <div className='bg-transparent w-screen hidden md:flex items-center justify-center sticky top-0 bg-red-600 z-50'>
        <div className="max-w-6xl w-full px-16">
          <MenuBar />
        </div>
      </div>

      {/* Mobile Header Bar Component */}
      <div className="bg-transparent w-screen md:hidden flex items-center justify-center sticky top-0 z-50 bg-white z-50">
        <div className={'max-w-6xl w-full px-4'}>
          <MobileHeaderBar />
        </div>
      </div>

      {/* Mobile Menu Bar Component */}
      <div className="bg-transparent w-screen md:hidden flex items-center justify-center">
        <div className={'max-w-6xl w-full px-4'}>
          <MobileMenuBar />
        </div>
      </div>

      {/* Footer Component */}
      <div className="bg-transparent w-screen hidden md:flex items-center justify-center">
        <div className={'max-w-6xl w-full'}>
          <FooterBar />
        </div>
      </div>

      {/* Mobile Footer Bar Component */}
      <div className="bg-transparent w-screen md:hidden flex items-center justify-center">
        <div className={'max-w-6xl w-full'}>
          <MobileFooterBar />
        </div>
      </div>

      {/* Social media button */}
      <div className="bg-transparent w-screen hidden md:flex items-center justify-center">
        <div className={''}>
          <SocialButton />
        </div>
      </div>
    </div>
  );
}

export default App;
