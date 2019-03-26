const user = {
  name: 'javascript'
}

Object.seal(user);

user.age = 100;
user.name = 'new name'

console.log(user);
