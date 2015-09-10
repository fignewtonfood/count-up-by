describe('countBy function tests', function() {


    it("given target and increment are both 1 will return an array with one element containing the integer 1", function () {
        expect(countBy(1,1)).to.eql([1]);
    } );

    it("count up by one to ten, returning an array of all integers that entails", function (){
        expect(countBy(10,1)).to.eql([1,2,3,4,5,6,7,8,9,10]);
    });

    it("count up by two to ten, returning an array of all integers that entails", function (){
        expect(countBy(10,2)).to.eql([2,4,6,8,10]);
    });

    it("count up to 13 by 2, returning an array of all integers that entails", function (){
        expect(countBy(13,2)).to.eql([2,4,6,8,10,12]);
    });

    it("count up to 1000 by 333, returning an array of all integers that entails", function (){
        expect(countBy(1000,333)).to.eql([333,666,999]);
    });

});
