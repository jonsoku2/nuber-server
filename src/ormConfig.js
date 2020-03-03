"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultConnectionOptions = {
    type: "postgres",
    database: "nuber",
    synchronize: true,
    logging: false,
    entities: ["entities/**/*.*"],
    host: process.env.DB_ENDPOINT,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
};
exports.default = defaultConnectionOptions;
//# sourceMappingURL=ormConfig.js.map