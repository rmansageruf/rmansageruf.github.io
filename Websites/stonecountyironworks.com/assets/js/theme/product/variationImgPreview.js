import $ from 'jquery';
import slick from 'slick';
import productViewTemplates from './productViewTemplates';
import ProductImages from './ProductImages';

export default function variationImgPreview(productImageUrl, zoomImageUrl, alt, optId) {
  const productImgs = '.product-slides-wrap';

  // Only append if image doesn't already exist.
  // Otherwise, scroll to it.
  if (! $(`img[src="${productImageUrl}"]`).length) {
    const numSlides = $('[data-product-image]').length;

    // Add carousel image
    $(productImgs).slick('unslick').append(productViewTemplates.variationImage({
      productImageSrc: productImageUrl,
      zoomImageSrc: zoomImageUrl,
      alt: alt
    }));

    // Add carousel nav item
    $('.product-images-pagination').append(productViewTemplates.variationImageNav({
      productImageSrc: productImageUrl,
      index: numSlides,
      id: optId
    })).slideDown();

    new ProductImages(productImgs);

    $(productImgs).slick('slickGoTo', numSlides + 1);
  } else {
    const $changedOption = $(`[data-option-id="${optId}"]`);
    if ($changedOption.length) {
      $(productImgs).slick('slickGoTo', $changedOption.index());
    }
  }
};
