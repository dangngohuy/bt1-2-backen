const app = require("./app");
const config = require ('./config/index');

const PORT = config.app.port;

app.listen(PORT ,() => {
    console .log ('server is running on post: ' + PORT);
});