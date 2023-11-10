const path = require("path");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const express = require("express");
const app = express();
require("dotenv").config();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));
const rootRoutes = require("./routes/root");
const testRoutes = require("./routes/test/index.js");
app.use("/", rootRoutes);
app.use("/test", testRoutes);
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "development") {
  const livereload = require("livereload");
  const connectLiveReload = require("connect-livereload");

  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(path.join(__dirname, "static"));
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

  app.use(connectLiveReload());
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
app.use((request, response, next) => {
  next(createError(404));
});
