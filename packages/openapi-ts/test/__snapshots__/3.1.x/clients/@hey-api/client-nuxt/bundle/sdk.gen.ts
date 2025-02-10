// This file is auto-generated by @hey-api/openapi-ts

import { type Options as ClientOptions, type Composable, type TDataShape, type Client, formDataBodySerializer, urlSearchParamsBodySerializer } from './client';
import type { ExportData, PatchApiVbyApiVersionNoTagData, ImportData, ImportResponse, FooWowData, ApiVVersionODataControllerCountData, ApiVVersionODataControllerCountResponse, GetApiVbyApiVersionSimpleOperationData, GetApiVbyApiVersionSimpleOperationResponse, GetApiVbyApiVersionSimpleOperationError, DeleteCallWithoutParametersAndResponseData, GetCallWithoutParametersAndResponseData, HeadCallWithoutParametersAndResponseData, OptionsCallWithoutParametersAndResponseData, PatchCallWithoutParametersAndResponseData, PostCallWithoutParametersAndResponseData, PutCallWithoutParametersAndResponseData, DeleteFooData3, CallWithDescriptionsData, DeprecatedCallData, CallWithParametersData, CallWithWeirdParameterNamesData, GetCallWithOptionalParamData, PostCallWithOptionalParamData, PostCallWithOptionalParamResponse, PostApiVbyApiVersionRequestBodyData, PostApiVbyApiVersionFormDataData, CallWithDefaultParametersData, CallWithDefaultOptionalParametersData, CallToTestOrderOfParamsData, DuplicateNameData, DuplicateName2Data, DuplicateName3Data, DuplicateName4Data, CallWithNoContentResponseData, CallWithNoContentResponseResponse, CallWithResponseAndNoContentResponseData, CallWithResponseAndNoContentResponseResponse, DummyAData, DummyAResponse, DummyBData, DummyBResponse, CallWithResponseData, CallWithResponseResponse, CallWithDuplicateResponsesData, CallWithDuplicateResponsesResponse, CallWithDuplicateResponsesError, CallWithResponsesData, CallWithResponsesResponse, CallWithResponsesError, CollectionFormatData, TypesData, TypesResponse, UploadFileData, UploadFileResponse, FileResponseData, FileResponseResponse, ComplexTypesData, ComplexTypesResponse, MultipartResponseData, MultipartResponseResponse, MultipartRequestData, ComplexParamsData, ComplexParamsResponse, CallWithResultFromHeaderData, TestErrorCodeData, NonAsciiæøåÆøÅöôêÊ字符串Data, NonAsciiæøåÆøÅöôêÊ字符串Response, PutWithFormUrlEncodedData } from './types.gen';
import { client as _heyApiClient } from './client.gen';

export type Options<TComposable extends Composable, TData extends TDataShape = TDataShape> = ClientOptions<TComposable, TData> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};

export const export_ = <TComposable extends Composable>(options: Options<TComposable, ExportData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/no+tag',
        ...options
    });
};

export const patchApiVbyApiVersionNoTag = <TComposable extends Composable>(options: Options<TComposable, PatchApiVbyApiVersionNoTagData>) => {
    return (options.client ?? _heyApiClient).patch<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/no+tag',
        ...options
    });
};

