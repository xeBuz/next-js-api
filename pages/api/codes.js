// Fake users data
const codes = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default (req, res) => {
  // Get data from your database
  res.status(200).json(codes);
}
