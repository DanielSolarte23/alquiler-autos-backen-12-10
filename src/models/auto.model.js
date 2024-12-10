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
    color:{
        type:String,
        required:true
    },
    placa:{
        type:String,
        required:true
    },
    disponibilidad: {
        type: String, 
        enum: ["Disponible", "Ocupado"],
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Auto', autoSchema);
