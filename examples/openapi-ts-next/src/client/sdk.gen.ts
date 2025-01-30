// This file is auto-generated by @hey-api/openapi-ts

import type {
  Client,
  Options as ClientOptions,
  TDataShape,
} from '@hey-api/client-next';

import { client as _heyApiClient } from './client.gen';
import type {
  AddPetData,
  AddPetResponse,
  CreateUserData,
  CreateUserResponse,
  CreateUsersWithListInputData,
  CreateUsersWithListInputResponse,
  DeleteOrderData,
  DeletePetData,
  DeleteUserData,
  FindPetsByStatusData,
  FindPetsByStatusResponse,
  FindPetsByTagsData,
  FindPetsByTagsResponse,
  GetInventoryData,
  GetInventoryResponse,
  GetOrderByIdData,
  GetOrderByIdResponse,
  GetPetByIdData,
  GetPetByIdResponse,
  GetUserByNameData,
  GetUserByNameResponse,
  LoginUserData,
  LoginUserResponse,
  LogoutUserData,
  PlaceOrderData,
  PlaceOrderResponse,
  UpdatePetData,
  UpdatePetResponse,
  UpdatePetWithFormData,
  UpdateUserData,
  UploadFileData,
  UploadFileResponse,
} from './types.gen';

type Options<
  TData extends TDataShape = TDataShape,
  ThrowOnError extends boolean = boolean,
> = ClientOptions<TData, ThrowOnError> & {
  /**
   * You can provide a client instance returned by `createClient()` instead of
   * individual options. This might be also useful if you want to implement a
   * custom client.
   */
  client?: Client;
};

/**
 * Add a new pet to the store
 * Add a new pet to the store
 */
export const addPet = <ThrowOnError extends boolean = false>(
  options: Options<AddPetData, ThrowOnError>,
) =>
  (options.client ?? _heyApiClient).post<AddPetResponse, unknown, ThrowOnError>(
    {
      security: [
        {
          scheme: 'bearer',
          type: 'http',
        },
      ],
      url: '/pet',
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    },
  );

/**
 * Update an existing pet
 * Update an existing pet by Id
 */
export const updatePet = <ThrowOnError extends boolean = false>(
  options: Options<UpdatePetData, ThrowOnError>,
) =>
  (options.client ?? _heyApiClient).put<
    UpdatePetResponse,
    unknown,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/pet',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 */
export const findPetsByStatus = <ThrowOnError extends boolean = false>(
  options?: Options<FindPetsByStatusData, ThrowOnError>,
) =>
  (options?.client ?? _heyApiClient).get<
    FindPetsByStatusResponse,
    unknown,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/pet/findByStatus',
    ...options,
  });

/**
 * Finds Pets by tags
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 */
export const findPetsByTags = <ThrowOnError extends boolean = false>(
  options?: Options<FindPetsByTagsData, ThrowOnError>,
) =>
  (options?.client ?? _heyApiClient).get<
    FindPetsByTagsResponse,
    unknown,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/pet/findByTags',
    ...options,
  });

/**
 * Deletes a pet
 */
export const deletePet = <ThrowOnError extends boolean = false>(
  options: Options<DeletePetData, ThrowOnError>,
) =>
  (options.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/pet/{petId}',
    ...options,
  });

/**
 * Find pet by ID
 * Returns a single pet
 */
export const getPetById = <ThrowOnError extends boolean = false>(
  options: Options<GetPetByIdData, ThrowOnError>,
) =>
  (options.client ?? _heyApiClient).get<
    GetPetByIdResponse,
    unknown,
    ThrowOnError
  >({
    security: [
      {
        name: 'api_key',
        type: 'apiKey',
      },
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/pet/{petId}',
    ...options,
  });

/**
 * Updates a pet in the store with form data
 */
export const updatePetWithForm = <ThrowOnError extends boolean = false>(
  options: Options<UpdatePetWithFormData, ThrowOnError>,
) =>
  (options.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/pet/{petId}',
    ...options,
  });

/**
 * uploads an image
 */
