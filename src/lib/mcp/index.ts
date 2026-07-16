import { defineMcp } from "@lovable.dev/mcp-js";
import getContactInfo from "./tools/get_contact_info";
import listProducts from "./tools/list_products";
import listCoverage from "./tools/list_coverage";
import whatsappLeadLink from "./tools/whatsapp_lead_link";

export default defineMcp({
  name: "proteam-mcp",
  title: "PROTEAM MCP",
  version: "0.1.0",
  instructions:
    "Herramientas públicas de PROTEAM SAS (distribuidor B2B de proteína animal en Colombia). " +
    "Usa `list_products` para el catálogo, `list_coverage` para rutas/municipios, " +
    "`get_contact_info` para datos de contacto y `whatsapp_lead_link` para generar un enlace de WhatsApp con mensaje pre-llenado.",
  tools: [getContactInfo, listProducts, listCoverage, whatsappLeadLink],
});