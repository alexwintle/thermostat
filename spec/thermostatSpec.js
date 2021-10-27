describe('Thermostat', () => {
    let thermostat;

    beforeEach(() => {
        thermostat = new Thermostat();
    });

    describe('constructor', () => {
        it('should set the thermostat at 20 degrees by default', () => {
            expect(thermostat.temperature).toEqual(20);
        });

        it('should set the minimum temperature to 10 degrees', () => {
            expect(thermostat.minimumTemp).toEqual(10);
        });

        it('should set the maximum temperature to 32 degrees (power saving is off by default)', () => {
            expect(thermostat.maximumTemp).toEqual(32);
        });

        it('should return false because powerSaving is false by default', () => {
            expect(thermostat.powerSaving).toEqual(false);
        });

    });

    describe('changePowerSavingStatus', () => {
        it('should change the powerSavingStatus', () => {
            expect(thermostat.powerSaving).toEqual(false);

            thermostat.changePowerSavingStatus();
            expect(thermostat.powerSaving).toEqual(true);

            thermostat.changePowerSavingStatus();
            expect(thermostat.powerSaving).toEqual(false);
        });

        it('should change the maximum temperature so that when power saving is on, it is 25, when off then max temp is 32', () => {
            expect(thermostat.maximumTemp).toEqual(32);

            thermostat.changePowerSavingStatus();
            expect(thermostat.maximumTemp).toEqual(25);
        });

    });

    describe('increaseTemperature', () => {
        it('should increase the temperature by (x) amount of degrees', () => {
            thermostat.increaseTemperature(5); // 20 (default temp) + 5
            expect(thermostat.temperature).toEqual(25);
        });

        it('should return a message if the potential new temperature is greater than the maximum temperature (32 degrees by default) and powerSaving is false', () => {
            expect(thermostat.increaseTemperature(10)).toEqual('The maximum temperature is 32 degrees.')
        });

    });

    describe('decreaseTemperature', () => {
        it('should decrease the temperature by (x) amount of degrees', () => {
            thermostat.decreaseTemperature(5);
            expect(thermostat.temperature).toEqual(15);
        });

        it('should return a message if the potential new temperature is less than the minimum temperature (10 degrees)', () => {
            expect(thermostat.decreaseTemperature(30)).toEqual('The minimum temperature is 10 degrees.');
        });

    });

    describe('resetTemperature', () => {
        it('should reset the temperature to its default, 20 degrees', () => {
            thermostat.resetTemperature();
           expect(thermostat.temperature).toEqual(20)
        });
    });

});