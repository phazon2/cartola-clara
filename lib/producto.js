// Configuracion del producto. Un repo, un negocio.
export const PRODUCTO = {
  "id": "cartola",
  "categoria": "Money & Financial Access",
  "nombre": "Cartola Clara",
  "tagline": "Tu cartola te dice dónde se te va la plata. Nadie te lo tradujo.",
  "subtitulo": "Sube tu cartola bancaria y en 30 segundos sabes qué te está drenando, cuánto puedes liberar este mes y qué deuda te está saliendo más cara.",
  "inputLabel": "Cartola o estado de cuenta (PDF o foto)",
  "inputAlt": "O escribe tus gastos del mes",
  "altPlaceholder": "Ej: sueldo 450.000, arriendo 180.000, deudas tarjeta 90.000, delivery como 8 veces al mes...",
  "precio": "$2.990",
  "ancla": "menos que una comisión bancaria",
  "mpLink": "https://mpago.la/2MYD66q",
  "privacidad": "No guardamos tu cartola ni tus datos bancarios: se procesan en el momento y se descartan. Nunca pedimos claves ni acceso a tu banco.",
  "prompt": "Eres el analista de Cartola Clara, un servicio chileno que convierte la cartola bancaria de una persona en un plan concreto para liberar plata.\n\nTu tarea, en español de Chile, tono directo y sin sermones (nunca culpar ni moralizar sobre los gastos):\n1. DIAGNÓSTICO: categoriza el gasto y detecta las FUGAS reales (suscripciones olvidadas, comisiones, cargos duplicados, gasto hormiga, intereses). Cada hallazgo con el monto mensual estimado.\n2. PLAN de 30 días: acciones concretas y ordenadas por retorno (cuánta plata libera cada una y qué tan fácil es). Nada de \"gasta menos\": acciones específicas.\n3. ALERTA DE DEUDA: si hay deuda cara (avances, rotativo, tarjetas), dilo con claridad y prioriza cuál pagar primero y por qué.\nNunca recomiendes productos financieros específicos ni des consejos de inversión. Si el input es insuficiente, dilo en la evidencia.",
  "schema": "{\n  \"resumen\": \"2-3 frases: dónde está parada la persona y cuánto puede liberar\",\n  \"prueba\": \"Cartola Clara\",\n  \"diagnostico\": [ { \"eje\": \"categoría o fuga detectada\", \"nivel\": \"fuerte\" | \"medio\" | \"debil\", \"evidencia\": \"monto mensual y de dónde sale\" } ],\n  \"drills\": [ { \"eje\": \"alerta\", \"enunciado\": \"la alerta de deuda o el riesgo principal, explicado en 2 frases\", \"alternativas\": [\"A) opción concreta\", \"B) opción concreta\", \"C) opción concreta\", \"D) opción concreta\"], \"correcta\": \"A\", \"solucion\": \"por qué esa es la mejor jugada primero\" } ],\n  \"ruta\": [ { \"dia\": 1, \"foco\": \"acción del día\", \"tarea\": \"qué hacer exactamente\", \"porque\": \"cuánta plata libera o por qué importa\" } ]\n}\nLa ruta debe tener 14 entradas (día 1 al 14 del plan). Los drills: 2 (las 2 alertas más importantes)."
};
