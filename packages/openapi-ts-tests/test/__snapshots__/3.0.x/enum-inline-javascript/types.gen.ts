// This file is auto-generated by @hey-api/openapi-ts

export type Type = 'foo' | 'bar';

export const Type = {
    FOO: 'foo',
    BAR: 'bar'
} as const;

export type Foo = {
    type?: 'foo' | 'bar';
};

export type ClientOptions = {
    baseUrl: `${string}://${string}` | (string & {});
};