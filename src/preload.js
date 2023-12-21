const { ipcRenderer } = require('electron');
window.api = {
  send: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
};
