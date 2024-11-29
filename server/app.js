const express = require('express');
const app = express();
const webpush = require('web-push');
const cors = require('cors');

const port = 3000;

const apiKeys = {
  publicKey: 'BD996BElw9viClG3BPRpykki-tIUTAzimPNBnllr7CHSgnQ0oytO0HDH3DAABC2w9cPmUrLpbim9FyFnNrtvhrA',
  privateKey: 'caiJgyzEfsKjkfuqjqkbkFQMvT8aptAVZQnxFFat9Do'
};

// webpush.setVapidDetails(
//   'mailto:deen1130@gmail.com',
//   apiKeys.publicKey,
//   apiKeys.privateKey
// );

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

// 使用者註冊身份
const subDatabse = [];

// 儲存使用者註冊身份 API
app.post('/save-subscription', (req, res) => {
  subDatabse.push(req.body);
  res.json({ status: '成功', message: '訂閱已儲存', body: req.body });
});

// 發送推播通知 API
app.post('/send-notification', (req, res) => {
  // webpush.sendNotification(req.body.token, 'hello');
  const token = req.body.token;
  const options = req.body.options;
  try {
    // GCM 相容
    webpush.setGCMAPIKey(apiKeys.publicKey);
    // 填入之前儲存的 endpoint, p256dh 與 auth
    const pushSubscription = {
      endpoint: token.endpoint,
      keys: {
        p256dh: token.keys.p256dh,
        auth: token.keys.auth,
      },
    };
    // 設定 VAPID public/private key 以及 email
    webpush.setVapidDetails(
      'mailto:deen1130@gmail.com',
      apiKeys.publicKey,
      apiKeys.privateKey
    );
    // webpush.sendNotification(req.body.token, 'deen');
    // 傳送推播
    webpush
      .sendNotification(pushSubscription, JSON.stringify(options))
      .then(function () {
        // callback(null);
      })
      .catch(function (err) {
        // callback(err);
      });
  } catch (e) {
    // callback(e);
  }
  res.json({ statue: '成功', message: '訊息已發送至推播服務', body: req.body });
});

// 服務端監聽
app.listen(port, '192.168.0.124', () => {
  console.log('Server running on port 192.168.0.124:3000!');
});