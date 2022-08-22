import './App.css';
import HeaderBar from './components/utilities/HeaderBar';
import MenuBar from './components/utilities/MenuBar';
import MobileHeaderBar from './components/utilities/MobileHeaderBar';
import MobileMenuBar from './components/utilities/MobileMenuBar';
import SocialButton from './components/utilities/SocialButton';

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
