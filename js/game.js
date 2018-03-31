class Game {
    constructor() {
        this.income = 0;
        this.chickens = 0;
        this.money = 0;
        this.eggValue = 1;
        this.eggDelay = 10000;
        this.prevDelay = 10000; // keep a history of delays
        this.eggInterval = setInterval(() => this.layEgg(), this.eggDelay)
        setInterval(() => this.update(), 150)
    }
    update() {
        $('.statusBar').html(this.format(_('statusBar')))
        if (this.eggDelay != this.prevDelay) {
            // it changed
            clearInterval(this.eggInterval);
            this.eggInterval = setInterval(() => this.layEgg(), this.eggDelay)
        }
        this.prevDelay = this.eggDelay;
        this.income = (this.chickens * this.eggValue) / (this.eggDelay / 1000);
    }
    layEgg() {
        this.money += this.chickens * this.eggValue;
    }
    format(str) {
        return str.replace('{income}', this.income).replace('{money}', this.money).replace('{chickens}', this.chickens)
    }
    hatch() {
        this.chickens += 1;
        this.update();
    }
    reset() {
        this.income = 0;
        this.chickens = 0;
        this.money = 0;
        this.eggValue = 1;
        this.eggDelay = 10000;
        this.prevDelay = 10000; // keep a history of delays
    }
}

const game = new Game();