var cntBy = function(target, increment) {
//One line solution requiring 'underscore' javascript library
    // var arrayOfIntegers = _.range(increment, target+ 1, increment);
    var array_length = Math.floor(target/increment);
    var static_increment = increment;
    var arrayOfIntegers = Array.apply(null, Array(array_length)).map(function (_,increment){return static_increment + (increment*static_increment);});
    return arrayOfIntegers;
};


$(document).ready(function() {
    $("form#cntby").submit(function(event){
        var target = parseInt($("input#target").val());
        var increment = parseInt($("input#increment").val());

        var answer = cntBy(target, increment);
        var arraylength = answer.length;


        $(".length").text(arraylength);

        $(".output").text(answer.join(", "));

        $("#result").show();
        event.preventDefault();
    });
});
