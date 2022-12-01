const	express = require("express");
const	body_parser = require("body-parser");
const	mongoose = require("mongoose");
const	ejs = require("ejs");
const	app = express();
const	client_key_tiktok = "awhkvttgqq218hlb";
const	client_secret_tiktok = "ee148789e863c93b455644cff0bd700a";
const	cors = require('cors');
const	redirect_url = "http://localhost:3000/";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(body_parser.urlencoded({extended: false}));

// mongoose.connect("",
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true
// 	}
// )


app.get('/tiktok', (req, res) =>
{
	const csrfState = Math.random().toString(36).substring(2);
	res.cookie('csrfState', csrfState, {maxAge: 86400000});

	let url = 'https://www.tiktok.com/auth/authorize/';

	url += "?client_key=" + client_key_tiktok;
	url += '&scope=user.info.basic,video.list';
	url += '&response_type=code';
	url += '&redirect_uri=' + redirect_url;
	url += '&state=' + csrfState;

	res.redirect(url);
})

app.get("/", (req, res) =>
	{
		res.render("home");
	}
)

app.post("/send", (req, res) =>
	{
		tiktok = "https://open-api.tiktok.com/share/video/upload/?access_token=<ACCESS_TOKEN>&open_id=<OPEN_ID>"
	}
)

app.listen(3000,	function(req, res)
	{
		console.log("connecte");
	}
)
