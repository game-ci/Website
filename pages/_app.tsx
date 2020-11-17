/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { IconContext } from 'react-icons';

import 'antd/dist/antd.css';
// import 'antd/dist/antd.dark.css';
import '../styles/vars.css';
import '../styles/global.css';
import '../styles/layout.css';
import '../styles/markdown.css';
import 'highlight.js/styles/dracula.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider value={{ className: 'anticon' }}>
      <Component {...pageProps} />
    </IconContext.Provider>
  );
}
