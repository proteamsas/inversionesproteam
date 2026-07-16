import { defineTool } from "@lovable.dev/mcp-js";

const ROUTES = [
  { id: "uraba", name: "Urabá Antioqueño", municipalities: ["Apartadó", "Necoclí", "Turbo", "Carepa", "Chigorodó"] },
  { id: "costera", name: "Zona Costera", municipalities: ["Arboletes", "Puerto Escondido", "Los Córdobas", "San Juan de Urabá", "Canalete"] },
  { id: "bajo-cauca", name: "Bajo Cauca y Sabanas", municipalities: ["Caucasia", "Planeta Rica", "Montelíbano", "La Apartada", "Buenavista"] },
  { id: "sabanas", name: "Sabanas de Sucre", municipalities: ["Sincelejo", "Sahagún", "Corozal", "Chinú", "Sampués", "San Marcos", "Guaranda"] },
  { id: "montes-maria", name: "Montes de María", municipalities: ["Ovejas", "El Carmen de Bolívar", "San Juan Nepomuceno", "San Jacinto"] },
  { id: "golfo", name: "El Golfo", municipalities: ["Lorica", "San Antero", "Coveñas", "Tolú", "Toluviejo", "San Onofre"] },
];

export default defineTool({
  name: "list_coverage",
  title: "Listar cobertura",
  description:
    "Devuelve las rutas de entrega y municipios cubiertos por PROTEAM en Córdoba, Sucre, Antioquia y Bolívar.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(ROUTES, null, 2) }],
  }),
});