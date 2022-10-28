const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	try {
		const myDetails = {
			slackUsername: "Spindles",
			backend: true,
			age: 36,
			bio: "I am a solution-driven person",
		};
		return res.json(myDetails);
	} catch (error) {
		throw error;
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
