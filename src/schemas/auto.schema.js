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
  disponibilidad: z.enum(['Disponible', 'Ocupado'], {
    errorMap: () => {
      return { message: 'La disponibilidad debe ser "Disponible" u "Ocupado"' };
    },
  }), // Validación de disponibilidad
});

export default validateAutoSchema;
