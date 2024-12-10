import { z } from 'zod';

// Esquema de validación con Zod
const validateAutoSchema = z.object({
  marca: z.string().min(1, 'La marca es requerida'),
  modelo: z.string().min(1, 'El modelo es requerido'),
  año: z
    .number()
    .int()
    .min(1900, 'El año debe ser mayor o igual a 1900')
    .max(new Date().getFullYear(), 'El año no puede ser en el futuro'),
  color: z.string().min(1, 'El color es requerido'),
  placa: z
    .string()
    .min(1, 'La placa es requerida')
    .max(6, 'La placa no puede tener más de 6 caracteres'),
  precio: z.number().positive().max(9999999.99, "El precio no puede ser mayor a 9,999,999.99")
    .refine(value => /^[0-9]+(\.[0-9]{1,2})?$/.test(value), {
      message: "El precio debe ser un número con hasta dos decimales"
    }),
  disponibilidad: z.enum(["Disponible", "Ocupado"]).optional().default("Disponible")
});

export default validateAutoSchema;
