import _ from 'lodash';
import { api } from '@bigcommerce/stencil-utils';
import urlUtils from '../theme/common/url-utils';

class InfiniteScroll {
    constructor($scope, options) {
        const defaultOptions = {
            containerSelector: '.productGrid',
            paginationSelector: '.pagination',
            nextLinkSelector: '.pagination-item--next .pagination-link',
            loadingClass: 'is-loading',
            threshold: 100,
            appendSelector: '.product',
            template: 'papathemes/category/ajax-product-listing',
            limit: 0,
            config: {},
        };
        this.options = _.extend({}, defaultOptions, options);
        this.$scope = $scope;
        this.isRequesting = false;

        this.onScroll = this.onScroll.bind(this);
        this.bindEvents();
    }

    bindEvents() {
        $(window).on('scroll', _.debounce(this.onScroll, 200));
    }

    onScroll() {
        if (this.isRequesting) {
            return;
        }

        const $pagination = $(this.options.paginationSelector, this.$scope);

        const $nextLink = $(this.options.nextLinkSelector, $pagination);
        if ($nextLink.length === 0) {
            return;
        }

        const top = $nextLink.offset().top - this.options.threshold;
        const y1 = $(window).scrollTop();
        const y2 = y1 + $(window).height();

        if (top >= y1 && top <= y2) {
            this.request($nextLink.attr('href'));
        }
    }

    request(url) {
        const $container = $(this.options.containerSelector, this.$scope);
        const $pagination = $(this.options.paginationSelector, this.$scope);

        this.isRequesting = true;
        $pagination.addClass(this.options.loadingClass);
        $container.addClass(this.options.loadingClass);

        api.getPage(this.options.limit ? urlUtils.replaceParams(url, { limit: this.options.limit }) : url, {
            template: this.options.template,
            config: this.options.config,
        }, (err, resp) => {
            this.isRequesting = false;
            $pagination.removeClass(this.options.loadingClass);
            $container.removeClass(this.options.loadingClass);

            if (err) {
                return err;
            }

            const $resp = $(resp);

            const $append = $(this.options.appendSelector, $resp);
            if ($append.length > 0) {
                $container.append($append);
            }

            const $newPagination = $resp.find(this.options.paginationSelector);
            $pagination
                .empty()
                .append($newPagination.children());
        });
    }
}

export default InfiniteScroll;

export function initBrandPage(context) {
    $('[data-brand-infinite-scroll]').each((i, el) => {
        new InfiniteScroll($(el), { // eslint-disable-line
            template: 'papathemes/brand/ajax-product-listing',
            limit: parseInt(context.themeSettings.brandpage_products_per_page, 10),
            config: {
                brand: {
                    products: {
                        limit: parseInt(context.themeSettings.brandpage_products_per_page, 10),
                    },
                },
            },
        });
    });
}

export function initCategoryPage(context) {
    $('[data-category-infinite-scroll]').each((i, el) => {
        new InfiniteScroll($(el), { // eslint-disable-line
            limit: parseInt(context.themeSettings.categorypage_products_per_page, 10),
            config: {
                category: {
                    products: {
                        limit: parseInt(context.themeSettings.categorypage_products_per_page, 10),
                    },
                },
            },
        });
    });
}

export function initBrandsPage(context) {
    $('[data-brands-infinite-scroll]').each((i, el) => {
        const infScroll = new InfiniteScroll($(el), { // eslint-disable-line
            containerSelector: '.brandGrid',
            appendSelector: '.brand',
            template: 'papathemes/brand/ajax-brand-listing',
            limit: parseInt(context.themeSettings.brandpage_products_per_page, 10),
            config: {
                brands: {
                    limit: parseInt(context.themeSettings.brandpage_products_per_page, 10),
                },
            },
        });
    });
}

export function initSearchPage(context) {
    $('[data-search-infinite-scroll]').each((i, el) => {
        const infScroll = new InfiniteScroll($(el), { // eslint-disable-line
            template: 'papathemes/search/ajax-product-listing',
            limit: parseInt(context.themeSettings.searchpage_products_per_page, 10),
            config: {
                product_results: {
                    limit: parseInt(context.themeSettings.searchpage_products_per_page, 10),
                },
            },
        });
    });
}
