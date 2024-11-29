const express = require("express");
const app = express();
const webpush = require('web-push');
const cors = require("cors");

const port = 3000;

const apiKeys = {
  publicKey: "BEH_QqTiTkcPx8EPwt0PmZoap0zgdV4ezkMoD6uMX4KDpcbEdOo7pVSwSz2YJAZlo3F4x8yli6-b2VAFcvsrl7c",
  privateKey: "Ql8CW7p_-w8Bq8j99TG_hXb6hxfGDe0H4m-AJgkMb08"
};

webpush.setVapidDetails(
  'mailto:deen1130@gmail.com',
  apiKeys.publicKey,
  apiKeys.privateKey
);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

// 使用者註冊身份
const subDatabse = [];

// 儲存使用者註冊身份 API
app.post("/save-subscription", (req, res) => {
  subDatabse.push(req.body);
  res.json({ status: "Success", message: "Subscription saved!" });
});

// 發送推播通知 API
app.get("/send-notification", (req, res) => {
  webpush.sendNotification(subDatabse[0], "Hello world");
  res.json({ "statue": "Success", "message": "Message sent to push service" });
});

// 服務端監聽
app.listen(port, () => {
  console.log("Server running on port 3000!");
});