const registerUser = (req, res) => {
  const username = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  res.json({
    success: true,
    username: username,
    email,
    password,
  });
};

module.exports = registerUser;
