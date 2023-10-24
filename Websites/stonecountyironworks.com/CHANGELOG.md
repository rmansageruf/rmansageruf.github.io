# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

### [1.6.4] - 2016-12-22

#### Fixed
- Ensure mobile currency selector settings are applied

### [1.6.3] - 2016-12-08

#### Fixed
- Ensure form text inputs are equal heights regardless of what font is used
- Add layout styling for custom date fields

#### Changed
- Removed unused code from sidebar

### [1.6.2] - 2016-11-24

#### Added
- Added option to show Apple Pay in list of payment icons
- Added "All ..." link in alternate mega nav for subnav lists

### [1.6.1] - 2016-11-17

#### Added
- Theme setting to toggle address in site footer
- Added `lang` attribute to <html> tag

#### Fixed
- Fixed a bug causing successive quickshop modals to launch multiple alerts and add incorrect amounts to the cart.

### [1.6.0] - 2016-11-10

#### Added
- Support for Apple Pay

### [1.5.4] - 2016-11-03

#### Changed
- Number of blog posts per page to be divisible by 3 for even rows

### [1.5.3] - 2016-10-20

#### Added
- Theme settings to allow the search form on the search page to be removed by users if desired

#### Fixed
- Blog excerpt length available in theme options increased to 50, 100 and 200 characters and explanation that length is in characters added to section title
- Changed text on sold out products disabled button to say sold out

### [1.5.2] - 2016-10-13

#### Fixed
- Fixed the display of the gift certificate on the cart page to match the control panel
settings regarding gift certificate use (fixes THEME_1127)
- Fixed the logic to allow for brands to be displayed in the footer navigation (fixes THEME_1126)

### [1.5.1] - 2016-09-08

#### Fixed
- Fixed product image zoom shifting image outside of boundary (fixes THEME_1112)
- Changed dropdown behaviour for pages in menu and footer: made it so link goes to page and arrow toggles dropdown (fixes THEME_1105)
- Made top bar for mobile navigation fixed so gap doesn't appear when scrolling on touchscreen devices
- Added timeout to alert banners to fix wonky transition and removed transition/revealer CSS

### [1.5.0] - 2016-09-01

#### Added
- Added ability to update item options from the cart (fixes THEME_942)
- Pagination and items-per-page setting for Brands page (fixes THEME_1047)

#### Fixed
- Reviews unable to be placed if throttler enabled (fixes THEME_1103)

### [1.4.4] - 2016-08-16

#### Changed
- Fixed swatches having a default option selected upon page load, fixes THEME_1096

### [1.4.3] - 2016-08-11

#### Added
- Added "View All" links to lists in the sitemap if the list has more than 20 items (fixes THEME_1092)

#### Changed
- Fixed button alignment in mobile menu when currency selector is hidden
- Ensure account link is hidden on mobile menu, when account creation is disabled

### [1.4.2] - 2016-08-04

#### Changed
- Added TE setting for mega-nav variant link colors and adjusted some colors that were not visible
- Updated core: public wishlist improvements
- Added rel="nofollow" to faceted search links

### [1.4.1] - 2016-07-28

#### Changed
- Update mega nav to initially show first child menu

#### Fixed
- Fixed issue where custom select dropdown arrows were not clickable
- Ensure mini-cart on sticky nav bar has it's arrow in the right location

### [1.4.0] - 2016-07-19

#### Added
- rel="nofollow" to footer links
- theme setting for copyright toggle

#### Changed
- Implemented JSON-LD schema.org structured data
- Scroll to top (notification area) when product is added to cart on screens < 1024px
- Moved carousel arrows to edges of image when there is no caption / title

#### Fixed
- Implemented logo max-height, which also fixes logo covering mobile utils bar
- Corrected search results counts

### [1.3.1] - 2016-07-07

#### Added
- Added and validates schema.org data to product page, blog page and individual blog post pages.

#### Changed
- Applied global image cover / contain setting to product carousel thumbs

### [1.3.0] - 2016-06-30

#### Added
- Added enhanced navigation and logo positioning options

### [1.2.7] - 2016-06-23

#### Added
- Copyright to footer
- Product dimensions and theme setting to toggle them in the additional product details tab
- Classes to additional product details to enable hiding specific pieces with css

#### Fixed
- Scope issues causing quickshop images to not load properly on product page related products
- Mobile header: constrain logo and ensure burger button is contrast color off header background colour
- Contact form captcha on it's own line
- Carousel "back" button goes the correct direction now

#### Changed
- Removed the word "all" and repeated top-level nav item from multi-level page menus. Users need to use a blank menu item to toggle dropdowns now.

### [1.2.6] - 2016-06-02

#### Fixed
- Fixed an issue with missing carousel arrows in Internet Explorer.
- Fixed quantity input on product page so it will respect min / max values.

### [1.2.5] - 2016-05-27

#### Changed
- Fixed pattern swatch sizing and added zoom on hover (fixes THEME-1029)
- Added "& up" to faceted search rating stars, fixed an issue hovering the stars in Firefox / IE (fixes THEME-1032)
- Ensure placeholder text is hidden on search input when it is collapsed

### [1.2.4] - 2016-05-19

#### Changed
- Fixed an issue where Pinterest share button was not using a valid URL. (fixes THEME-1022)
- Carousel slides that do not have button text will now use the slide image as the link (fixes THEME-1014)
- Checkout logo size adjustment in keeping with rest of theme (fixes THEME-1012)

