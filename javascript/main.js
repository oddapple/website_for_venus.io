let options = {
  bottom: '12px', // default: '32px'
  right: '12px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '', // default: '0.3s'
  buttonColorDark: '#485f7d',  // default: '#100f2c'
  buttonColorLight: '#ddd', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: false // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
