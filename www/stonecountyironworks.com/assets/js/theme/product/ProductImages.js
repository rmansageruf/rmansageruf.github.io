import $ from 'jquery';
import imagesLoaded from 'imagesloaded';
import slick from 'slick';
import ImageZoom from './ImageZoom';

export default class ProductImages {
  constructor(el) {
    this.$el = $(el);

    this._init();
  }

  _init() {
    // Carousel & Image Zoom
    this.$el.on('init', () => {
      const $productImage = $('[data-product-image]');

      this.$el.imagesLoaded(() => {
        if ($productImage.length) {
          $productImage.each((i, el) => {
            new ImageZoom(el);
          });
        }
      });

    }).slick({
      infinite: false,
      arrows: false,
      lazyLoad: 'ondemand',
    });

    // Paging
    $(document).on('click', '.product-images-pagination a', (event) => {
      event.preventDefault();
      $('.product-slides-wrap').slick('slickGoTo', $(event.currentTarget).attr('data-slide-to'));
    });
  }
}
