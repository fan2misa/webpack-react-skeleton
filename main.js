const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

const PUBLIC_PATH = path.join(__dirname, 'public');

app.on('ready', function () {
    win = new BrowserWindow({width: 1200, height: 800});

    win.loadURL(path.join(PUBLIC_PATH, process.env.NODE_ENV === 'development' ? 'dev.html' : 'index.html'));
    
    if (process.env.NODE_ENV === 'development') {
        win.webContents.openDevTools();
    }
});
