//* imports:
const app = require('./src/server/serverConfig');

//* listen app:
app.listen(app.get('port'), () => {
  console.log(`SERVER OK! (PORT: ${app.get('port')})`);
});
