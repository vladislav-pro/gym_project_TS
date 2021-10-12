class Client {
    constructor(name, age, cash) {
        this._gym = null;
        this._name = name;
        this._age = age;
        this._cash = cash;
        this._gym = null;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get cash() {
        return this._cash;
    }
    addCash(cash) {
        this._cash += cash;
    }
    payCash(name, cash) {
        if (this._cash >= cash) {
            this._gym.payTraining(name, cash);
            this._cash -= cash;
        }
    }
    get gym() {
        return this._gym;
    }
    set gym(gym) {
        this._gym = gym;
    }
}
class Gym {
    constructor(name, adress) {
        this._name = name;
        this._adress = adress;
        this._trainers = [];
    }
    get name() {
        return this._name;
    }
    get adress() {
        return this._adress;
    }
    getTrainerByName(name) {
        return this._trainers.find(trainer => trainer.name === name);
    }
    get trainers() {
        return this._trainers;
    }
    addTrainer(name) {
        this._trainers.push(name);
    }
    deleteTrainer(name) {
        let deleteTrainer = this._trainers.find(trainer => trainer.name === name);
        const cansel = this._trainers.indexOf(deleteTrainer);
        this.trainers.slice(cansel, 1);
    }
    payTraining(name, cash) {
        this._trainers.find(trainer => {
            if (trainer.name === name) {
                trainer.addCash(cash);
            }
        });
    }
}
class Trainer {
    constructor(name, cash) {
        this._name = name;
        this._cash = cash;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get cash() {
        return this._cash;
    }
    addCash(cash) {
        this._cash += cash;
    }
}
class VipTrainer extends Trainer {
    constructor(name, cash, level) {
        super(name, cash);
        this._level = level;
    }
    get level() {
        return this._level;
    }
    set level(level) {
        this._level = level;
    }
}
const metal = new Gym("Metal", "adadad");
const andrey = new Trainer("Andrey", 30);
const sashaVip = new VipTrainer("Sasha", 5, 2);
const Yulia = new Client("Yulia", 21, 100);
Yulia.gym = metal;
metal.addTrainer(andrey);
metal.addTrainer(sashaVip);
//# sourceMappingURL=index.js.map