const express = require("express");
const app = express();

const users = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Jane" },
	{ id: 3, name: "Bob" },
];

app.get("/users", (req, res) => {
	res.json(users);
});

app.use((req, res) => {
	res.status(404).send("Page not found");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
