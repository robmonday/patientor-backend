"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1["default"].json());
app.get("/api/ping", function (_req, res) {
    res.send("pong!");
});
var PORT = 3001;
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT));
});
