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

## Versión 3.1.4 — qué cambia

Instalador: `dist-installer\Mesana 3.0 Setup 3.1.4.exe`.

**Arreglo: las fotos de productos ya no se borran solas**

- Las fotos pesadas (la mayoría de las tomadas con celular) se rechazaban al
  guardarse y el programa no avisaba: se veían bien en pantalla hasta cerrar la
  app y al día siguiente aparecían sin imagen. Ahora todas se guardan.
- Cada foto se comprime automáticamente antes de guardarse, así que ninguna
  queda fuera por pesada, y si algo falla el programa ahora sí avisa.
- Las fotos en PNG con fondo transparente ya no salen con el fondo negro.
- Editar o cancelar una comanda ya no borra la foto, el precio, el costo, la
  categoría ni las variantes de los productos de esa comanda.
- El logo del negocio (Ajustes) se guardaba igual de mal; también quedó arreglado.

**La mesa ya no se pide antes de capturar**

- Vuelve el flujo de antes: **eliges el producto y entra al ticket de inmediato**.
  El tipo de orden (Comedor o Llevar) y la mesa se eligen después, cuando quieras,
  en el encabezado del ticket.
- Ya no salta la ventana de "Primero elige Comedor o Llevar" a media captura, que
  era lo que hacía lento tomar el pedido.
- La mesa sigue siendo obligatoria, pero **se pide hasta enviar la comanda a cocina**:
  si le das enviar sin haberla elegido, ahí te la pregunta y luego manda el pedido.

**Nuevo: cantidad por variante (se acabó el de uno en uno)**

- Al agregar un producto con variantes, ahora se pone **la cantidad de cada
  variante en una sola pasada**: 2 de asado y 5 de prensado se piden de un jalón,
  sin abrir la ventana siete veces.
- Cada variante tiene su propio **− cantidad +**. Abajo se ve el resumen
  ("2× Asado · 5× Prensado — 7 unidades · $715.00") y el botón dice cuántos vas
  a agregar. En el ticket se agrupan solos: una línea por variante.
- Si solo quieres uno, el flujo es igual de rápido que antes.
- En productos con **varios grupos** de variantes (ej. guisado + extras), se arma
  cada combinación, se le pone cantidad y con **"+ Agregar otra variante"** se
  aparta para armar la siguiente. Todas se agregan juntas al ticket.

**Nuevo: los combos también aceptan foto**

- En AGREGAR/EDITAR COMBO hay un campo "Imagen del combo", igual que en productos.
- La foto se muestra grande en la tarjeta del combo dentro del punto de venta.
  Si el combo no tiene foto, se sigue viendo su ícono.

> Nota: las fotos que ya se habían perdido no se pueden recuperar (nunca llegaron
> a guardarse). Hay que volver a ponerlas una vez instalada esta versión.

---

## Versión 3.1.0 — qué cambia

Instalador: `dist-installer\Mesana 3.0 Setup 3.1.0.exe`.
Se instala encima de la 3.0.0 sin tocar la base de datos.

**Pantalla de Inicio (punto de venta)**

- **Pestañas de tickets** arriba del ticket (estilo Eleventa): se atienden varios
  pedidos a la vez y se salta entre ellos con un clic. **Doble clic** en una pestaña
  para renombrarla (ej. "Dr. Borunda"); la **×** la cierra. Se acabaron los botones
  "Pausar / Pausados".
- Los tickets abiertos **se guardan solos** y sobreviven a cerrar la app.
- **Orden estricto:** primero se elige Comedor (y mesa) o Llevar, y después se agregan
  productos. Una vez configurado el ticket, la mesa ya no se puede cambiar por accidente
  (el botón ✎ del encabezado sirve para corregirla a propósito).
- Ticket más alto, notas plegadas, aviso "▼ hay más productos" cuando la lista sigue
  hacia abajo, y confirmación antes de "Limpiar".
- Las tarjetas de producto **ya no se recortan** cuando hay muchos productos
  (probado con 140). Se quitó la línea de "Stock" del menú; la señal roja "Sin stock"
  se mantiene.

**Combos**

- Si un combo lleva varias piezas del mismo producto con variantes (ej. 3 montados),
  ahora **se configura pieza por pieza**: "Unidad 1 de 3", "Unidad 2 de 3"…
  Botón **"Aplicar la 1ª a todas"** cuando todas van iguales.
- Las piezas iguales se agrupan en la comanda ("2x Montado (Asado)", "1x Montado (Verde)"),
  y eso se refleja en cocina, en el inventario y en el reporte de variantes.

**Reportes de ventas (nuevo, menú FINANZAS → Reportes)**

- Periodos: **Semana actual, Mes actual, Mes anterior, Año actual y Periodo…**
  (rango de fechas a elegir).
- Gráfica de barras con **ventas y ganancia**, y tarjetas de ventas totales, venta
  promedio, ganancia y margen de utilidad.
- Tablas de **ventas por día/mes**, **ventas por categoría** (con %),
  **productos más vendidos** y **ventas por forma de pago**.
- Botón **Exportar CSV** (se abre en Excel).

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
