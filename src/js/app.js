class Character {
    constructor(name, attack) {
        this.name = name;
        this.baseAttack = attack;
        this._stoned = false;
        this._distance = 1;
    }

    set distance(value) {
        if (typeof value !== 'number' || value < 1) {
            throw new Error(
                'Distance must be at least 1'
            );
        }
        this._distance = value;
    }

    get distance() {
        return this._distance;
    }

    set stoned(value) {
        if (typeof value !== 'boolean') {
            this._stoned = false;
            return;
        }
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

    get attack() {
        let attackValue = this.baseAttack * (1 - (this.distance - 1) * 0.1);
        if (this.stoned) {
            attackValue -= Math.log2(this.distance) * 5;
        }
        return Math.max(0, attackValue);
    }

    set attack(value) {
        throw new Error(
            'Attack value is derived and cannot be set directly.'
        );
    }
}

class Magician extends Character {
    constructor(name, attack = 100) {
        super(name, attack);
    }
}

class Daemon extends Character {
    constructor(name, attack = 100) {
        super(name, attack);
    }
}

export { Magician, Daemon };
