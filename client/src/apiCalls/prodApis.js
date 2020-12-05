import { customFetch } from '../custom-lib';

export const getAllIssues = params => customFetch('http://localhost:3000/?'+ new URLSearchParams(params).toString(),{});

export * from './dummyApis';