### [1.2.3] - 2016-05-12

#### Added
- New theme option to hide the sidebar on collections pages. When enabled, the sidebar will be removed and the product grid will stretch across the full width of the container, with an extra grid item to fill the space of the sidebar.
- New theme options to adjust the layout of the mega nav. One option to hide the category images, which will make the links span the container width, and another option to make the menu span the full viewport width.

### [1.2.2] - 2016-05-05

#### Changed
- Fixed an issue where state dropdowns were not being populated (fixes THEME-903)

### [1.2.1] - 2016-05-05

#### Changed
 - fixed an issue with Braintree payments not handling user info correctly

### [1.2.0] - 2016-04-21
#### Added
- Add option to hide slide number on Homepage carousel

#### Changed
- Secondary font will not be properly assigned when editing via TE
- UPS shipping options now appear in the shipping calculator

### [1.1.0] - 2016-04-07
#### Added
- Compare module now uses bc-compare for session-based product compare
- Added support for mobile compare
- Ability to hide quantity input using CP setting (fixes THEME-950)
- Paging to content search results
- Ability to hide account button using CP setting (fixes THEME-951)

#### Changed
- Update BC branding to new format
- Reset password error alignment
- Ensure proper minicart background colour if using non-default preset
- Fixed alpha channel product image always showing zoom image bug
- Fixed portrait orientation product image cropping bug

### [1.0.8] - 2016-03-17
#### Added
- Functionality to disable/hide product options based on SKU inventory (fixes THEME-908)
- Facebook like button

#### Changed
- Fixed missing share URLs

### [1.0.7] - 2016-03-08
#### Changed
- Hide giftcard link when giftcards disabled
- Updated bc-core (invoice css, core image sizes)

#### Added
- Option to only show top level categories in meganav

### [1.0.6] - 2016-03-03
#### Added
- Bulk pricing to product page (fixes THEME-926)

#### Changed
- Fixed critical issue with reset password page not displaying correctly
- Hide carousel caption background when there's no content (fixes THEME-924)
- Hide carousel arrows when only one slide
- Updated thumb image size for better HDPI display at smaller screen sizes

### [1.0.5] - 2016-02-19
#### Changed
- Added conditional to wishlist links
- Updated core module
- Updated selectWrapper.js
- Fixed broken product sorting module

#### Added
- Sitemap link and template

### [1.0.4] - 2016-02-16
#### Changed
- Fixed outdated call to custom branding text
- Fixed bug where currency codes would not display in IE or Firefox

### [1.0.3] - 2016-02-05
#### Changed
- Added conditional to check for shop by price values so it doesn't show when empty

### [1.0.2] - 2016-01-22
#### Changed
- Update URLs in config.json


### [1.0.1] - 2016-01-21
#### Changed
- Add shop by price FM
- quantity input height
- Increase product thumb size
- quickshop buttons

### [1.0.0] - 2016-01-21
#### Added
- Screenshots
- Added products per page and companion faceted search settings

#### Changed
- Footer navigation layout
- Updated bc-modal to v0.0.4
- Removed unused icons / fonts
- Fixed visible headers on home when sections are disabled with theme editor
- Fixed wrong positioning of hover overlay on mega-nav images
- Fixed util color when sticky header (Bright preset affected most)

### [0.0.8] - 2016-01-20
#### Added
- Snippet helpers and docs link

#### Changed
- Update bc-core
- Fallback for meganav when no images
- Fixed wrong colour on coompare panel when scrolling
- Fixed compare page button alignment
- Align cart prices with unit price / product
- Changed Bright preset modal colour
- Updated social icons to SVG and made all instances use same set of icons

### [0.0.7] - 2016-01-18
#### Added
- Added giftcard cart image
- Added close anywhere to click for search box
- Added footer text colours to theme editor

#### Changed
- Updated modernizr to 3.2.0
- Updated bc-scoll-link to 0.1.2
- Fixed double ID schema.json bug
- Changed scroll lock class of Loading so it doesn't conflict with Alerts
- Made design review updates to product single and listings
- Updated mini-cart badge / empty message
- Fixed logo sizes
- Fixed FOUC on mega-nav images

### [0.0.6] - 2016-01-16
#### Added
- Footer payment icons
- Giftcard navigation and page styles
- Update product option details on change (images, stock, etc.)
- Add stock messaging
- Shop by price / brand
- Shipping messages to global alerts

#### Changed
- Error and unavailable pages
- Added transition to main navigation
- Fixed IE bug where product couldn't add to cart
- Various small CSS design tweaks

### [0.0.5] - 2016-01-07
#### Added
- Preset settings and theme editor options

### [0.0.4] - 2015-12-23
#### Added
- RSS CMS page support
- Giftcard link in footer
- AJAX add to wishlist
- Scrolling link to reviews tab from quickview
- Order complete page
- Minor styling changes to product page
- Disable image zoom if original is < 40% bigger than container

#### Changed
- Sticky header layout
- Moved listing utils inside listing template to hide when no products

### [0.0.3] - 2015-12-18
#### Added
- Added base variations and meta data for each one.

### [0.0.2] - 2015-12-17
#### Changed
- Enabled consecutive alerts on product pages / quickshop (triggered on option change)
- Fixed sidebar facet display when there are no items to fitler by

### [0.0.1] - 2015-12-10
#### Added
- Everything: Initial QA release.
