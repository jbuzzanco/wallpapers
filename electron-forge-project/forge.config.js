const path = require('path');

module.exports = {
  packagerConfig: {
    asar: true,
     // Add the code signing configuration
     osxSign: {
      identity: "D9D9E1B04A93458ECC39BB41E50C55472E06D1D9",
    },
    icon: path.join(__dirname, 'src', 'icons', 'mac', 'testflight.icns'),
  },
  "electronPackagerConfig": {
    "electron": "25.3.0",
  },
  makers: [
    {
      name: '@electron-forge/maker-pkg',
      config: {
        bundleIdentifier: 'com.joelondesign.wallpapers',
        identity: '3rd Party Mac Developer Application: Joel Buzzanco (J5HUPF6M97)',
      },
    },
  ],
  rebuildConfig: {},
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};