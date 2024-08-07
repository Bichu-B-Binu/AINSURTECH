export const errorHandler = (statusCode, meesage) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = meesage;
  return error;
};
