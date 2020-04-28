// Fake users data
const codes = [200, 204, 301, 302, 304, 307, 308, 400, 401, 403, 404, 408, 410, 429, 500, 502, 503, 504];
var code = codes[Math.floor(Math.random() * codes.length)];

export default (req, res) => {
  res.status(code).json({
    'code': code
  });
}
