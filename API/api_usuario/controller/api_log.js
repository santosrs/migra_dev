var fs = require("fs");
var morgan = require("morgan");
var path = require("path");
var rfs = require("rotating-file-stream");

var logDirectory = path.join(__dirname, "log");
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
var accessLogStream = rfs("access.log", {
  interval: "1d", // rotate daily
  path: logDirectory,
});

exports.log = morgan(
  '":req[login]";":remote-addr";":remote-user";"[:date[iso]]";":method";":url";"HTTP/:http-version";":status";":res[content-length]";":referrer";":user-agent";":res[error-code]";":res[error-msg]";"',
  { stream: accessLogStream }
);
