import { expect } from 'chai';
import add from '../src/add.js';
import countBy from '../src/countBy.js';
import eq from '../src/eq.js';
import filter from '../src/filter.js';
import isDate from '../src/isDate.js';
import isEmpty from '../src/isEmpty.js';
import toFinite from '../src/toFinite.js';
import toInteger from '../src/toInteger.js';
import toNumber from '../src/toNumber.js';
import toString from '../src/toString.js';


describe('Add', () => {
  it('must return sum of two numbers', () => {
    expect(4).to.be.deep.equal(add(3, 1));
  });

  it('must return sum of one positive and one negative number', () => {
    expect(0).to.be.deep.equal(add(-2, 2));
  });

  it('must return sum of two negative numbers', () => {
    expect(-6.4).to.be.deep.equal(add(-3.2, -3.2));
  });

  it('must return sum of undefined and positive numbers', () => {
    expect(1).to.be.deep.equal(add(undefined, 1));
  });

  it('must return sum of null and positive numbers', () => {
    expect(1).to.be.deep.equal(add(null, 1));
  });
});

describe('isDate', () => {
  describe('Check Date', function () {
    it('must return true if date object', () => {
      expect(true).to.be.equal(isDate(new Date()));
    });
  });

  describe('Check Invalid Date', function () {
    it('must return false if not date object', () => {
      expect(false).to.be.equal(isDate('Mon April 23 2012'));
    });
  });
});

describe('isEmpty', () => {
    it('must return true if null', () => {
      expect(true).to.be.equal(isEmpty(null));
    });

    it('must return true if value is number', () => {
      expect(true).to.be.equal(isEmpty(3));
    });

    it('must return false if not null', () => {
      expect(false).to.be.equal(isEmpty('abc'));
    });

    it('must return false if value is object', () => {
      expect(false).to.be.equal(isEmpty({'key': 12}));
    });

    it('must return false if value is an array', () => {
      expect(false).to.be.equal(isEmpty([1,2,3]));
    });

    it('must return true if value is boolean', () => {
      expect(true).to.be.equal(isEmpty(true));
    });

});

describe('filter', () => {
  it('should filter even numbers from the array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const predicate = (value) => value % 2 === 0;

    const result = filter(array, predicate);

    expect(result).to.deep.equal([2, 4, 6, 8]);
  });
});

describe('countBy', () => {

  it('should handle a collection of objects', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ]
    const result = countBy(users, value => value.active);

    expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
  });
  it('should count occurrences based on the iteratee function', () => {
    const collection = [1, 2, 3, 4, 5];
    const iteratee = (value) => value % 2 === 0 ? 'even' : 'odd';

    const result = countBy(collection, iteratee);

    expect(result).to.deep.equal({ odd: 3, even: 2 });
  });

});

describe('toInteger', () => {
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(0).to.be.deep.equal(toInteger(0.3));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(4).to.be.deep.equal(toInteger(4.2));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(2).to.be.deep.equal(toInteger(2.7));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(2).to.be.deep.equal(toInteger('2.4'));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(0).to.be.deep.equal(toInteger(false));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(0).to.be.deep.equal(toInteger(null));
    });
  });
});

describe('toString', () => {
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('3').to.be.deep.equal(toString(3));
    });
  });
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('4.2').to.be.deep.equal(toString(4.2));
    });
  });
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('null').to.be.deep.equal(toString(null));
    });
  });
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('2.4').to.be.deep.equal(toString('2.4'));
    });
  });
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('false').to.be.deep.equal(toString(false));
    });
  });
});

describe('toFinite', () => {
  describe('Convert to finite number', function () {
    it('must return finite number', () => {
      expect(0).to.be.deep.equal(toFinite(0));
    });
  });
  describe('Convert to finite number', function () {
    it('must return finite number', () => {
      expect(5.2).to.be.deep.equal(toFinite(5.2));
    });
  });
  describe('Convert to finite number', function () {
    it('must return finite number', () => {
      expect(2.4).to.be.deep.equal(toFinite('2.4'));
    });
  });
  describe('Convert to finite number', function () {
    it('must return finite number', () => {
      expect(1).to.be.deep.equal(toFinite(true));
    });
  });
  describe('Convert to finite number', function () {
    it('must return finite number', () => {
      expect(0).to.be.deep.equal(toFinite(undefined));
    });
  });
});

describe('toNumber', () => {
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(1).to.be.deep.equal(toNumber(1));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(3.2).to.be.deep.equal(toNumber(3.2));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(4.1).to.be.deep.equal(toNumber('4.1'));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(1).to.be.deep.equal(toNumber(true));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(0).to.be.deep.equal(toNumber(0));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(NaN).to.be.deep.equal(toNumber(undefined));
    });
  });
});

describe('eq', () => {
  describe('Checks if both values are equal', function () {
    it('must return true', () => {
      expect(true).to.be.deep.equal(eq(5, 5));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return false', () => {
      expect(false).to.be.deep.equal(eq(3.1, 3));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return false', () => {
      expect(false).to.be.deep.equal(eq(-6, 6));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return true', () => {
      expect(true).to.be.deep.equal(eq(4, '4'));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return false', () => {
      expect(false).to.be.deep.equal(eq(null, NaN));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return false', () => {
      expect(false).to.be.deep.equal(eq(undefined, 2));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return false', () => {
      expect(false).to.be.deep.equal(eq(1, null));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return true', () => {
      expect(true).to.be.deep.equal(eq(undefined, undefined));
    });
  });
});

