const user = {
  name: 'javascript'
}

Object.seal(user);

user.age = 100;

console.log(user);
