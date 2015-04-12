
INDEX_NS = {

    init : function() {
        this.pinNews();
		this.resetWhiteNotPosition();
    },

    pinNews : function() {
        $("#news").pin({padding: {top: 0}});
    },

	resetWhiteNotPosition : function() {
		var lastTop = 0;
		var currentTop = 0;
		$.each($(".post-entry"), function(index, element) {			
			currentTop = $(element).find(".post-entry-marker").offset().top;
			if (currentTop == lastTop) {
				$(element).css("margin-top", "30px");
			}
			if ($(element).hasClass("pull-right") && $(element).offset().left < $(element).width()) {
				$(this).removeClass("pull-right").addClass("pull-left");
			}
			if ($(element).hasClass("pull-left") && $(element).offset().right > $(element).width()) {
				$(this).removeClass("pull-left").addClass("pull-right");
			}
			lastTop = currentTop;
		});
	}
};

$(function() {
    INDEX_NS.init();
});
