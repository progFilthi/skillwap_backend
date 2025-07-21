const healthController = (req, res) => {
  res.json({ message: "The server is healthy & running..." }).status(200);
};
export default healthController;
