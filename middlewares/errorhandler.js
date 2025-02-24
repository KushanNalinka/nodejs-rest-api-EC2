// const errorHandler = (err, req, res, next) => {
//   const statusCode = res.statusCode ? res.statusCode : 500;

//   return res.status(statusCode).json({
//     message: err.message,
//   });
// };

// module.exports = errorHandler;
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  res.status(statusCode).json({ message: err.message });
};

export default errorHandler;

