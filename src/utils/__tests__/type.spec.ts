import { describe, expect, it } from 'vitest';

import { getMappedType, getType } from '../type';

describe('getMappedType', () => {
    it.each([
        { type: '', expected: undefined },
        { type: 'any', expected: 'unknown' },
        { type: 'array', expected: 'unknown[]' },
        { type: 'boolean', expected: 'boolean' },
        { type: 'byte', expected: 'number' },
        { type: 'char', expected: 'string' },
        { type: 'date-time', expected: 'string' },
        { type: 'date', expected: 'string' },
        { type: 'double', expected: 'number' },
        { type: 'file', expected: 'binary' },
        { type: 'float', expected: 'number' },
        { type: 'int', expected: 'number' },
        { type: 'integer', expected: 'number' },
        { type: 'long', expected: 'number' },
        { type: 'null', expected: 'null' },
        { type: 'number', expected: 'number' },
        { type: 'object', expected: 'unknown' },
        { type: 'password', expected: 'string' },
        { type: 'short', expected: 'number' },
        { type: 'string', expected: 'string' },
        { type: 'void', expected: 'void' },
    ])('should map type $type to $expected', ({ type, expected }) => {
        expect(getMappedType(type)).toEqual(expected);
    });
});

describe('getType', () => {
    it('should convert int', () => {
        const type = getType('int');
        expect(type.type).toEqual('number');
        expect(type.base).toEqual('number');
        expect(type.template).toEqual(null);
        expect(type.imports).toEqual([]);
        expect(type.isNullable).toEqual(false);
    });

    it('should convert string', () => {
        const type = getType('string');
        expect(type.type).toEqual('string');
        expect(type.base).toEqual('string');
        expect(type.template).toEqual(null);
        expect(type.imports).toEqual([]);
        expect(type.isNullable).toEqual(false);
    });

    it('should convert string array', () => {
        const type = getType('array[string]');
        expect(type.type).toEqual('string[]');
        expect(type.base).toEqual('string');
        expect(type.template).toEqual(null);
        expect(type.imports).toEqual([]);
        expect(type.isNullable).toEqual(false);
    });

    it('should convert template with primary', () => {
        const type = getType('#/components/schemas/Link[string]');
        expect(type.type).toEqual('Link<string>');
        expect(type.base).toEqual('Link');
        expect(type.template).toEqual('string');
        expect(type.imports).toEqual(['Link']);
        expect(type.isNullable).toEqual(false);
    });

    it('should convert template with model', () => {
        const type = getType('#/components/schemas/Link[Model]');
        expect(type.type).toEqual('Link<Model>');
        expect(type.base).toEqual('Link');
        expect(type.template).toEqual('Model');
        expect(type.imports).toEqual(['Link', 'Model']);
        expect(type.isNullable).toEqual(false);
    });

    it('should have double imports', () => {
        const type = getType('#/components/schemas/Link[Link]');
        expect(type.type).toEqual('Link<Link>');
        expect(type.base).toEqual('Link');
        expect(type.template).toEqual('Link');
        expect(type.imports).toEqual(['Link', 'Link']);
        expect(type.isNullable).toEqual(false);
    });

    it('should support dot', () => {
        const type = getType('#/components/schemas/model.000');
        expect(type.type).toEqual('model_000');
        expect(type.base).toEqual('model_000');
        expect(type.template).toEqual(null);
        expect(type.imports).toEqual(['model_000']);
        expect(type.isNullable).toEqual(false);
    });

    it('should support dashes', () => {
        const type = getType('#/components/schemas/some_special-schema');
        expect(type.type).toEqual('some_special_schema');
        expect(type.base).toEqual('some_special_schema');
        expect(type.template).toEqual(null);
        expect(type.imports).toEqual(['some_special_schema']);
        expect(type.isNullable).toEqual(false);
    });

    it('should support dollar sign', () => {
        const type = getType('#/components/schemas/$some+special+schema');
        expect(type.type).toEqual('$some_special_schema');
        expect(type.base).toEqual('$some_special_schema');
        expect(type.template).toEqual(null);
        expect(type.imports).toEqual(['$some_special_schema']);
        expect(type.isNullable).toEqual(false);
    });

    it('should support multiple base types', () => {
        const type = getType(['string', 'int']);
        expect(type.type).toEqual('string | number');
        expect(type.base).toEqual('string | number');
        expect(type.template).toEqual(null);
        expect(type.imports).toEqual([]);
        expect(type.isNullable).toEqual(false);
    });

    it('should support multiple nullable types', () => {
        const type = getType(['string', 'null']);
        expect(type.type).toEqual('string');
        expect(type.base).toEqual('string');
        expect(type.template).toEqual(null);
        expect(type.imports).toEqual([]);
        expect(type.isNullable).toEqual(true);
    });
});
