"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const teachers_1 = __importDefault(require("./routes/teachers"));
const app = (0, express_1.default)();
const PORT = 3001;
// Swagger configuration
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Test Swagger API',
            version: '1.0.0',
            description: 'Test API',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
                description: 'Dev server',
            },
        ],
    },
    apis: ['**/*.ts'], // Path to the API docs
};
const specs = (0, swagger_jsdoc_1.default)(options);
// Middleware for serving Swagger UI
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
// Middleware
app.use(body_parser_1.default.json());
// Routes
app.use('/api', teachers_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
exports.default = app;
