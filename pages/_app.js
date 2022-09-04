import '../styles/globals.css'
import NavBar from '../components/navbar'
import {store} from '../store/store'
import {Provider} from 'react-redux'


function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
