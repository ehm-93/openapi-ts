// This file is auto-generated by @hey-api/openapi-ts

import type { Options } from '@hey-api/client-fetch'
import { type DefaultError, queryOptions, type UseMutationOptions } from '@tanstack/vue-query'

import {
  addPet,
  createUser,
  createUsersWithListInput,
  deleteOrder,
  deletePet,
  deleteUser,
  findPetsByStatus,
  findPetsByTags,
  getInventory,
  getOrderById,
  getPetById,
  getUserByName,
  loginUser,
  logoutUser,
  placeOrder,
  updatePet,
  updatePetWithForm,
  updateUser,
  uploadFile
} from '../services.gen'
import type {
  AddPetData,
  AddPetError,
  AddPetResponse,
  CreateUserData,
  CreateUserError,
  CreateUserResponse,
  CreateUsersWithListInputData,
  CreateUsersWithListInputError,
  CreateUsersWithListInputResponse,
  DeleteOrderData,
  DeletePetData,
  DeleteUserData,
  FindPetsByStatusData,
  FindPetsByTagsData,
  GetOrderByIdData,
  GetPetByIdData,
  GetUserByNameData,
  LoginUserData,
  PlaceOrderData,
  PlaceOrderError,
  PlaceOrderResponse,
  UpdatePetData,
  UpdatePetError,
  UpdatePetResponse,
  UpdatePetWithFormData,
  UpdateUserData,
  UpdateUserError,
  UpdateUserResponse,
  UploadFileData,
  UploadFileError,
  UploadFileResponse
} from '../types.gen'

type QueryKey<TOptions extends Options> = [
  {
    infinite?: boolean
    params: Pick<TOptions, 'body' | 'headers' | 'path' | 'query'>
    scope: string
  }
]

const createQueryKeyParams = <TOptions extends Options>(
  options?: TOptions
): QueryKey<TOptions>[0]['params'] => {
  const params: QueryKey<TOptions>[0]['params'] = {} as QueryKey<TOptions>[0]['params']
  if (options?.body) {
    params.body = options.body
  }
  if (options?.headers) {
    params.headers = options.headers
  }
  if (options?.path) {
    params.path = options.path
  }
  if (options?.query) {
    params.query = options.query
  }
  return params
}

export const addPetOptions = (options: Options<AddPetData>) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await addPet({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'addPet'
      }
    ]
  })

export const addPetMutation: UseMutationOptions<
  AddPetResponse,
  AddPetError,
  Options<AddPetData>
> = {
  mutationFn: async (options) => {
    const { data } = await addPet({
      ...options,
      throwOnError: true
    })
    return data
  }
}

export const updatePetMutation: UseMutationOptions<
  UpdatePetResponse,
  UpdatePetError,
  Options<UpdatePetData>
> = {
  mutationFn: async (options) => {
    const { data } = await updatePet({
      ...options,
      throwOnError: true
    })
    return data
  }
}

export const findPetsByStatusOptions = (options?: Options<FindPetsByStatusData>) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await findPetsByStatus({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'findPetsByStatus'
      }
    ]
  })

export const findPetsByTagsOptions = (options?: Options<FindPetsByTagsData>) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await findPetsByTags({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'findPetsByTags'
      }
    ]
  })

export const getPetByIdOptions = (options: Options<GetPetByIdData>) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getPetById({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'getPetById'
      }
    ]
  })

export const updatePetWithFormOptions = (options: Options<UpdatePetWithFormData>) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await updatePetWithForm({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'updatePetWithForm'
      }
    ]
  })

export const updatePetWithFormMutation: UseMutationOptions<
  void,
  DefaultError,
  Options<UpdatePetWithFormData>
> = {
  mutationFn: async (options) => {
    const { data } = await updatePetWithForm({
      ...options,
      throwOnError: true
    })
    return data
  }
}

export const deletePetMutation: UseMutationOptions<void, DefaultError, Options<DeletePetData>> = {
  mutationFn: async (options) => {
    const { data } = await deletePet({
      ...options,
      throwOnError: true
    })
    return data
  }
}

export const uploadFileOptions = (options: Options<UploadFileData>) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await uploadFile({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'uploadFile'
      }
    ]
  })

export const uploadFileMutation: UseMutationOptions<
  UploadFileResponse,
  UploadFileError,
  Options<UploadFileData>
> = {
  mutationFn: async (options) => {
    const { data } = await uploadFile({
      ...options,
      throwOnError: true
    })
    return data
  }
}

export const getInventoryOptions = (options?: Options) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getInventory({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'getInventory'
      }
    ]
  })

export const placeOrderOptions = (options?: Options<PlaceOrderData>) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await placeOrder({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'placeOrder'
      }
    ]
  })

export const placeOrderMutation: UseMutationOptions<
  PlaceOrderResponse,
  PlaceOrderError,
  Options<PlaceOrderData>
> = {
  mutationFn: async (options) => {
    const { data } = await placeOrder({
      ...options,
      throwOnError: true
    })
    return data
  }
}

export const getOrderByIdOptions = (options: Options<GetOrderByIdData>) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getOrderById({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'getOrderById'
      }
    ]
  })

export const deleteOrderMutation: UseMutationOptions<
  void,
  DefaultError,
  Options<DeleteOrderData>
> = {
  mutationFn: async (options) => {
    const { data } = await deleteOrder({
      ...options,
      throwOnError: true
    })
    return data
  }
}

export const createUserOptions = (options?: Options<CreateUserData>) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await createUser({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'createUser'
      }
    ]
  })

export const createUserMutation: UseMutationOptions<
  CreateUserResponse,
  CreateUserError,
  Options<CreateUserData>
> = {
  mutationFn: async (options) => {
    const { data } = await createUser({
      ...options,
      throwOnError: true
    })
    return data
  }
}

export const createUsersWithListInputOptions = (options?: Options<CreateUsersWithListInputData>) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await createUsersWithListInput({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'createUsersWithListInput'
      }
    ]
  })

export const createUsersWithListInputMutation: UseMutationOptions<
  CreateUsersWithListInputResponse,
  CreateUsersWithListInputError,
  Options<CreateUsersWithListInputData>
> = {
  mutationFn: async (options) => {
    const { data } = await createUsersWithListInput({
      ...options,
      throwOnError: true
    })
    return data
  }
}

export const loginUserOptions = (options?: Options<LoginUserData>) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await loginUser({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'loginUser'
      }
    ]
  })

export const logoutUserOptions = (options?: Options) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await logoutUser({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'logoutUser'
      }
    ]
  })

export const getUserByNameOptions = (options: Options<GetUserByNameData>) =>
  queryOptions({
    queryFn: async ({ queryKey }) => {
      const { data } = await getUserByName({
        ...options,
        ...queryKey[0].params,
        throwOnError: true
      })
      return data
    },
    queryKey: [
      {
        params: createQueryKeyParams(options),
        scope: 'getUserByName'
      }
    ]
  })

export const updateUserMutation: UseMutationOptions<
  UpdateUserResponse,
  UpdateUserError,
  Options<UpdateUserData>
> = {
  mutationFn: async (options) => {
    const { data } = await updateUser({
      ...options,
      throwOnError: true
    })
    return data
  }
}

export const deleteUserMutation: UseMutationOptions<void, DefaultError, Options<DeleteUserData>> = {
  mutationFn: async (options) => {
    const { data } = await deleteUser({
      ...options,
      throwOnError: true
    })
    return data
  }
}
