import { z } from "zod";

export const signInFormSchema = z.object({
  email: z
    .string()
    .min(1, "Digite um email válido.")
    .max(256, "Digite um email válido.")
    .email("Digite um email válido."),
  password: z.string().min(8),
});

export type SignInFormType = z.infer<typeof signInFormSchema>;
