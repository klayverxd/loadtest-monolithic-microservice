// User service
const express = require("express");

const app = express();

const users = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Jane" },
	{ id: 3, name: "Bob" },
];

app.get("/users", (req, res) => {
	res.send(users);
});

app.listen(3000, () => {
	console.log("Users service running on port 3000");
});
