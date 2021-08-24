class Traveler {
    constructor(name){
        this.name = name;
        this.foodQt = 1;
        this.isHealthy = true;
    }

    hunt(){
        this.foodQt += 2
    }
    
    eat(){
        if(this.foodQt > 0){
            this.foodQt -= 1
        }
        if(this.foodQt === 0){
            this.isHealthy = false
        }
    }
}

class Wagon {
    constructor(capacity){
        this.capacity = capacity;
        this.passengersList = [];
    }

    getAvailableSeatCount (){
        return this.capacity - this.passengersList.length
    }

    join(traveler) {
        if(this.capacity - this.passengersList.length > 0){
            this.passengersList.push(traveler)
        }
    }

    shouldQuarantine(){
        let sickPassenger = false;
        this.passengersList.forEach((item)=>{
            if(item.isHealthy === false){
                sickPassenger = true
            }
        })
        return sickPassenger
    }

    totalFood(){
        let output = this.passengersList.reduce((acc, atual)=>{
            return acc + atual.foodQt
        }, 0)
        return output
    }
}

// getAvailableSeatCount: Retorna o número de assentos vazios, determinado pela capacidade que foi estipulada quando a carroça foi criada comparado com o número de passageiros a bordo no momento.

// join: Adicione um viajante à carroça se tiver espaço. Se a carroça já estiver cheia, não o adicione.

// shouldQuarantine: Retorna true se houver pelo menos uma pessoa não saudável na carroça. Retorna false se não houver.

// totalFood: Retorna o número total de comida de todos os ocupantes da carroça.

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);



