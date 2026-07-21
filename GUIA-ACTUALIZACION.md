# Guía de Mesana 3.0 — Instalador y actualizaciones

Desde la versión **3.0**, Mesana es una **aplicación de escritorio** de verdad:
se instala con un instalador `.exe` (como cualquier programa) y se abre en su
propia ventana. Ya **no** usa la ventana negra (cmd) ni el navegador.

## Idea clave (lo que nunca cambia)

- **El programa** se instala con el instalador. Al actualizar, se reinstala encima.
- **Los datos** (ventas, productos, respaldos) viven aparte, en
  `%LOCALAPPDATA%\Mesana` (normalmente `C:\Users\TU_USUARIO\AppData\Local\Mesana`).
- Por eso, **actualizar el programa nunca toca tus datos**. La versión 3.0 usa la
  misma carpeta de datos que la 2.0, así que al pasar de 2.0 a 3.0 **no se pierde nada**.

---

## PC de desarrollo (donde haces cambios y creas el instalador)

1. Haces tus cambios en el código.
2. Doble clic en **`Crear instalador.cmd`** (o en una terminal: `npm run dist`).
   - Genera el instalador en la carpeta **`dist-installer`**:
     `Mesana 3.0 Setup 3.0.0.exe`.
3. (Opcional, respaldo del código) Doble clic en **`Subir cambios.cmd`** para subir
   el código a GitHub.

> Para subir la versión (3.0.0 → 3.0.1, etc.) cambia `"version"` en `package.json`
> antes de crear el instalador. El nombre del `.exe` cambia solo con la versión.

## PC de trabajo (donde se usa Mesana)

**Actualizar a una versión nueva:**

1. Copia el archivo `Mesana 3.0 Setup X.X.X.exe` a la PC de trabajo (USB o descarga).
2. Doble clic en el instalador → **Siguiente / Instalar**.
3. Listo. Se abre sola y tus datos siguen intactos.

El acceso directo **"Mesana 3.0"** queda en el Escritorio y en el menú Inicio.

---

## Instalación por primera vez en la PC de trabajo (viniendo de la 2.0)

1. **Respaldo de seguridad:** copia tu `database.db` actual a una USB
   (está en `%LOCALAPPDATA%\Mesana\database.db`).
2. Ejecuta `Mesana 3.0 Setup 3.0.0.exe` → **Siguiente / Instalar**.
3. Abre Mesana desde el nuevo acceso directo. Reutiliza automáticamente tu base de
   datos de `%LOCALAPPDATA%\Mesana` (la misma que usaba la 2.0).
4. Cuando confirmes que todo está bien, puedes **desinstalar la versión 2.0** vieja
   (Panel de control → Programas, o su desinstalador). Los datos no se tocan.

> **Aviso de Windows SmartScreen:** como el instalador no está firmado con un
> certificado de pago, Windows puede mostrar *"Windows protegió tu PC"*.
> Es normal: clic en **Más información → Ejecutar de todas formas**.

---

## Notas

- **Respaldos automáticos:** el programa guarda una copia de la base cada hora
  (últimas 30) en `%LOCALAPPDATA%\Mesana\backups`. También puedes restaurar un
  respaldo desde la app; al restaurar, Mesana se reinicia sola.
- **Dónde se instala:** por usuario, en
  `%LOCALAPPDATA%\Programs\Mesana 3.0` (no pide permisos de administrador).
- **Desinstalar:** desde *Agregar o quitar programas* de Windows. Desinstalar el
  programa **no borra** tus datos (viven en `%LOCALAPPDATA%\Mesana`).
