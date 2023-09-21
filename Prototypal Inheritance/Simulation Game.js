// SIMULATION GAME
// Task : Imagine you are developing a simulation game that involves various kinds of vehicles.
//  Using the concepts of inheritance, prototype chains, and object-oriented design patterns learned in class.
// Instructions:
// Create a basic Vehicle constructor function that initializes properties like brand, model, speed, and fuelType.

// Using the prototype, add common methods to the Vehicle object like accelerate(), brake(), and refuel().

// accelerate() should increase the speed of the vehicle.
// brake() should decrease the speed.
// refuel() should log a message indicating the vehicle is refueling.
// Now, create a Car constructor function. The Car function should inherit properties and methods from 
// the Vehicle object. Additionally, Car should have an extra property numberOfWheels and a method honk() that logs a honking sound.

// Similarly, create an Airplane constructor function that inherits from Vehicle. 
// It should have properties numberOfEngines and hasLandingGear and a method takeOff()
//  that logs a message indicating the airplane is taking off.

// Show how you would create a new instance of Car and Airplane, and demonstrate invoking their methods, 
// ensuring that both types of vehicles can still accelerate, brake, and refuel through their prototype chain.


function Vehicle(brand,model,speed,fuelType){
    this.brand=brand;
    this.model=model;
    this.speed=speed;
    this.fuelType=fuelType;
}
Vehicle.prototype.accelerate=function(increase){
    this.speed+=increase;
    console.log(`${this.brand}  ${this.model} is increasing Current speed : ${this.speed} mph`)
}

Vehicle.prototype.brake=function(decrease){
    this.speed-=decrease
    console.log(`${this.brand} , ${this.model} is braking current speed : ${this.brake}`)
}

Vehicle.prototype.refuel=function(){
    console.log(`${this.brand} ${this.model} is refueling`)
}


// car Constructor function
function Car(brand,model,speed,fuelType,numberOfWheels){
    Vehicle.call(this,brand,model,speed,fuelType)
    this.numberOfwheels=numberOfWheels

}
// Object.setPrototypeOf(Car.prototype,Vehicle.prototype)

Car.prototype=Object.create(Vehicle.prototype)

Car.prototype.honk=function(){
    console.log(`${this.brand},  ${this.model} is honking`)
}

let carInfor=new Car("Toyota","Gramry",60,"Gasoline","4");
console.log(carInfor);
carInfor.accelerate(50)
carInfor.brake(20);
carInfor.honk()
carInfor.refuel();




// AirPlane Consturctor function
function Airplane(brand,model,speed,fuelType,numberOfEngines,hasLandingGear){

    Vehicle.call(this,brand,model,speed,fuelType);
    this.numberOfEngines=numberOfEngines;
    this.hasLandingGear=hasLandingGear

}

// Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype)
Airplane.prototype=Object.create(Vehicle.prototype)

Airplane.prototype.takeOff=function(){
    console.log(`${this.brand} , ${this.model} Airplane is taking off`)
}

let airPlaneDetails= new Airplane("Boing","474",500,"Jet Fule","4-Engin",true);
console.log(airPlaneDetails);
airPlaneDetails.takeOff()

airPlaneDetails.brake(50);
airPlaneDetails.accelerate(100);
airPlaneDetails.refuel()
