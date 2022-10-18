import {MarketComponent} from '../../core/MarketComponent';

export class Header extends MarketComponent {
  static className = 'market__header'

  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: ['click']
    })
  }

  toHTML() {
    return `
      <div class="header__ico">R</div>
      <div class="header__menu menu">
        <a class="menu__link">Головна</a>
        <a class="menu__link">Про нас</a>
        <a class="menu__link">Контакти</a>
      </div>
    `
  }

  onClick(event) {
    console.log('Header: onClick', event.target)
  }
}
