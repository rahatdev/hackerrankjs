import { lchmod } from 'fs';

const assert = require('chai').assert;
const app = require('../30DaysOfCode/10.binaryNumbers');

helloResult = app.hello();


describe('App', () => {
    describe('hello()', () => {
        it('should say hello', () => {
            assert.equal(helloResult, 'hello');
        })
    });
    
    // can this refactored to pull inputs and expected outputs from external file?
    describe('intToBinary(n)', () => {
        it('should return 101', () => {
            let result = app.intToBinary(5);
            assert.equal(result, '101');
        });
        it('should return 1101', () => {
            let result = app.intToBinary(13);
            assert.equal(result, '1101');
        });
        it('should return 1101110', () => {
            let result = app.intToBinary(110);
            assert.equal(result, '1101110');
        });
    })
})
