class Car
{
constructor(_name, _model, _year, _price)
{
    let _name = _name;
    let _model = _model;
    let _year = _year; 
    let _price = _price; 
}
calculatePrice(_price)
{
    let currentYear = prompt("Please put current Year: "); 
     this.age = currentYear - this._year; 
     for(let g = 0; g < this.age; g++)
     {
        _price = _price - 500; 
        if(_price < 0)
        {
            price = 0; 
        }
     }
}
}

class CarManager
{
constructor()
{
     this.allCars = [10];    
}
displayCars()
{
    for(let h = 0; h < 10; h++)
    {
        console.log(car1[h].name, car1[h].model, car1[h].year, car1[h].price); 
    }
}
addCar(name, model, year, price) 
{
    new Car(name, model, year, price) = car1;
    for(let g = 0; g < 10; g++)
    {
    this.allCars[g] = car1; 
    displayCars(); 
    }

}
showTotalPrice()
{
    let sum = 0;
    for(let h = 0; h < 10; h++)
    {
       sum = sum + car1[h].calculatePrice(price); 
    }
    console.log(sum); 
}
}

const carInventory = new CarManager(); 


