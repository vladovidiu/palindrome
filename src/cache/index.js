// This will act as the cache for incoming palidromes
let palindromeCache;
let TEN_MINUTES;

const createStructure = cache => {
    TEN_MINUTES = cache.MAX_TIME;
    palindromeCache = [];
};

const addPalindrome = (palindrome, date) => {
    const isPalindromeAdded = palindromeCache.find(pal => pal.palindrome === palindrome);
    return (
        !isPalindromeAdded &&
        palindromeCache.push({
            addedAt: date || new Date(),
            palindrome,
        })
    );
};

const retriveLastTenPalindromes = () => {
    const palindromesAddedLastTenMinutes = palindromeCache.filter(pal => {
        return new Date() - pal.addedAt < TEN_MINUTES;
    });

    return palindromesAddedLastTenMinutes.slice(-10);
};

module.exports = {
    createStructure,
    addPalindrome,
    retriveLastTenPalindromes,
};
