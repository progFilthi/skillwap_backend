const deleteUser = (req, res) => {
  const userId = req.body.userId;
  res
    .status(201)
    .json({ message: `This deletes a user with an id: ${userId}` });
};

export default deleteUser;
