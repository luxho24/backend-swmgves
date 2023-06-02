import Gerente from "../models/GerenteModel.js";

const obtenerGerentes = async (req, res) => {
    try {
        res.status(200).json("obtenerGerentes");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const obtenerGerente = async (req, res) => {
    try {
        res.status(200).json("obtenerGerente");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const agregarGerente = async (req, res) => {
    try {
        res.status(200).json("agregarGerente");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const actualizarGerente = async (req, res) => {
    try {
        res.status(200).json("actualizarGerente");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const eliminarGerente = async (req, res) => {
    try {
        res.status(200).json("eliminarGerente");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export {
    obtenerGerentes,
    obtenerGerente,
    agregarGerente,
    actualizarGerente,
    eliminarGerente,
};
