# Guía de actualización de Mesana

Cómo actualizar el programa sin mover archivos a mano y sin perder datos.

## Idea clave

- **El código** (la app) vive en esta carpeta y se controla con Git/GitHub.
- **Los datos** (ventas, productos, respaldos) viven aparte, en
  `%LOCALAPPDATA%\Mesana` (normalmente `C:\Users\TU_USUARIO\AppData\Local\Mesana`).
- Por eso, actualizar el código **nunca** toca tus datos.

La primera vez que corre la versión nueva, la base de datos vieja que estaba
dentro de la carpeta del programa se **mueve sola** a la carpeta de datos
(la original queda como `database.db.migrado` por seguridad).

---

## PC de desarrollo (donde haces cambios)

1. Haces tus cambios en el código.
2. Doble clic en **`Subir cambios.cmd`** → escribes una descripción → Enter.
   Eso sube los cambios a GitHub.

## PC de trabajo (donde se usa Mesana)

1. Doble clic en **`Actualizar Mesana.cmd`** → descarga la última versión.
2. Cierra y vuelve a abrir Mesana.

Tus datos quedan intactos siempre.

---

## Instalación por única vez en la PC de trabajo

Esto se hace UNA sola vez para conectar la carpeta instalada con GitHub:

1. **Respaldo de seguridad:** copia la `database.db` actual a una USB.
2. Instala **Git para Windows**: https://git-scm.com/download/win
   (Acepta todas las opciones por defecto durante la instalación.)
3. Copia los archivos `Conectar PC trabajo.cmd`, `Actualizar Mesana.cmd`
   y `GUIA-ACTUALIZACION.md` a la carpeta de Mesana de la PC de trabajo
   (vienen incluidos al conectar, pero para el primer enlace cópialos
   manualmente desde una USB o descárgalos del repo).
4. Doble clic en **`Conectar PC trabajo.cmd`** → escribe `SI`.
   La primera vez te pedirá iniciar sesión en GitHub; queda guardada.
5. Abre Mesana una vez (migra la base de datos a la carpeta de datos).

A partir de ahí, actualizar = doble clic en **`Actualizar Mesana.cmd`**.

> El repositorio es **privado**: al conectar y al actualizar, Git pedirá
> tu cuenta de GitHub la primera vez (queda guardada para las siguientes).

---

## Notas

- `node_modules` y `runtime` (Node.js) NO están en GitHub: vienen del
  instalador y no cambian en actualizaciones normales de código.
- Si una actualización agrega una dependencia nueva (raro), hay que
  reinstalar el programa completo esa vez.
- Respaldos automáticos: el programa guarda una copia de la base cada hora
  (últimas 30) en `%LOCALAPPDATA%\Mesana\backups`.
