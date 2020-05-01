const code = 404;

export default (req, res) => {
  res.status(code).json({
    'code': code
  });
}
