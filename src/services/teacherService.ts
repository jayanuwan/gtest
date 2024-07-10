import db from '../config/db';
import { Teachers,Student} from '../models/Teacher';


export const registerStudent = async (teacher: string, student?:string[]) => {

  const connection = await db.getConnection();
  try {
    const query = `SELECT * FROM students WHERE email =${teacher}`
    db.execute(query);
    console.log('record added succesfully')
  } catch (error) {
    throw new Error(`Error querying students: ${error}`);
  } finally {
    connection.release();
  }
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

