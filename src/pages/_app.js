import 'antd/dist/antd.css';
import '../styles/globals.css'
import { wrapper } from '../state/store';

function CovidApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(CovidApp);
