class Thermostat {
    constructor() {
        this.temperature = 20;
        this.minimumTemp = 10;
        this.maximumTemp = 32; // powerSaving is off by default;
        this.powerSaving = false
    }

    changePowerSavingStatus() {
        this.powerSaving = !this.powerSaving;

        if (this.powerSaving === true) {
            this.maximumTemp = this.maximumTemp = 25;
        }
    }

    increaseTemperature(degrees) {
        let newTemp = this.temperature += degrees;

        if (newTemp <= this.maximumTemp && this.powerSaving === true) {
            return newTemp;
        } else {
            return `The maximum temperature is ${this.maximumTemp} degrees.`;
        }

    }

    decreaseTemperature(degrees) {
        let newTemp = this.temperature -= degrees;

        if (newTemp >= this.maximumTemp) {
            return newTemp;
        } else {
            return `The minimum temperature is ${this.minimumTemp} degrees.`;
        }

    }

    resetTemperature() {
        return this.temperature = this.temperature = 20
    }

}