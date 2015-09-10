var countBy = function(target, increment) {
    var arrayOfIntegers = _.range(increment, target+ 1, increment);
    return arrayOfIntegers;
};


// $(document).ready(function() {
//     $("form#piglatin").submit(function(event){
//         var word = $("input#word").val();
//         var result = pigLatin(word, count);
//
//         $(".output").text(result);
//
//         $("#result").show();
//         event.preventDefault();
//     });
// });
