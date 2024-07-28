export const getUser = (req, res) => {
  console.log(req.query);

  return res.status(200).json([{ name: "ram" }, { name: "sham" }]);
};

export const userByName = (req, res) => {
  const { userName } = req.params;
  return res.status(200).json({ userName });
};

export const createUser = (req, res) => {
  const { name } = req.body;

  console.log(name);

  res.status(201).json({ name });
};

export const updateUser = (req, res) => {
  const { name } = req.body;
  const { userName } = req.params;

  res.status(201).json({ userName, name });
};

export const deleteUser = (req, res) => {
  const { userName } = req.params;
  console.log(userName);
  return res.status(200).json({ message: "deleted succusfully!" });
};
