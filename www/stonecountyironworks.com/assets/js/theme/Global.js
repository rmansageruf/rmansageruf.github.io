import $ from 'jquery';
// global scope jQuery plugins
import trend from 'jquery-trend';
import revealer from 'jquery-revealer';
import validetta from 'jquery-validetta';

import PageManager from '../PageManager';
import FormValidator from './utils/FormValidator';
import CurrencySelector from './components/CurrencySelector';
import Dropdown from './global/Dropdown';
import Header from './global/Header';
import MiniCart from './global/MiniCart';
import Alert from './components/Alert';
import QuickShop from './product/QuickShop';
import MegaNav from './global/MegaNav';

export default class Global extends PageManager {
  constructor() {
    super();

    new Dropdown($('.dropdown'));
    new Header($('.site-header'));

    new MegaNav($('.navigation-container'));

    this._toggleScrollLink();

    new MiniCart();

    new CurrencySelector('[data-currency-selector]');

    this.pageAlerts = new Alert($('[data-alerts]'));
  }

  /**
   * You can wrap the execution in this method with an asynchronous function map using the async library
   * if your global modules need async callback handling.
   * @param next
   */
  loaded(next) {
    // global form validation
    this.validator = new FormValidator(this.context);
    this.validator.initGlobal();

    // QuickShop
    if ($('[data-quick-shop]').length) {
      new QuickShop(this.context);
    }

    next();
  }

  _toggleScrollLink() {
    $(window).on('scroll', (e) => {
      const winScrollTop = $(e.currentTarget).scrollTop();
      const winHeight = $(window).height();

      if (winScrollTop > winHeight) {
        $('.button-top').addClass('show');
      } else {
        $('.button-top').removeClass('show');
      }
    });
  }
}
