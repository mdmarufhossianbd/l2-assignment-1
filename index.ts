function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper === true) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase()
    }
}

// console.log(formatString("hello world"));
// console.log(formatString("hello world", true));
// console.log(formatString("hello world", false));

