// API Service
const express = require("express");
const http = require("http");

const app = express();

app.get("/", (req, res) => {
	http.get("http://localhost:3000/users", usersRes => {
		let data = "";
		usersRes.on("data", chunk => {
			data += chunk;
		});
		usersRes.on("end", () => {
			res.send(JSON.parse(data));
		});
	});
});

app.listen(8000, () => {
	console.log("API running on port 8000");
});
