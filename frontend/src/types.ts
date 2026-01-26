export interface IUser {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export interface ICreateUserRequest {
  name: string;
  email: string;
}

export interface IUpdateUserRequest {
  name?: string;
  email?: string;
}

export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface IPaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
