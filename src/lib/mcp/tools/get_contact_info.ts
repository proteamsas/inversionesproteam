import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Obtener información de contacto",
  description: "Devuelve el teléfono, WhatsApp, sitio web y ubicación de PROTEAM.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            empresa: "PROTEAM SAS",
            telefono: "+57 310 764 3793",
            whatsapp: "https://wa.me/573107643793",
            sitio_web: "https://proteamsas.com",
            pais: "Colombia",
            actividad:
              "Distribuidor mayorista B2B de proteína animal (cerdo importado, pollo, vísceras de res, pescado).",
          },
          null,
          2,
        ),
      },
    ],
  }),
});