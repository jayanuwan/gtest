import db from '../config/db';
import { Teachers,Student} from '../models/Teacher';


export const registerStudent = async (teacher: string, student:string[]): Promise<Student> => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO students (email) VALUES (?)', [email], (err: any, result: any) => {
          if (err) return reject(err);
          const newStudent: Student = {
              id: result, email,
              suspend: false
          };
          resolve(newStudent);
        });
      });
};

export const getCommonStudent = async (student: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE id = ?', [student], (err: any, rows: string | any[]) => {
      if (err) return reject(err);
      if (rows.length === 0) return reject(new Error('User not found'));
      resolve(rows[0]);
    });
  });
};

