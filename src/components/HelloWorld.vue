<template>
  <div class="view">
    <div class="componentsName">NotificationView</div>
    <div class="box">
      <div class="setupTitle">Firestore Database 資料庫測試</div>
      <div class="messageBox">
        <div class="flexBox-v gap-8">
          <div class="flexBox-h">
            <input ref="newMessageRef" placeholder="新訊息 ..." type="text" />
            <button @click="addMessage">增加</button>
          </div>
          <div class="flexBox-v gap-4">
            <div v-for="item in messages" class="flexBox-h">
              <input v-model="item.text" type="text" />
              <div class="flexBox-h gap-4">
                <button @click="updateMessage(item)">更新</button>
                <button @click="deleteMessage(item)">刪除</button>
              </div>
            </div>
          </div>
        </div>
        <CurrentLoading :show="messageLoading" colorCode="#202b38" />
      </div>
      <div class="setupTitle">推播通知</div>
      <div class="subscriptionBox">
        <div class="flexBox-v gap-8">
          <div class="button">
            <button @click="!isNotification ? requestPermission() : pushNotification()">
              {{ `${!isNotification ? '接收' : '發送'}推播通知` }}
            </button>
          </div>
          <div class="flexBox-v gap-4">
            <div v-for="item in subscriptions" class="item">
              <div class="data">
                <pre>{{ item }}</pre>
              </div>
            </div>
          </div>
        </div>
        <CurrentLoading :show="subscriptionLoading" colorCode="#202b38" />
      </div>
    </div>
  </div>
</template>

<!-- JS 逐頁轉 pdf 檔為圖片格式 https://segmentfault.com/a/1190000043963349 -->

<script setup>
import CurrentLoading from '@/components/util/CurrentLoading.vue';
import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue';

/*
發送端：安裝 web-push
npm install web-push -g
npm install web-push --legacy-peer-deps

取得發送者身份，只要有身份就可以發送，不同電腦也可以共用
web-push generate-vapid-keys

=======================================

PublicKey:
BEjW9fGjflroMLSonoLkExR73VCagyqOBvrDC_wMQY33CTFeyg-hF21B6KYW8rv2tOR3lYGfEjizCFJHzBjtgzE

PrivateKey:
LrBMa7HyXfoqUIrXu6hVZ0r3lEO4l5QQjQTSZ9zU83M

=======================================

推送訊息
web-push send-notification

使用 firebase 資料庫
npm install firebase --legacy-peer-deps
*/

// import webpush from 'web-push';
// const webpush = require('web-push');
// const webpush = new URL('web-push', import.meta.url).href

import {
  getFirestore,
  onSnapshot,
  collection,
  doc,
  deleteDoc,
  setDoc,
  addDoc,
  orderBy,
  query,
} from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyANJTede-DQuCmu_8kPraYlRecLDbRTdT4',
  authDomain: 'notification-db317.firebaseapp.com',
  projectId: 'notification-db317',
  storageBucket: 'notification-db317.firebasestorage.app',
  messagingSenderId: '1069303497200',
  appId: '1:1069303497200:web:5e06f0f7bcffdf84f09d35',
  measurementId: 'G-HBE8784GYN',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage();

/* Firestore Database 資料庫測試 */
const messageLoading = ref(true);
const newMessageRef = ref(null);
const messages = ref([]);
const addMessage = async () => {
  await addDoc(collection(db, 'messages'), {
    text: newMessageRef.value.value,
    date: Date.now(),
  });
  newMessageRef.value.value = '';
};
const updateMessage = (payload) => {
  setDoc(doc(db, 'messages', payload.id), {
    text: payload.text,
    date: payload.date,
  });
};
const deleteMessage = (payload) => {
  deleteDoc(doc(db, 'messages', payload.id));
};
/* end */

