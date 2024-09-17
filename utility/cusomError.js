export const createError = (errorCode, errorMessage) => {
  const err = new Error();

  err.status = errorCode;
  err.message = errorMessage;

  return err;
};
