const { app, BrowserWindow, Menu } = require('electron');
app.userAgentFallback += ' IEPC';
app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  new BrowserWindow({ width: 1280, height: 800 })
    .loadURL('https://iebilling.pages.dev/billing.html');
});
app.on('window-all-closed', () => app.quit());
