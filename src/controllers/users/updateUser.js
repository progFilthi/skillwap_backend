const updateUser = (req, res) => {
  const userId = req.body.userId;
  res
    .status(200)
    .json({ message: `This updates a user with an id: ${userId}` });
};
export default updateUser;
