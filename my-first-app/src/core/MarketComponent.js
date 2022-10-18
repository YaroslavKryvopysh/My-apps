import {DomListener} from './DomListener';

// здесь уже конкретная среда где мы создаем шаблон нашего будующего документа
export class MarketComponent extends DomListener {
  constructor($root, options={}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }

  toHTML() {
    return ''
  }

  init() {
    this.initDomListeners()
  }

  destroy() {
    this.removeDomListener()
  }

}
