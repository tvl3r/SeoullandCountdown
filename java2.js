jQuery(function($){
    // unordered list
    $('button.item').click(function(){
        $('ul').shuffle();
    });

    // a series of paragraphs
    $('button.div').click(function(){
        $('#main').shuffle();
    });

    // an array
    var arr = [1,2,3,4,5,6];
    $('#array').text(arr.join(', '));
    $('button.array').click(function(){
        arr = $.shuffle(arr);
        $('#array').text(arr.join(', '));
    });
});


(function($){

    $.fn.shuffle = function() {
        return this.each(function(){
            var items = $(this).children().clone(true);
            return (items.length) ? $(this).html($.shuffle(items)) : this;
        });
    }

    $.shuffle = function(arr) {
        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    }

})(jQuery);
