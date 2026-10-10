const { app, BrowserWindow, session, desktopCapturer } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 800, backgroundColor: '#17181c',
    autoHideMenuBar: true, title: '모닥',
    webPreferences: { contextIsolation: true }
  });
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  const ses = session.defaultSession;
  // 마이크 / 화면 캡처 / 클립보드 허용
  ses.setPermissionRequestHandler((wc, perm, cb) =>
    cb(['media', 'display-capture', 'clipboard-sanitized-write'].includes(perm)));
  // 화면 공유: 주 화면을 공유 (Windows는 시스템 소리도 함께)
  ses.setDisplayMediaRequestHandler((req, cb) => {
    desktopCapturer.getSources({ types: ['screen'] }).then(src => {
      const r = { video: src[0] };
      if (process.platform === 'win32') r.audio = 'loopback';
      cb(r);
    }).catch(() => cb({}));
  }, { useSystemPicker: true });
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
