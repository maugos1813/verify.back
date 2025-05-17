import { pool } from '../config/db.js'

export const createLink = async (lin) => {
  const { nombre_del_enlace, url } = lin

  const [result] = await pool.query(
    'INSERT INTO enlaces (nombre_del_enlace, url) VALUES (?, ?)',
    [nombre_del_enlace, url]
  )

  return { id: result.insertId, nombre_del_enlace, url }
}

export const getLink = async () => {
    const [link] = await pool.query('SELECT * FROM enlaces') 
    return link
}

export const getLiknByid = async (id) => {
  const [link] = await pool.query('SELECT * FROM enlaces WHERE id = ?', [id])
  return link[0]
}

export const totalUpdateLink = async (id, link) => {
  const {nombre_del_enlace, url} = link
  await pool.query(
    'UPDATE enlaces SET nombre_del_enlace = ?, url = ? WHERE id = ?', 
    [nombre_del_enlace, url, id]
  )

  return {id, ...link}
}

export const partialupdateLink = async (id, linkUpdates) => {
  const fields = []
  const values = []

  if (linkUpdates.nombre_del_enlace) {
    fields.push('nombre_del_enlace = ?')
    values.push(linkUpdates.nombre_del_enlace)
  }
  if (linkUpdates.url) {
    fields.push('url = ?')
    values.push(linkUpdates.url)
  }

  if (fields.length === 0) {
    throw new Error('No se proporcionaron datos para actualizar')
  }

  const query = `UPDATE enlaces SET ${fields.join(', ')} WHERE id = ?`
  values.push(id)

  await pool.query(query, values)

  return {id, ...linkUpdates}
}

export const deleteLink = async (id) => {
  const query = 'DELETE FROM enlaces WHERE id = ?'
  const [result] = await pool.query(query, [id])

  if (result.affectedRows === 0) {
    throw new Error('No se encontro un link con ese id')
  }

  return { message: 'link eliminado exitosamente'}
}