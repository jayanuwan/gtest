import { Request, Response } from "express";
import { Teachers, Student } from "../models/Teacher";
import * as teacherService from "../services/teacherService";

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new student
 *     tags: [Teachers]
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
export const registerStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { teacher,student } = req.body;
  
  try {
    const newStudent: Student = await teacherService.registerStudent(teacher,student);
    
    res.status(201).json(newStudent);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/suspend:
 *   post:
 *     summary: Student suspend
 *     tags: [Teachers]
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
export const suspendStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { email } = req.body;
  try {
    const newStudent: Student = await teacherService.registerStudent(email);
    console.log(newStudent);
    res.status(201).json(newStudent);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/retrievefornotifications:
 *   post:
 *     summary: retrieve a list of students who can receive a given notification
 *     tags: [Teachers]
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
export const getNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { email } = req.body;
  try {
    const newStudent: Student = await teacherService.registerStudent(email);
    console.log(newStudent);
    res.status(201).json(newStudent);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/commonstudents?{teacherEmail}:
 *   get:
 *     summary: get common student
 *     tags: [Teachers]
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
export const commonStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { student } = req.body;
  try {
    const newStudent: Student = await teacherService.getCommonStudent(student);
    console.log(newStudent);
    res.status(201).json(newStudent);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
