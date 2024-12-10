import Auto from "../models/auto.model.js";

export const getAutos = async (req, res) => {
    try {
        const autos = await Auto.find()
        res.json(autos)
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener los autos" })
    }
}
export const agregarAuto = async (req, res) => {
    try {
        const { marca, modelo, año, color, placa, disponibilidad } = req.body;
        const newAuto = new Auto({
            marca,
            modelo,
            año,
            color,
            placa,
            disponibilidad,
        })
        const saveAuto = await newAuto.save()
        res.json(saveAuto)
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener los autos" })
    }
}

export const getAuto = async (req, res) => {
    try {
        const auto = await Auto.findById(req.params.id)
        if (!auto) return res.status(404).json({ mensaje: "Auto no encontrado" })
        res.json(auto)
    } catch (error) {
        return res.status(404).json({ message: "Auto no encontrado" })
    }
};

export const deleteAuto = async (req, res) => {
    try {
        const auto = await Auto.findByIdAndDelete(req.params.id)
        if (!auto) return res.status(404).json({ mensaje: "Auto no encontrado" })
        return res.sendStatus(204)
    } catch (error) {
        return res.status(404).json({ message: "Auto no encontrado" })
    }
}

export const updateAuto = async (req, res) => {
    try {
        const auto = await Auto.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        if (!auto) return res.status(404).json({ mensaje: "Auto no encontrado" })
        res.json(auto)
    } catch (error) {
        return res.status(404).json({ message: "Auto no encontrado" })
    }
}