INDEX_NS = {

    init : function() {
        this.pinNews();
    },

    pinNews : function() {
        $("#news").pin({padding: {top: 0}});
    }

};

$(function() {
    INDEX_NS.init();
});