module.exports = {
  updateChannel: 'canary',
  config: {
    // default font size in pixels for all tabs
    fontSize: 12,
    windowSize: [1080, 720],
    fontFamily: '"Operator Mono Ssm", "Fira Code", monospace',
    cursorShape: 'BLOCK',
    wickedBorder: true,
    padding: '10px'
  },


  plugins: [
    'hyperterm-cobalt2-theme',
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  // localPlugins: ['hyperterm-cobalt2-theme'],
};