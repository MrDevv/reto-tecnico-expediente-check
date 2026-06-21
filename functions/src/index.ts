import { setGlobalOptions } from "firebase-functions";
import { onRequest } from "firebase-functions/https";
import * as logger from "firebase-functions/logger";

setGlobalOptions({ maxInstances: 10 });

const MEF_BASE = "https://api.datosabiertos.mef.gob.pe/DatosAbiertos/v1/datastore_search";
const DEFAULT_RESOURCE_ID = "f9cc4ba0-931a-4b70-86c9-eacbd8c68596";

export const mefProxy = onRequest({ cors: true }, async (req, res) => {
  const resourceId = (req.query.resource_id as string) ?? DEFAULT_RESOURCE_ID;
  const limit = (req.query.limit as string) ?? "20";
  const q = req.query.q as string | undefined;

  const params = new URLSearchParams({ resource_id: resourceId, limit });
  if (q) params.set("q", q);

  const targetUrl = `${MEF_BASE}?${params.toString()}`;
  logger.info("Consultando API MEF", { targetUrl });

  try {
    const response = await fetch(targetUrl);

    if (!response.ok) {
      logger.error("Respuesta no OK desde MEF", { status: response.status });
      res.status(response.status).json({ error: "La API del MEF respondió con error" });
      return;
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    logger.error("Error al consultar MEF", { error: String(err) });
    res.status(502).json({ error: "No se pudo conectar con la API del MEF" });
  }
});