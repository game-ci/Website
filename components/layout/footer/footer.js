import { Layout } from 'antd';
import { IoLogoVercel } from 'react-icons/all';

const { Footer } = Layout;

const FooterWrapper = () => (
  <Footer style={{ textAlign: 'center', zIndex: 5 }}>
    Made with ❤ by open source contributors and powered by
    <a href="https://vercel.com?utm_source=game-ci">
      <IoLogoVercel alt="Vercel" size={20} style={{ margin: '0 4px -2px', color: 'black' }} />
    </a>
  </Footer>
);

export default FooterWrapper;
