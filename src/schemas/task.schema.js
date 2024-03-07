/* import {z} from "zod";
export const createTaskSchema=z.object({
    title: z.string({
        required_error: "Title is required",
    }), description: z.string({
        required_error: "Description must be a string",
    }),date: z.string().datetime().optional(),
}) */

import { z } from "zod";

/* export const createTaskSchema = z.object({
  nombre: z.string({
    //required_error: "El nombre es obligatorio",
  }),
  rut: z.string({
    //required_error: "El RUT es obligatorio",
  }),
  estadoCivil: z.string({
    //required_error: "El estado civil es obligatorio",
  }),
  fechaNacimiento: z.string().optional(),
  edad: z.number().int().positive().optional(),
  celular: z.string({
    //required_error: "El número de celular es obligatorio",
  }),
  correo: z.string({
    //required_error: "El correo debe ser una cadena válida",
  }),
}); */

export const createTaskSchema=z.object({
  nombre: z.string().optional(),
  rut: z.string().optional(),
  estadoCivil: z.string().optional(),
  fechaNacimiento: z.string().optional(),
  edad: z.string().optional(),
  celular: z.string().optional(),
  correo: z.string().optional(),
});
