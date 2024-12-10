import mongoose from "mongoose";

const autoSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    año: {
        type: Number,
        required: true 
    },
    color: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true,
        min: [0, "El precio no puede ser negativo"],
    },
    disponibilidad: {
        type: String,
        enum: ["Disponible", "Ocupado"],
        default: "Disponible"
    }
}, {
    timestamps: true
});

export default mongoose.model('Auto', autoSchema);
