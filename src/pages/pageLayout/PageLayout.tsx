import { Outlet } from 'react-router-dom';
import { Header } from './header/Header.tsx';
import { Footer } from './footer/Footer.tsx';

export const PageLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};