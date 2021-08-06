module.exports = (string) => {
    let formattedString = string;
    let delimeter = ',';

    if (string.startsWith('//')) {
        delimeter = string[2];
        formattedString = string.slice(3);
    }

    formattedString = formattedString.replace('\n', delimeter);

    return {formattedString, delimeter};
}