export const uploadFile = <ThrowOnError extends boolean = false>(
  options: Options<UploadFileData, ThrowOnError>,
) =>
  (options.client ?? _heyApiClient).post<
    UploadFileResponse,
    unknown,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/pet/{petId}/uploadImage',
    ...options,
    headers: {
      'Content-Type': 'application/octet-stream',
      ...options?.headers,
    },
  });

/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 */
export const getInventory = <ThrowOnError extends boolean = false>(
  options?: Options<GetInventoryData, ThrowOnError>,
) =>
  (options?.client ?? _heyApiClient).get<
    GetInventoryResponse,
    unknown,
    ThrowOnError
  >({
    security: [
      {
        name: 'api_key',
        type: 'apiKey',
      },
    ],
    url: '/store/inventory',
    ...options,
  });

/**
 * Place an order for a pet
 * Place a new order in the store
 */
export const placeOrder = <ThrowOnError extends boolean = false>(
  options?: Options<PlaceOrderData, ThrowOnError>,
) =>
  (options?.client ?? _heyApiClient).post<
    PlaceOrderResponse,
    unknown,
    ThrowOnError
  >({
    url: '/store/order',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

/**
 * Delete purchase order by ID
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 */
export const deleteOrder = <ThrowOnError extends boolean = false>(
  options: Options<DeleteOrderData, ThrowOnError>,
) =>
  (options.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
    url: '/store/order/{orderId}',
    ...options,
  });

/**
 * Find purchase order by ID
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 */
export const getOrderById = <ThrowOnError extends boolean = false>(
  options: Options<GetOrderByIdData, ThrowOnError>,
) =>
  (options.client ?? _heyApiClient).get<
    GetOrderByIdResponse,
    unknown,
    ThrowOnError
  >({
    url: '/store/order/{orderId}',
    ...options,
  });

/**
 * Create user
 * This can only be done by the logged in user.
 */
export const createUser = <ThrowOnError extends boolean = false>(
  options?: Options<CreateUserData, ThrowOnError>,
) =>
  (options?.client ?? _heyApiClient).post<
    CreateUserResponse,
    unknown,
    ThrowOnError
  >({
    url: '/user',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

/**
 * Creates list of users with given input array
 * Creates list of users with given input array
 */
export const createUsersWithListInput = <ThrowOnError extends boolean = false>(
  options?: Options<CreateUsersWithListInputData, ThrowOnError>,
) =>
  (options?.client ?? _heyApiClient).post<
    CreateUsersWithListInputResponse,
    unknown,
    ThrowOnError
  >({
    url: '/user/createWithList',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

/**
 * Logs user into the system
 */
export const loginUser = <ThrowOnError extends boolean = false>(
  options?: Options<LoginUserData, ThrowOnError>,
) =>
  (options?.client ?? _heyApiClient).get<
    LoginUserResponse,
    unknown,
    ThrowOnError
  >({
    url: '/user/login',
    ...options,
  });

/**
 * Logs out current logged in user session
 */
export const logoutUser = <ThrowOnError extends boolean = false>(
  options?: Options<LogoutUserData, ThrowOnError>,
) =>
  (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
    url: '/user/logout',
    ...options,
  });

/**
 * Delete user
 * This can only be done by the logged in user.
 */
export const deleteUser = <ThrowOnError extends boolean = false>(
  options: Options<DeleteUserData, ThrowOnError>,
) =>
  (options.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
    url: '/user/{username}',
    ...options,
  });

/**
 * Get user by user name
 */
export const getUserByName = <ThrowOnError extends boolean = false>(
  options: Options<GetUserByNameData, ThrowOnError>,
) =>
  (options.client ?? _heyApiClient).get<
    GetUserByNameResponse,
    unknown,
    ThrowOnError
  >({
    url: '/user/{username}',
    ...options,
  });

/**
 * Update user
 * This can only be done by the logged in user.
 */
export const updateUser = <ThrowOnError extends boolean = false>(
  options: Options<UpdateUserData, ThrowOnError>,
) =>
  (options.client ?? _heyApiClient).put<unknown, unknown, ThrowOnError>({
    url: '/user/{username}',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
