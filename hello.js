const user = {
  name: 'javascript'
}

Object.preventExtensions(user);

user.age = 100;

console.log(user);
