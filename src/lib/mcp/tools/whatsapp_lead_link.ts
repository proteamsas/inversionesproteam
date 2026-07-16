import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "whatsapp_lead_link",
  title: "Generar enlace de WhatsApp para cotizar",
  description:
    "Genera un enlace de WhatsApp (wa.me) hacia PROTEAM con un mensaje pre-llenado para solicitar cotización o información de un negocio.",
  inputSchema: {
    nombre_negocio: z.string().optional().describe("Nombre del negocio del cliente."),
    ciudad: z.string().optional().describe("Ciudad del cliente."),
    productos: z.string().optional().describe("Productos o proteínas de interés."),
    volumen: z.string().optional().describe("Volumen estimado (kg/semana o similar)."),
    mensaje_extra: z.string().optional().describe("Notas adicionales al final del mensaje."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: ({ nombre_negocio, ciudad, productos, volumen, mensaje_extra }) => {
    const lines = [
      "Hola PROTEAM, quiero recibir información para mi negocio.",
      "",
      `Ciudad: ${ciudad ?? ""}`,
      `Tipo de proteína que necesito: ${productos ?? ""}`,
      `Volumen estimado: ${volumen ?? ""}`,
      `Nombre del negocio: ${nombre_negocio ?? ""}`,
    ];
    if (mensaje_extra) lines.push("", mensaje_extra);
    const url = `https://wa.me/573107643793?text=${encodeURIComponent(lines.join("\n"))}`;
    return {
      content: [{ type: "text", text: url }],
      structuredContent: { url },
    };
  },
});