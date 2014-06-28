(function ($) {
    $.fn.watermark = function (options) {
        var defaultOptions = { color: '#999', bgcolor: 'rgba(0,0,0,0)', text: 'watermark' }
        var args = $.extend({}, defaultOptions, options);

        this.each(function () {
            var element = $(this);
            var top = element.position().top + 3;
            var left = element.position().left + 3;
            var height = element.height();
            var width = element.width();
            var elementID = element.attr('id');
            var ipID = "ipWM_" + element.attr('id');

            //Check and remove any duplicate Overlay elements
            removeOvrlayElement(ipID)

            var ipHTML = "<input type='text' onclick=" + "\"" + "$('#" + elementID + "').trigger('focus');" + "\"" + " id='" + ipID + "' style='position:absolute;top:" + top + "px;left:" + left + "px; height:" + height + "px; width:" + width + "px;border: 0px black solid;background-color:" + args.bgcolor + ";color:" + args.color + ";' value='" + args.text + "'></input>"

            //set initial value to watermark text
            $('body').append(ipHTML);

            //assign functions to events
            //on blur
            element.blur(
			function () {
			    elementBlur(element, ipID, ipHTML);
			});

            //on focus
            element.focus(
			function () {
			    elementFocus(ipID);
			});

            //on change
            element.change(
			function () {
			    elementChange(ipID);
			});
        });
    };

    function elementChange(ipID) {
        removeOvrlayElement(ipID)
    }

    function elementBlur(element, ipID, ipHTML) {
        removeOvrlayElement(ipID)
        if (element.val().length == 0) {
            $('body').append(ipHTML);
        }
    }

    function elementFocus(ipID) {
        removeOvrlayElement(ipID)
    }

    function removeOvrlayElement(ipID) {
        try {
            $("#" + ipID).remove();
        }
        catch (e) {
        }
    }
})(jQuery);
