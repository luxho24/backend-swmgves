import mongoose from "mongoose";

const detalleEstudioSchema = mongoose.Schema({
    respuesta_1: {
        type: String,
    },
    respuesta_2: {
        type: String,
    },
    respuesta_3: {
        type: String,
    },
    respuesta_4: {
        type: String,
    },
    respuesta_5: {
        type: String,
    },
    respuesta_6: {
        type: String,
    },
    respuesta_7: {
        type: String,
    },
    respuesta_8: {
        type: String,
    },
    respuesta_9: {
        type: String,
    },
});

const DetalleEstudio = mongoose.model("DetalleEstudio", detalleEstudioSchema);
export default DetalleEstudio;
