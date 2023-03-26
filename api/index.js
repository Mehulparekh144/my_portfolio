const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: "http://127.0.0.1:5173",
    })
);

app.listen(3000, () => {
    console.log("Server up on ", 3000);
});

app.get("/api" , (req,res)=>{
    return res.json("hello")
})

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/api/send", function (req, res) {

    let mailOptions = {
        from: `${req.body.email}`,
        to: process.env.EMAIL,
        subject: `Message from ${req.body.name}`,
        text: `${req.body.subject}`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.json({
                status: "fail",
            });
        } else {
            res.json({ status: "success" });
        }
    });
});
