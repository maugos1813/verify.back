import { pool } from '../config/db.js'

export const createLink = async (lin) => {
  const { nombreEnlace, url } = lin

  const [result] = await pool.query(
    'INSERT INTO enlaces (nombre_del_enlace, url) VALUES (?, ?)',
    [nombreEnlace, url]
  )

  return { id: result.insertId, nombreEnlace, url }
}
