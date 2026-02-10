import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/procesar.js";

test("procesar convierte el nombre a mayúsculas", () => {
  const req = { query: { nombre: "juan" } };

  // Simulamos el objeto response
  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  // Verificamos el código de estado
  assert.equal(res.statusCode, 200);

  // CORRECCIÓN:
  // En lugar de comparar el objeto entero (que falla por el timestamp),
  // verificamos solo la propiedad que nos interesa: 'resultado'.
  assert.equal(res.body.resultado, "Nombre procesado: JUAN");
  
  // Opcional: Verificar que 'ok' sea true
  assert.equal(res.body.ok, true);
});
