import { createLink, deleteLink, getLiknByid, getLink, partialupdateLink, totalUpdateLink } from '../models/links.js'

export const crearEnlace = async (req, res) => {
  try {
    const { nombre_del_enlace, url } = req.body

    if (!nombre_del_enlace || !url) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' })
    }

    const nuevoEnlace = await createLink({ nombre_del_enlace, url })
    res.status(201).json(nuevoEnlace)
  } catch (error) {
    console.error('Error al crear enlace:', error)
    res.status(500).json({ error: 'Error del servidor al crear el enlace' })
  }
}

export const gettingLinks = async (req, res) => {
  try {
    const link = await getLink()
    res.json(link) 
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los dato'})
  }
}

export const gettingLinkById = async (req, res) => {
  try {
    const linkId = await getLiknByid(req.params.id)
    if (linkId) {
      res.json(linkId)
    } else {
      res.status(404).json({ message: 'Link no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al encontrar link', error })
  }
}

export const totalUpdattingLink = async (req, res) => {
  try {
    const { id } = req.params
    const updateLink = await totalUpdateLink(id, req.body)

    res.status(200).json({ message: 'Link actualizado correctamente', updateLink })
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar link', error })
  }
}

export const updattingPartialLink = async (req, res) => {
  try {
    const { id } = req.params
    const linkUpdates = req.body

    const updateLink = await partialupdateLink(id, linkUpdates)

    res.status(200).json({ message: 'Link actualizado correctamente', link: updateLink })
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar link', error: error.message })
  }
}

export const delettingLink = async (req, res) => {
  const { id } = req.params

  try {
    const response = await deleteLink(id)

    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar Link', error: error.message })
  }
}