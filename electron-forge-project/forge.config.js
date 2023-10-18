const path = require('path');

module.exports = {
  packagerConfig: {
    asar: true,
     // Add the code signing configuration
     osxSign: {
      identity: 'JoelonDesign Distribution Key',
    },
    icon: path.join(__dirname, 'src', 'icons', 'mac', 'testflight.icns'),
  },
  "electronPackagerConfig": {
    "electron": "25.3.0",
  },
  rebuildConfig: {},
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
