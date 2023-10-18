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
    "osxSign": {
      "identity": "Developer ID Application: Joelondesign Dev Key",
    }
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
