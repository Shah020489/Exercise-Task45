/***
 * 
 * Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
 *  It should then accept an arbitrary number of keyword arguments. Call the function with the required information 
 * and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 */

function cars(manufacturer, model, ...rest) {
    let car = {
        manufacturer: manufacturer,
        model: model
    }
    for (let i = 0; i < rest.length; i += 2) {
        car[rest[i]] = rest[i + 1];
    }
    return car;
}
console.log(cars("toyota", "camry", "color", "blue", "year", 2016, "engine", "V8"));
