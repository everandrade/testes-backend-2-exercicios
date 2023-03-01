import { UserModel } from "../types"

export interface SignupInputDTO {
    name: unknown,
    email: unknown,
    password: unknown
}

export interface DeleteUserInputDTO {
    token: unknown
    id: unknown
}

export interface DeleteUserOutputDTO {
    message: string
}

export interface SignupOutputDTO {
    token: string
}

export interface LoginInputDTO {
    email: unknown,
    password: unknown
}

export interface LoginOutputDTO {
    token: string
}

export type GetAllOutputDTO = UserModel[]

export interface GetUserInputDTO {
    token: unknown
    id: unknown
}