module.exports = (req, res, next) => {
    const {cache} = req;
    const palindromes = cache.retriveLastTenPalindromes();

    res.status(200);
    res.json(
        palindromes.length
            ? palindromes
            : "No palindromes added or they expired. Please use 'POST /palindromes' with the query 'text' to test palindromes",
    );

    next();
};
