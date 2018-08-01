function isLeapYear(year: number): boolean {
    return (isEvenlyDivisibleBy(year, 4)
        && (isNotEvenlyDivisibleBy(year, 100) || isEvenlyDivisibleBy(year, 400)));
}

function isNotEvenlyDivisibleBy(year: number, by: number) {
    return !isEvenlyDivisibleBy(year, by);
}

function isEvenlyDivisibleBy(year: number, by: number) {
    return year % by === 0;
}

export default isLeapYear
