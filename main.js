const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    frame: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname,"build", "icon.ico")
  });

  win.setMenu(null);
  win.loadURL("https://samu121432.neocities.org/");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
