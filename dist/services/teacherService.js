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
const registerStudent = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        db_1.default.query('INSERT INTO student (username, email) VALUES (?)', [email], (err, result) => {
            if (err)
                return reject(err);
            const newStudent = {
                id: result, email,
                suspend: false
            };
            resolve(newStudent);
        });
    });
});
exports.registerStudent = registerStudent;
const getCommonStudent = (student) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        db_1.default.query('SELECT * FROM users WHERE id = ?', [student], (err, rows) => {
            if (err)
                return reject(err);
            if (rows.length === 0)
                return reject(new Error('User not found'));
            resolve(rows[0]);
        });
    });
});
exports.getCommonStudent = getCommonStudent;
