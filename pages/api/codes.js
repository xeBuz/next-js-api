const code = 200;

export default (req, res) => {
  res.status(code).json({
    'code': code
  });
}
