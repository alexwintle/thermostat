class Thermostat {
    constructor() {
        this.temperature = 20;
        this.minimumTemp = 10;
        this.maximumTemp = 32; // powerSaving is off by default;
        this.powerSaving = false
    }

    getTemperature = () => { return this.temperature; }
    getMinimumTemp = () => { return this.minimumTemp; }
    getMaximumTemp = () => { return this.maximumTemp; }
    getPowerSavingStatus = () => { return this.powerSaving; }

    changePowerSavingStatus() {
        return this.powerSaving = !this.powerSaving;
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

}