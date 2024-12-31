import { Magician, Daemon } from '../app';

describe('Character attack logic tests', () => {
    test('Attack without stoned effect, distance 1', () => {
        const magician = new Magician('Gandalf');
        magician.distance = 1;
        expect(magician.attack).toBe(100);
    });

    test('Attack without stoned effect, distance 5', () => {
        const daemon = new Daemon('Balrog');
        daemon.distance = 5;
        expect(daemon.attack).toBe(60);
    });

    test('Attack with stoned effect, distance 2', () => {
        const magician = new Magician('Gandalf');
        magician.distance = 2;
        magician.stoned = true;
        expect(magician.attack).toBeCloseTo(85, 1);
    });

    test('Attack with stoned effect, distance 5', () => {
        const daemon = new Daemon('Balrog');
        daemon.distance = 5;
        daemon.stoned = true;
        expect(daemon.attack).toBeCloseTo(48.39, 2);
    });

    test('Attack cannot be negative', () => {
        const magician = new Magician('Gandalf');
        magician.distance = 10;
        magician.stoned = true;
        expect(magician.attack).toBe(0);
    });

    test('Distance validation', () => {
        const magician = new Magician('Gandalf');
        expect(() => {
            magician.distance = 0;
        }).toThrow(
            'Distance must be at least 1'
        );
    });

    test('Attack setter throws error', () => {
        const daemon = new Daemon('Balrog');
        expect(() => {
            daemon.attack = 150;
        }).toThrow(
            'Attack value is derived and cannot be set directly.'
        );
    });

    test('Attack with large distance', () => {
        const daemon = new Daemon('Balrog');
        daemon.distance = 20;
        expect(daemon.attack).toBe(0);
    });

    test('Invalid distance type throws error', () => {
        const magician = new Magician('Gandalf');
        expect(() => {
            magician.distance = 'five';
        }).toThrow(
            'Distance must be at least 1'
        );
    });

    test('Invalid stoned type does not break', () => {
        const daemon = new Daemon('Balrog');
        daemon.stoned = 'true'; // некорректный тип
        expect(daemon.stoned).toBe(false);
    });
});
