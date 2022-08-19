export function isErrorType(error: unknown): error is Error {
    return error instanceof Error;
  }


