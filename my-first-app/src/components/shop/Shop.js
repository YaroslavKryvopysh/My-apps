import {MarketComponent} from '../../core/MarketComponent';
import {createShop} from './shop.template';

export class Shop extends MarketComponent {
  static className = 'market__shop'

  constructor($root) {
    super($root, {
      name: 'Shop',
      listeners: ['click']
    })
  }

  toHTML() {
    return createShop()
  }

  onClick(event) {
    console.log('Shop: onClick', event)
  }
}
