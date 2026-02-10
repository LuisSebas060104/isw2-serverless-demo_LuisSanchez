1. ¿Qué tipo de error evita el CI?
La Integración Continua evita principalmente los errores de regresión, garantizando que el código nuevo no rompa funcionalidades que ya existían. También previene errores de integración y configuración al probar el software en un entorno neutral, detectando fallos que no ocurren en la máquina local del desarrollador debido a dependencias o configuraciones específicas.

2. ¿Qué tipo de error no evita?
El CI no detecta errores de lógica si no existen pruebas específicas para ellos, ni puede identificar problemas de diseño o arquitectura del software. Tampoco evita problemas de usabilidad, experiencia de usuario o malentendidos en los requisitos del cliente, ya que las pruebas automatizadas validan el código pero no la utilidad o facilidad de uso del producto.

3. ¿Qué pasaría si un equipo ignora el CI?
Ignorar el CI provoca la acumulación de deuda técnica, ya que los errores se detectan mucho después de ser introducidos, haciendo su corrección más costosa y difícil. Esto genera desconfianza en la estabilidad del proyecto, convierte los despliegues en procesos estresantes propensos a fallos y aumenta significativamente el riesgo de liberar software defectuoso a los usuarios finales.
