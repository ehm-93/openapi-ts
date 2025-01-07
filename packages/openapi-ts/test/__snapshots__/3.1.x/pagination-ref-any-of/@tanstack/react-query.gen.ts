// This file is auto-generated by @hey-api/openapi-ts

import type { Options } from '@hey-api/client-fetch';
import { queryOptions, infiniteQueryOptions, type InfiniteData, type DefaultError, type UseMutationOptions } from '@tanstack/react-query';
import type { PostFooData } from '../types.gen';
import { postFoo, client } from '../sdk.gen';

type QueryKey<TOptions extends Options> = [
    Pick<TOptions, 'baseUrl' | 'body' | 'headers' | 'path' | 'query'> & {
        _id: string;
        _infinite?: boolean;
    }
];

const createQueryKey = <TOptions extends Options>(id: string, options?: TOptions, infinite?: boolean): QueryKey<TOptions>[0] => {
    const params: QueryKey<TOptions>[0] = { _id: id, baseUrl: (options?.client ?? client).getConfig().baseUrl } as QueryKey<TOptions>[0];
    if (infinite) {
        params._infinite = infinite;
    }
    if (options?.body) {
        params.body = options.body;
    }
    if (options?.headers) {
        params.headers = options.headers;
    }
    if (options?.path) {
        params.path = options.path;
    }
    if (options?.query) {
        params.query = options.query;
    }
    return params;
};

export const postFooQueryKey = (options: Options<PostFooData>) => [
    createQueryKey('postFoo', options)
];

export const postFooOptions = (options: Options<PostFooData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await postFoo({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: postFooQueryKey(options)
    });
};

const createInfiniteParams = <K extends Pick<QueryKey<Options>[0], 'body' | 'headers' | 'path' | 'query'>>(queryKey: QueryKey<Options>, page: K) => {
    const params = queryKey[0];
    if (page.body) {
        params.body = {
            ...queryKey[0].body as any,
            ...page.body as any
        };
    }
    if (page.headers) {
        params.headers = {
            ...queryKey[0].headers,
            ...page.headers
        };
    }
    if (page.path) {
        params.path = {
            ...queryKey[0].path as any,
            ...page.path as any
        };
    }
    if (page.query) {
        params.query = {
            ...queryKey[0].query as any,
            ...page.query as any
        };
    }
    return params as unknown as typeof page;
};

export const postFooInfiniteQueryKey = (options: Options<PostFooData>): QueryKey<Options<PostFooData>> => [
    createQueryKey('postFoo', options, true)
];

export const postFooInfiniteOptions = (options: Options<PostFooData>) => {
    return infiniteQueryOptions<unknown, DefaultError, InfiniteData<unknown>, QueryKey<Options<PostFooData>>, number | null | Pick<QueryKey<Options<PostFooData>>[0], 'body' | 'headers' | 'path' | 'query'>>(
    // @ts-ignore
    {
        queryFn: async ({ pageParam, queryKey, signal }) => {
            // @ts-ignore
            const page: Pick<QueryKey<Options<PostFooData>>[0], 'body' | 'headers' | 'path' | 'query'> = typeof pageParam === 'object' ? pageParam : {
                body: {
                    page: pageParam
                }
            };
            const params = createInfiniteParams(queryKey, page);
            const { data } = await postFoo({
                ...options,
                ...params,
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: postFooInfiniteQueryKey(options)
    });
};

export const postFooMutation = (options?: Partial<Options<PostFooData>>) => {
    const mutationOptions: UseMutationOptions<unknown, DefaultError, Options<PostFooData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await postFoo({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};