export const import_ = <TComposable extends Composable>(options: Options<TComposable, ImportData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, ImportResponse, unknown>({
        url: '/api/v{api-version}/no+tag',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const fooWow = <TComposable extends Composable>(options: Options<TComposable, FooWowData>) => {
    return (options.client ?? _heyApiClient).put<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/no+tag',
        ...options
    });
};

export const apiVVersionODataControllerCount = <TComposable extends Composable>(options: Options<TComposable, ApiVVersionODataControllerCountData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, ApiVVersionODataControllerCountResponse, unknown>({
        url: '/api/v{api-version}/simple/$count',
        ...options
    });
};

export const getApiVbyApiVersionSimpleOperation = <TComposable extends Composable>(options: Options<TComposable, GetApiVbyApiVersionSimpleOperationData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, GetApiVbyApiVersionSimpleOperationResponse, GetApiVbyApiVersionSimpleOperationError>({
        url: '/api/v{api-version}/simple:operation',
        ...options
    });
};

export const deleteCallWithoutParametersAndResponse = <TComposable extends Composable>(options: Options<TComposable, DeleteCallWithoutParametersAndResponseData>) => {
    return (options.client ?? _heyApiClient).delete<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const getCallWithoutParametersAndResponse = <TComposable extends Composable>(options: Options<TComposable, GetCallWithoutParametersAndResponseData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const headCallWithoutParametersAndResponse = <TComposable extends Composable>(options: Options<TComposable, HeadCallWithoutParametersAndResponseData>) => {
    return (options.client ?? _heyApiClient).head<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const optionsCallWithoutParametersAndResponse = <TComposable extends Composable>(options: Options<TComposable, OptionsCallWithoutParametersAndResponseData>) => {
    return (options.client ?? _heyApiClient).options<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const patchCallWithoutParametersAndResponse = <TComposable extends Composable>(options: Options<TComposable, PatchCallWithoutParametersAndResponseData>) => {
    return (options.client ?? _heyApiClient).patch<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const postCallWithoutParametersAndResponse = <TComposable extends Composable>(options: Options<TComposable, PostCallWithoutParametersAndResponseData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const putCallWithoutParametersAndResponse = <TComposable extends Composable>(options: Options<TComposable, PutCallWithoutParametersAndResponseData>) => {
    return (options.client ?? _heyApiClient).put<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/simple',
        ...options
    });
};

export const deleteFoo = <TComposable extends Composable>(options: Options<TComposable, DeleteFooData3>) => {
    return (options.client ?? _heyApiClient).delete<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/foo/{foo_param}/bar/{BarParam}',
        ...options
    });
};

export const callWithDescriptions = <TComposable extends Composable>(options: Options<TComposable, CallWithDescriptionsData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/descriptions',
        ...options
    });
};

/**
 * @deprecated
 */
export const deprecatedCall = <TComposable extends Composable>(options: Options<TComposable, DeprecatedCallData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/parameters/deprecated',
        ...options
    });
};

export const callWithParameters = <TComposable extends Composable>(options: Options<TComposable, CallWithParametersData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/parameters/{parameterPath}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const callWithWeirdParameterNames = <TComposable extends Composable>(options: Options<TComposable, CallWithWeirdParameterNamesData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/parameters/{parameter.path.1}/{parameter-path-2}/{PARAMETER-PATH-3}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const getCallWithOptionalParam = <TComposable extends Composable>(options: Options<TComposable, GetCallWithOptionalParamData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/parameters',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postCallWithOptionalParam = <TComposable extends Composable>(options: Options<TComposable, PostCallWithOptionalParamData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, PostCallWithOptionalParamResponse, unknown>({
        url: '/api/v{api-version}/parameters',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postApiVbyApiVersionRequestBody = <TComposable extends Composable>(options: Options<TComposable, PostApiVbyApiVersionRequestBodyData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/requestBody',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postApiVbyApiVersionFormData = <TComposable extends Composable>(options: Options<TComposable, PostApiVbyApiVersionFormDataData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, unknown, unknown>({
        ...formDataBodySerializer,
        url: '/api/v{api-version}/formData',
        ...options,
        headers: {
            'Content-Type': null,
            ...options?.headers
        }
    });
};

export const callWithDefaultParameters = <TComposable extends Composable>(options: Options<TComposable, CallWithDefaultParametersData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/defaults',
        ...options
    });
};

export const callWithDefaultOptionalParameters = <TComposable extends Composable>(options: Options<TComposable, CallWithDefaultOptionalParametersData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/defaults',
        ...options
    });
};

export const callToTestOrderOfParams = <TComposable extends Composable>(options: Options<TComposable, CallToTestOrderOfParamsData>) => {
    return (options.client ?? _heyApiClient).put<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/defaults',
        ...options
    });
};

export const duplicateName = <TComposable extends Composable>(options: Options<TComposable, DuplicateNameData>) => {
    return (options.client ?? _heyApiClient).delete<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/duplicate',
        ...options
    });
};

export const duplicateName2 = <TComposable extends Composable>(options: Options<TComposable, DuplicateName2Data>) => {
    return (options.client ?? _heyApiClient).get<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/duplicate',
        ...options
    });
};

export const duplicateName3 = <TComposable extends Composable>(options: Options<TComposable, DuplicateName3Data>) => {
    return (options.client ?? _heyApiClient).post<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/duplicate',
        ...options
    });
};

export const duplicateName4 = <TComposable extends Composable>(options: Options<TComposable, DuplicateName4Data>) => {
    return (options.client ?? _heyApiClient).put<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/duplicate',
        ...options
    });
};

export const callWithNoContentResponse = <TComposable extends Composable>(options: Options<TComposable, CallWithNoContentResponseData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, CallWithNoContentResponseResponse, unknown>({
        url: '/api/v{api-version}/no-content',
        ...options
    });
};

export const callWithResponseAndNoContentResponse = <TComposable extends Composable>(options: Options<TComposable, CallWithResponseAndNoContentResponseData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, CallWithResponseAndNoContentResponseResponse, unknown>({
        url: '/api/v{api-version}/multiple-tags/response-and-no-content',
        ...options
    });
};

