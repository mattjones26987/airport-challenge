const testEquals = (expectedOutput, expectedInput) => expectedInput === expectedOutput;
const testIncrease = (expectedOutput, expectedInput) => expectedInput > expectedOutput;

module.exports = {
    testEquals,
    testIncrease
};