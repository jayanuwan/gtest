"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonStudent = exports.getNotification = exports.suspendStudent = exports.registerStudent = void 0;
const teacherService = __importStar(require("../services/teacherService"));
/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *                - teacher
 *                - students
 *             properties:
 *                teacher:
 *                  type: string
 *                  format: email
 *                  example: teacherken@gmail.com
 *                students:
 *                  type: array
 *                  items:
 *                    type: string
 *                    format: email
 *     responses:
 *       200:
 *         description: Successfully registered student
 *       500:
 *         description: Internal Server Error
 */
const registerStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    console.log("here", req.body);
    try {
        const newStudent = yield teacherService.registerStudent(email);
        console.log(newStudent);
        res.status(201).json(newStudent);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.registerStudent = registerStudent;
/**
 * @swagger
 * /api/suspend:
 *   post:
 *     summary: Student suspend
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *                - students
 *             properties:
 *                students:
 *                  type: string
 *                  items:
 *                    student: string
 *                    format: email
 *     responses:
 *       200:
 *         description: Successfully suspended
 *       500:
 *         description: Internal Server Error
 */
const suspendStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const newStudent = yield teacherService.registerStudent(email);
        console.log(newStudent);
        res.status(201).json(newStudent);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.suspendStudent = suspendStudent;
/**
 * @swagger
 * /api/retrievefornotifications:
 *   post:
 *     summary: retrieve a list of students who can receive a given notification
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *                - teacher
 *                - notification
 *             properties:
 *                teacher:
 *                  type: string
 *                  items:
 *                    teacher: string
 *                    format: email
 *                notification:
 *                  type: string
 *                  item:
 *                    notification:string
 *     responses:
 *       200:
 *         description: Successfully registered student
 *       500:
 *         description: Internal Server Error
 */
const getNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const newStudent = yield teacherService.registerStudent(email);
        console.log(newStudent);
        res.status(201).json(newStudent);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getNotification = getNotification;
/**
 * @swagger
 * /api/commonstudents?{teacherEmail}:
 *   get:
 *     summary: get common student
 *     tags: [Students]
 *     parameters:
 *      -  in: path
 *         name: teacherEmail
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully registered student
 *         content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                students:
 *                  type: array
 *                  items:
 *                    type: string
 *                  example:
 *                    - commonstudent1@gmail.com
 *                    - commonstudent2@gmail.com
 *                    - student_only_under_teacher_ken@gmail.com
 *       500:
 *         description: Internal Server Error
 */
const commonStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { student } = req.body;
    try {
        const newStudent = yield teacherService.getCommonStudent(student);
        console.log(newStudent);
        res.status(201).json(newStudent);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.commonStudent = commonStudent;
