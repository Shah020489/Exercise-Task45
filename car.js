var carList = [{
        name: "BMW",
        topSpeed: 160,
        color: "Black",
        price: 2000,
        model: "X5"
    },
    {
        name: "Alto",
        topSpeed: 160,
        color: "White",
        price: 200000,
        model: "X1"
    },
    {
        name: "Hyundai",
        topSpeed: 160,
        color: "Black",
        price: 2000,
        model: "X1"
    },
    {
        name: "Suzuki",
        topSpeed: 180,
        color: "White",
        price: 400000,
        model: "X2"
    }
];
console.log(carList);
console.log("Filtering cars with top speed above 170");
var filterRecord = carList.filter(function (car) { return car.topSpeed > 170; });
console.log(filterRecord);