/* 推播通知 */
const isNotification = ref(false);
const subscriptionLoading = ref(true);
const subscriptions = ref([]);
// 系統是否支援
if (!('Notification' in window)) {
  console.log('不支援推送通知');
}
// 加密
const urlB64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
// 接收發送的身份
const PublicKey = 'BEjW9fGjflroMLSonoLkExR73VCagyqOBvrDC_wMQY33CTFeyg-hF21B6KYW8rv2tOR3lYGfEjizCFJHzBjtgzE';
const PrivateKey = 'LrBMa7HyXfoqUIrXu6hVZ0r3lEO4l5QQjQTSZ9zU83M';
const ServerKey = urlB64ToUint8Array(PublicKey);
// 註冊 sw.js
const serviceWorker_register = async () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then((reg) => {
        // reg.unregister().then((boolean) => {
        //   // 如果 boolean = true，取消注册成功
        // });
        // button.onclick = function () {
        //   registration.update();
        // };
        return reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: ServerKey,
        });
        // .then((pushSubscription) => {
        //   console.log('pushSubscription', pushSubscription);
        // });
      })
      .then(async (res) => {
        console.log('上傳使用者註冊身份', res);
        const json = JSON.stringify(res);
        const data = JSON.parse(json);
        data.date = Date.now();
        // console.log(data);

        if (!subscriptions.value.some((item) => item.endpoint === res.endpoint)) {
          // 上傳至 firebase 資料庫
          await addDoc(collection(db, 'subscriptions'), data);
          // await fetch('https://days-pwas-practice.firebaseio.com/subscriptions.json', {
          //   method: 'POST',
          //   headers: {
          //     'Content-TYpe': 'application/json',
          //     Accept: 'application/json',
          //   },
          //   body: JSON.stringify(res),
          // });
        }
      })
      .catch((err) => {
        console.log('訂閱用戶失敗: ', err);
      });
  }
};
// 請求通知權限
const requestPermission = () => {
  Notification.requestPermission().then((permission) => {
    console.log('請求通知權限成功', permission);
    // 取得授權後執行動作
    serviceWorker_register();
  });
};

// const webPush = webpush;
// webPush.setVapidDetails('mailto:deen1130@gmail.com', PublicKey, PrivateKey);
const pushNotification = async () => {
  const options = {
    body: '感謝您發送此推播訊息',
    icon: './images/logo-192x192.png',
    badge: './images/badge-72x72.png',
    // image:
    //   'https://augt-forum-upload.s3-ap-southeast-1.amazonaws.com/original/1X/6b3cd55281b7bedea101dc36a6ef24034806390b.png',
    data: {
      url: 'https://web.dev/push-notifications-overview/',
      link: 'https://web.dev/push-notifications-overview/',
    },
  };
  if (Notification.permission == 'granted') {
    // 發送 1
    // const notification = new Notification('你好！');
    // 發送 2
    // navigator.serviceWorker.ready.then((registration) => {});
    // navigator.serviceWorker.ready.then((registration) => {
    //   const options = { tag: 'user_alerts' };
    //   registration.getNotifications(options).then((notifications) => {
    //     console.log('getNotifications', notifications);
    //     // 對你的通知執行某些操作
    //   });
    // });
    navigator.serviceWorker.getRegistration().then((reg) => {
      reg.showNotification('Hello', options);
    });
    // 發送 3
    // const subscription = {
    //   ...subscriptions.value[0],
    // };
    // webPush.sendNotification(subscription, JSON.stringify(options));
    // webPush.sendNotification(subscription);
  }
};
/* end */

onMounted(async () => {
  if (Notification.permission === 'granted') {
    console.log('已開啟通知權限');
    isNotification.value = true;
  } else if (['default', 'denied'].includes(Notification.permission)) {
    console.log('未開啟通知權限');
  }

  /* Firestore Database 資料庫測試 */
  const messagesQuery = query(collection(db, 'messages'), orderBy('date'));
  const liveMessages = onSnapshot(messagesQuery, async (snapshot) => {
    // console.log('liveMessages onSnapshot');
    // for (const [index, item] of Object.entries(snapshot.docs)) {
    //   await new Promise(async (resolve) => {
    //     setTimeout(async () => {
    //       resolve();
    //     }, 0);
    //   });
    // }
    messages.value = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        // text: doc.data().text,
        // date: doc.data().date,
        ...doc.data(),
      };
    });
    messageLoading.value = false;
  });
  onUnmounted(liveMessages);
  /* end */

  /* 推播通知 */
  const subscriptionsQuery = query(collection(db, 'subscriptions'), orderBy('date'));
  const liveSubscription = onSnapshot(subscriptionsQuery, async (snapshot) => {
    // console.log('liveSubscription onSnapshot');
    // for (const [index, item] of Object.entries(snapshot.docs)) {
    //   await new Promise(async (resolve) => {
    //     setTimeout(async () => {
    //       resolve();
    //     }, 0);
    //   });
    // }
    subscriptions.value = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    subscriptionLoading.value = false;
  });
  onUnmounted(liveSubscription);
  /* end */
});
onUnmounted(async () => {});
</script>

<style lang="scss">
body {
  margin: 0px !important;
}
</style>
<style lang="scss" scoped>
@import url('https://cdn.jsdelivr.net/npm/water.css@2/out/dark.min.css');
.view {
  padding: 20px;
}
.messageBox {
  position: relative;
  input {
    margin: 0px;
  }
}
.subscriptionBox {
  position: relative;
}
.flexBox-h {
  display: flex;
  align-items: center;
  gap: 10px;
}
.flexBox-v {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.gap-4 {
  gap: 4px !important;
}
.gap-8 {
  gap: 8px !important;
}
</style>
