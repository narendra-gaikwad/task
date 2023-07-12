export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateUsername = (username) => {
  return username.length >= 3;
};

export const validatePassword = (password) => {
  return password.length >= 6;
};
