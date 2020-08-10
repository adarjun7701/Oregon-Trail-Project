const main = document.querySelector("main")
class Traveler {
    name;
    food = 1;
    isHealthy = true;

    constructor(name){
        this.name = name;
    }

    hunt() {
        this.food += 2;
    }
    eat() {
        if(this.food < 1) {
            this.isHealthy = false;
        } else {
            this.food -= 1;
        }
    }
}

class Wagon {
    capacity = 0;
    passengers;

    constructor(capacity) {
        this.capcity = capacity;
        this.passengers = [];
    }

    getAvailableSeatCount() {
        return this.capcity - this.passengers.length;
    }
    join(traveler){
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler);
        }
    }
    shouldQuarantine() {
        return this.passengers.some(x => !x.isHealthy);
    }
    totalFood() {
        return this.passengers.reduce((total, value) => {
            return total.food + value.food
        });
    }
}