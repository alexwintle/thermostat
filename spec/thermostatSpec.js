describe('Thermostat', () => {
    let thermostat;

    beforeEach(() => {
        thermostat = new Thermostat();
    });

    describe('constructor', () => {
        it('should set the thermostat at 20 degrees by default', () => {
            expect(thermostat.getTemperature()).toEqual(20);
        });

        it('should set the minimum temperature to 10 degrees', () => {
            expect(thermostat.getMinimumTemp()).toEqual(10);
        });

        it('should set the maximum temperature to 32 degrees (power saving is off by default)', () => {
            expect(thermostat.getMaximumTemp()).toEqual(32);
        });

        it('should return false because powerSaving is false by default', () => {
            expect(thermostat.getPowerSavingStatus()).toEqual(false);
        });

    });

    describe('changePowerSavingStatus', () => {
        it('should change the powerSavingStatus', () => {
            expect(thermostat.getPowerSavingStatus()).toEqual(false);

            thermostat.changePowerSavingStatus();
            expect(thermostat.getPowerSavingStatus()).toEqual(true);

            thermostat.changePowerSavingStatus();
            expect(thermostat.getPowerSavingStatus()).toEqual(false);
        });

    });

    describe('increaseTemperature', () => {
        it('should increase the temperature by (x) amount of degrees', () => {
            thermostat.increaseTemperature(5); // 20 (default temp) + 5
            expect(thermostat.getTemperature()).toEqual(25);
        });

        it('should return a message if the potential new temperature is greater than the maximum temperature (32 degrees by default) and powerSaving is false', () => {
            expect(thermostat.increaseTemperature(10)).toEqual('The maximum temperature is 32 degrees.')
        });

    });

    describe('decreaseTemperature', () => {
        it('should decrease the temperature by (x) amount of degrees', () => {
            thermostat.decreaseTemperature(5);
            expect(thermostat.getTemperature()).toEqual(15);
        });

        it('should return a message if the potential new temperature is less than the minimum temperature (10 degrees)', () => {
            expect(thermostat.decreaseTemperature(30)).toEqual('The minimum temperature is 10 degrees.');
        });

    });

});