let item = $('.card-widget-item'),
    half = Math.floor(item.length / 2);

item.slice(0, half).wrapAll('<div class="lft-wrap">');
item.slice(half).wrapAll('<div  class="rt-wrap">');