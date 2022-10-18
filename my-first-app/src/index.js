import {Market} from './components/market/Market';
import './scss/index.scss'
import {Header} from './components/header/Header';
import {Footer} from './components/footer/Footer';
import {Shop} from './components/shop/Shop';

const market = new Market('#app', {
  components: [Header, Shop, Footer]
})

market.render()
