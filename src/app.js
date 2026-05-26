function greet(name) {
    return `Hello, ${name}!`
}

modulo.exports = greet;

if (require.main == module) {
    console.log(greet("World"));
}
