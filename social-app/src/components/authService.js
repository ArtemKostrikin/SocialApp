
export async function loginUser(username, password) {

  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (username === 'user' && password === 'password') {
    return {
      username: 'user',
      email: 'user@example.com',
    };
  } else {
    throw new Error('Invalid username or password');
  }
}


export async function registerUser(username, email, password) {

  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    username,
    email,
    password
  };
}
