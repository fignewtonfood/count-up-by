describe('pigLatin', function() {
    it("returns pigLatin version of a word that starts with a vowel", function() {
        expect(pigLatin("apple", count)).to.equal("apple-ay");
    });
});
