"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommonStudent = exports.registerStudent = void 0;
const db_1 = __importDefault(require("../config/db"));
const registerStudent = (teacher, student) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield db_1.default.getConnection();
    try {
        db_1.default.getConnection((err, connection) => {
            connection.query("SELECT * FROM sometable", (error, results, fields) => {
                // When done with the connection, release it.
                connection.release();
                // Handle error after the release.
                if (error)
                    throw error;
                // Don't use the connection here, it has been returned to the pool.
            });
        });
        console.log("record added succesfully");
    }
    catch (error) {
        throw new Error(`Error querying students: ${error}`);
    }
    finally {
        connection.release();
    }
});
exports.registerStudent = registerStudent;
const getCommonStudent = (student) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        db_1.default.query("SELECT * FROM users WHERE id = ?", [student], (err, rows) => {
            if (err)
                return reject(err);
            if (rows.length === 0)
                return reject(new Error("User not found"));
            resolve(rows[0]);
        });
    });
});
exports.getCommonStudent = getCommonStudent;
