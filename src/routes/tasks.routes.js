import {Router} from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getTasks,getTask,createTask,updateTask,deleteTask, } from '../controllers/tasks.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createTaskSchema } from '../schemas/task.schema.js'

const router=Router()
/* router.get('/tasks', authRequired, (req,res)=>res.send('tasks')) */
router.get('/tasks', authRequired, getTasks);
router.get('/tasks/:id', authRequired, getTask);


router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask);
/* router.post('/tasks' , async function(req,res,next){
    const task=new Task({
        nombre: req.body.nombre,
        rut: req.body.rut,
        estadoCivil: req.body.estadoCivil,
        fechaNacimiento: req.body.fechaNacimiento,
        edad: req.body.edad,
        celular: req.body.celular,
        correo: req.body.correo,
    });
    await task.save();
    res.send(task);
}); */


router.delete('/tasks/:id', authRequired, deleteTask);
router.put('/tasks/:id', authRequired, updateTask);

export default router;