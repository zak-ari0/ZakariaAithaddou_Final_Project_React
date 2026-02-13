// users.js
export let users = {}; // { email: { firstName, lastName, password } }

export function addUser(email, firstName, lastName, password) {
  if (users[email]) return false;
  users[email] = { firstName, lastName, password };
  return true;
}

export function checkLogin(email, password) {
  const user = users[email];
  if (!user) return { success: false, message: "Email not found" };
  if (user.password !== password) return { success: false, message: "Incorrect password" };
  return { success: true, user };
}
