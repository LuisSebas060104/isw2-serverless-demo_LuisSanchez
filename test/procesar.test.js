import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/procesar.js";

test("procesar convierte el nombre a mayúsculas", () => {
  const req = { query: { nombre: "juan" } };

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

  assert.equal(res.statusCode, 200);
  // Validamos solo el campo 'resultado' para evitar errores por timestamp
  assert.equal(res.body.resultado, "Nombre procesado: JUAN");
  assert.equal(res.body.ok, true);
});

test("procesar maneja nombre ausente", () => {
  const req = { query: {} };

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

  assert.equal(res.statusCode, 200);
  assert.ok(res.body.resultado.includes("ANÓNIMO"));
});


test('Debe retornar saludo mayúsculas y longitud (Reto 2)', () => {
  const req = { query: { nombre: 'Juan' } };
  
  // Mismo mock de response de siempre
  const res = {
    statusCode: null,
    body: null,
    status(code) { this.statusCode = code; return this; },
    json(payload) { this.body = payload; return this; }
  };

  handler(req, res);

  assert.equal(res.statusCode, 200);
  
  // Validamos los datos específicos (es más seguro que deepEqual)
  assert.equal(res.body.resultado, "Nombre procesado: JUAN");
  assert.equal(res.body.longitud, 4); // "Juan" tiene 4 letras
});

