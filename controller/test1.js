
const User = require('../model/test1');
export function saveUser () {
  var user = {
    username: 'ydj',
    password: '123123',
    email: ''
  }
  var newUser = new User(user);
  newUser.save();
}

export async function findUser(ctx, next) {
  const data = await User.findOne({username: 'ydj'})
	const result = {
		code:200,
		response: data,
		ts: 12345
  }
  ctx.response.body = result;
  return result;
}
