import { app, BrowserWindow } from "electron";

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({ width: 800, height: 600 });
	const startUrl = process.env.DEV_URL;

	mainWindow.loadURL(startUrl);

	mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