export const dummyA = <TComposable extends Composable>(options: Options<TComposable, DummyAData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, DummyAResponse, unknown>({
        url: '/api/v{api-version}/multiple-tags/a',
        ...options
    });
};

export const dummyB = <TComposable extends Composable>(options: Options<TComposable, DummyBData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, DummyBResponse, unknown>({
        url: '/api/v{api-version}/multiple-tags/b',
        ...options
    });
};

export const callWithResponse = <TComposable extends Composable>(options: Options<TComposable, CallWithResponseData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, CallWithResponseResponse, unknown>({
        url: '/api/v{api-version}/response',
        ...options
    });
};

export const callWithDuplicateResponses = <TComposable extends Composable>(options: Options<TComposable, CallWithDuplicateResponsesData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, CallWithDuplicateResponsesResponse, CallWithDuplicateResponsesError>({
        url: '/api/v{api-version}/response',
        ...options
    });
};

export const callWithResponses = <TComposable extends Composable>(options: Options<TComposable, CallWithResponsesData>) => {
    return (options.client ?? _heyApiClient).put<TComposable, CallWithResponsesResponse, CallWithResponsesError>({
        url: '/api/v{api-version}/response',
        ...options
    });
};

export const collectionFormat = <TComposable extends Composable>(options: Options<TComposable, CollectionFormatData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/collectionFormat',
        ...options
    });
};

export const types = <TComposable extends Composable>(options: Options<TComposable, TypesData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, TypesResponse, unknown>({
        url: '/api/v{api-version}/types',
        ...options
    });
};

export const uploadFile = <TComposable extends Composable>(options: Options<TComposable, UploadFileData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, UploadFileResponse, unknown>({
        ...urlSearchParamsBodySerializer,
        url: '/api/v{api-version}/upload',
        ...options,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...options?.headers
        }
    });
};

export const fileResponse = <TComposable extends Composable>(options: Options<TComposable, FileResponseData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, FileResponseResponse, unknown>({
        url: '/api/v{api-version}/file/{id}',
        ...options
    });
};

export const complexTypes = <TComposable extends Composable>(options: Options<TComposable, ComplexTypesData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, ComplexTypesResponse, unknown>({
        url: '/api/v{api-version}/complex',
        ...options
    });
};

export const multipartResponse = <TComposable extends Composable>(options: Options<TComposable, MultipartResponseData>) => {
    return (options.client ?? _heyApiClient).get<TComposable, MultipartResponseResponse, unknown>({
        url: '/api/v{api-version}/multipart',
        ...options
    });
};

export const multipartRequest = <TComposable extends Composable>(options: Options<TComposable, MultipartRequestData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, unknown, unknown>({
        ...formDataBodySerializer,
        url: '/api/v{api-version}/multipart',
        ...options,
        headers: {
            'Content-Type': null,
            ...options?.headers
        }
    });
};

export const complexParams = <TComposable extends Composable>(options: Options<TComposable, ComplexParamsData>) => {
    return (options.client ?? _heyApiClient).put<TComposable, ComplexParamsResponse, unknown>({
        url: '/api/v{api-version}/complex/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json-patch+json',
            ...options?.headers
        }
    });
};

export const callWithResultFromHeader = <TComposable extends Composable>(options: Options<TComposable, CallWithResultFromHeaderData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/header',
        ...options
    });
};

export const testErrorCode = <TComposable extends Composable>(options: Options<TComposable, TestErrorCodeData>) => {
    return (options.client ?? _heyApiClient).post<TComposable, unknown, unknown>({
        url: '/api/v{api-version}/error',
        ...options
    });
};

export const nonAsciiæøåÆøÅöôêÊ字符串 = <TComposable extends Composable>(options: Options<TComposable, NonAsciiæøåÆøÅöôêÊ字符串Data>) => {
    return (options.client ?? _heyApiClient).post<TComposable, NonAsciiæøåÆøÅöôêÊ字符串Response, unknown>({
        url: '/api/v{api-version}/non-ascii-æøåÆØÅöôêÊ字符串',
        ...options
    });
};

/**
 * Login User
 */
export const putWithFormUrlEncoded = <TComposable extends Composable>(options: Options<TComposable, PutWithFormUrlEncodedData>) => {
    return (options.client ?? _heyApiClient).put<TComposable, unknown, unknown>({
        ...urlSearchParamsBodySerializer,
        url: '/api/v{api-version}/non-ascii-æøåÆØÅöôêÊ字符串',
        ...options,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...options?.headers
        }
    });
};