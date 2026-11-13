// 견적 접수 시작 페이지: 설치(홈 화면 추가)용 최소 서비스 워커. 캐시는 하지 않음.
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", () => {});
