import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const CATEGORIES = {
  cerdo: {
    title: "Cerdo Importado",
    accent: "Importado · Premium",
    items: [
      "Sirloin",
      "Punta chuleta (entera y picada)",
      "Lomo (Cañón)",
      "Paticas (Codillos)",
      "Pierna con Hueso",
    ],
  },
  pollo: {
    title: "Pollo",
    accent: "Fresco · Congelado",
    items: [
      "Colombinas de pollo",
      "Filete de pechuga",
      "Mollejas de pollo",
      "Pechuga Nacional",
      "Pernil",
    ],
  },
  visceras: {
    title: "Vísceras de Res",
    accent: "Calidad garantizada",
    items: [
      "Bofe de res",
      "Hígado de res",
      "Mondongo",
      "Lengua",
      "Patas de Res",
      "Corazón",
    ],
  },
  pescado: {
    title: "Pescados y Otros",
    accent: "Mar · Río",
    items: ["Bocachico", "Basa Entera", "Basa Picada", "Papas a la Francesa 2.5 Kg"],
  },
} as const;

export default defineTool({
  name: "list_products",
  title: "Listar productos",
  description:
    "Lista las categorías y productos que PROTEAM distribuye. Opcionalmente filtra por categoría (cerdo, pollo, visceras, pescado).",
  inputSchema: {
    category: z
      .enum(["cerdo", "pollo", "visceras", "pescado"])
      .optional()
      .describe("Categoría opcional para filtrar el listado."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const data = category
      ? { [category]: CATEGORIES[category] }
      : CATEGORIES;
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
    };
  },
});