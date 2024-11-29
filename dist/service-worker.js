'use strict';

const filesToCache = [
  // '/application/views/app/style.css',
  // '/application/views/app/user_bootstrap5.css',
  // '/public/3rd/php.js',
];

self.addEventListener('install', event => {
  console.log('[Service Worker] Install');
  self.skipWaiting();
  // event.waitUntil(
  //   (async () => {
  //     const cache = await caches.open('upad12');
  //     await cache.addAll(filesToCache);
  //   })(),
  // );
});

// self.addEventListener('fetch', event => {
//   console.log('[ServiceWorker] fetch', event.request);
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });

// 前端監聽後端發送推播通知則觸發
self.addEventListener('push', function (event) {
  console.log('收到推播訊息', event);
  // const payload = event.data.json();
  // let options = {
  //   body: payload.message,
  //   icon: payload.icon,
  //   badge: payload.icon,
  //   // tag: '',
  //   // renotify: true,
  //   data: {
  //     role: payload.role,
  //     source: payload.source,
  //     child_id: payload.child_id,
  //   },
  // };
  // event.waitUntil(
  //   self.registration.showNotification(payload.title, options)
  // );
  let title = 'Hello';
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
  if (event.data) {
    const dataText = event.data.text();
    title = '收到的有效負載';
    options.body = `推播數據: '${dataText}'`;
  }
  event.waitUntil(
    self.registration.showNotification(
      title,
      options,
    ),
  );
});

// 用戶點擊通知
self.addEventListener('notificationclick', (event) => {
  console.log('收到通知後點擊');
  // const push_data = event.notification.data;
  // event.waitUntil(
  //   clients
  //     .matchAll({
  //       type: 'window',
  //     })
  //     .then((clientList) => {
  //       let url = '/app';
  //       if (push_data.source === '刷卡') {
  //         if (push_data.role === '11') url = '/app/Boss/EmployeeAttendance';
  //         if (push_data.role === '21') url = '/app/Student/Attendance';
  //         if (push_data.role === '30') url = '/app/Parents/ChildCalendar/?child_id=' + push_data.child_id;
  //       }
  //       return clients.openWindow(url);
  //     }),
  // );
  // event.notification.close();
  event.notification.close();
  let clickResponsePromise = Promise.resolve();
  if (event.notification.data && event.notification.data.url) {
    clickResponsePromise = clients.openWindow(event.notification.data.url);
  }
  event.waitUntil(clickResponsePromise);
});