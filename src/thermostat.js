'use strict';

class Thermostat {
    constructor() {
        this.temperature = 20;
        this.minimumTemp = 10;
        this.maximumTemp = 25;
        this.powerSaving = true; // powerSaving is on by default;
    }

    increaseTemperature(degrees) {
        const newTemp = this.temperature + degrees;

        if (newTemp <= this.maximumTemp) {
            return this.temperature += degrees;
        } else {
            return(`Sorry, the maximum temperature is ${this.maximumTemp} degrees.`);
        }
    }

    decreaseTemperature(degrees) {
        const newTemp = this.temperature - degrees

        if (newTemp >= this.minimumTemp) {
            return this.temperature -= degrees;
        } else {
            return (`Sorry, the minimum temperature is ${this.minimumTemp} degrees.`);
        }
    }

    resetTemperature() {
        return this.temperature = 20;
    }

    changePowerSavingStatus() {
        this.powerSaving = !this.powerSaving;
        this._updateMaxTempWhenPowerSavingStatusChanges()
    }

    getEnergyUsage() {
        if (this.temperature < 18) {
            return `Energy Usage: GREEN, Current Temperature: ${this.temperature}`
        } else if (this.temperature <= 25) {
            return `Energy Usage: BLACK, Current Temperature: ${this.temperature}`
        } else {
            return `Energy Usage: RED, Current temperature: ${this.temperature}`
        }

    }

    _updateMaxTempWhenPowerSavingStatusChanges() {
        if (this.powerSaving === false) {
            this.maximumTemp = 32;
        }
    }
}