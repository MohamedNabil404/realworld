export interface CustomError {
  code: string;
  config: any;
  message: string;
  name: string;
  request: any;
  response: {
    config: any;
    data: {
      errors: any;
    };
    headers: any;
    request: any;
    status: number;
    statusText: string;
  };
  stack: string;
}

export function isErrorType(error: unknown): error is Error {
  return error instanceof Error;
}

// export function hasResponse ( error : unknown) {
//   return error.response as string;
// }
