var countBy = function(target, increment) {
//One line solution requiring 'underscore' javascript library
    // var arrayOfIntegers = _.range(increment, target+ 1, increment);
    var array_length = Math.floor(target/increment);
    var static_increment = increment;
    var arrayOfIntegers = Array.apply(null, Array(array_length)).map(function (_,increment){return static_increment + (increment*static_increment);});
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
