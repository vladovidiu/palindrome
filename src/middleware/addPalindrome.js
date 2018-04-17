const isPalindrome = text => {
    return (
        text ===
        text
            .split("")
            .reverse()
            .join("")
    );
};

module.exports = (req, res, next) => {
    const {text} = req.query;
    const {cache} = req;

    if (!text) {
        res.status(400);
        res.json({
            error: "Please provide a text value to check",
        });
        return next(new Error("Missing Parameters"));
    }

    const specialCharactersRegex = /[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g;
    const refactoredText = text.replace(specialCharactersRegex, "").toLowerCase();

    const addPalindromeAction =
        isPalindrome(refactoredText) && cache.addPalindrome(text, new Date());

    res.status(200);
    res.json(
        isPalindrome(refactoredText)
            ? addPalindromeAction
                ? true
                : "The palindrome already exists"
            : false,
    );

    next();
};
