import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    nombre: {
        type: String,
        //required: true,
    },
    rut: {
        type: String,
        //required: true,
    },
    estadoCivil: {
        type: String,
        //required: true,
    },
    fechaNacimiento: {
        type: String,
        //required: true,
    },
    edad: {
        type: String,
        //required: true,
    },
    celular: {
        type: String,
        //required: true,
    },
    correo: {
        type: String,
        //required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        //required: true
    }
},{
    timestamps: true
});

export default mongoose.model("Task", taskSchema);