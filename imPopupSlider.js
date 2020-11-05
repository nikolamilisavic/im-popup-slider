var imPopupSlider = imPopupSlider || {};

imPopupSlider = {
    title: '',
    clickUrl: '',
    imageUrl: '',
    position: null,
    showOnStart: null,
    
    isVisible: false,
    htmlSliderObject: null,
    htmlSliderHeaderObject: null,
    htmlSliderHeaderElement: null,
    targetContainer: null,
    minWidth: 0,
    maxWidth: 0,
    minHeight: 12,
    maxHeight: 0,
    
    show: function(params) {
        imPopupSlider.maxWidth = params.width;
        imPopupSlider.maxHeight = params.height + 20;
        imPopupSlider.minWidth = params.width * 0.7;
        imPopupSlider.title = params.title;
        imPopupSlider.clickUrl = params.clickUrl;
        imPopupSlider.imageUrl = params.imageUrl;
        imPopupSlider.showOnStart = params.showOnStart || 0;
        imPopupSlider.position = params.position || 'bottom_right';
        imPopupSlider.targetContainer = $('body');
        imPopupSlider.htmlSliderObject = $(this.sliderHtml());
        imPopupSlider.setSliderPosition(this.htmlSliderObject);
        imPopupSlider.setSliderDimensions(this.htmlSliderObject);
        imPopupSlider.htmlSliderHeaderObject = $('.slider-header', this.htmlSliderObject);
        imPopupSlider.htmlSliderHeaderElement = $('.header-element', this.htmlSliderObject);
        imPopupSlider.targetContainer.append(this.htmlSliderObject);
        
        if (imPopupSlider.showOnStart) {
            setTimeout(function() {
                imPopupSlider.toggleSlider();
                imPopupSlider.attachEvents();
            }, imPopupSlider.showOnStart * 1000);
        } else {
            imPopupSlider.attachEvents();
        }
    },
    sliderHtml: function() {
        return `<div id="im-popup-slider" style="position: fixed; z-index: 150; margin: 10px 0 0 10px; padding: 5px 10px; overflow: visible; background-color: #FFF; border: 1px solid #EEE; border-radius: 5px 5px 0 0; box-sizing: content-box; box-shadow: 0 0 5px rgba(0,0,0,.75); -moz-box-shadow: 0 0 5px rgba(0,0,0,.75);">
                   <div class="slider-header" style="cursor: pointer; font-family: sans-serif; font-size: 14px; line-height: 1.4;">
                       <span style="color: #999; font-size: .8em; letter-spacing: .1em; text-transform: uppercase; margin: 0 0 2.2em;">${this.title}</span>\n\
                       <span class="header-element" style="display: none; font-size: .8em; cursor: pointer; float: right;">x</span>\n\
                       <span class="header-element" style="display: block; font-size: 0.8em; cursor: pointer; float: right;">+</span>\n\
                   </div>\n\
                  <a href="${this.clickUrl}"><img src="${this.imageUrl}"/></a>\n\
               </div>`;
    },
    animateSlider: function(width, height) {
        imPopupSlider.htmlSliderObject.animate({
            width: width + 'px',
            height: height + 'px'
        }, 'slow');
        
        imPopupSlider.htmlSliderHeaderElement.toggle();
    },
    toggleSlider: function() {
        if (imPopupSlider.isVisible === false) {
            imPopupSlider.isVisible = true;
            imPopupSlider.animateSlider(imPopupSlider.maxWidth, imPopupSlider.maxHeight);
        } else {
            imPopupSlider.isVisible = false;
            imPopupSlider.animateSlider(imPopupSlider.minWidth, imPopupSlider.minHeight);
        }
    },
    setSliderPosition: function(slider) {
        if (imPopupSlider.position) {
            var positions = imPopupSlider.position.split('_');
            
            for (var index in positions) {
                slider.css(positions[index], 0);
            }
        }
    },
    setSliderDimensions: function(slider) {
        slider.css('width', imPopupSlider.minWidth);
        slider.css('height', imPopupSlider.minHeight);
    },
    attachEvents: function() {
        imPopupSlider.htmlSliderHeaderObject.on('click', function() {
            imPopupSlider.toggleSlider();
        });
    }
};