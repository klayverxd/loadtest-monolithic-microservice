module.exports = function (response, context, ee, next) {
	if (response.statusCode === 200) {
		const numUsers = response.body;
		context.vars.numUsers = numUsers;
		console.log(`Número de usuários: ${numUsers}`);
	}
	return next();
};
