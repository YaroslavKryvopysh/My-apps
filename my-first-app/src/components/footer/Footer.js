import {MarketComponent} from '../../core/MarketComponent';

export class Footer extends MarketComponent {
  static className = 'market__footer'

  toHTML() {
    return `
      <div class="footer__allrights">
        2022. Всі права захищені
      </div>
    `
  }
}
