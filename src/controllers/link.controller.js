import { createLink } from '../models/links.js'

export const crearEnlace = async (req, res) => {
  try {
    const { nombreEnlace, url } = req.body

    if (!nombreEnlace || !url) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' })
    }

    const nuevoEnlace = await createLink({ nombreEnlace, url })
    res.status(201).json(nuevoEnlace)
  } catch (error) {
    console.error('Error al crear enlace:', error)
    res.status(500).json({ error: 'Error del servidor al crear el enlace' })
  }
}
