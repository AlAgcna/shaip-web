---
name: shaip-contact-page
description: Crea la página web estática de contacto de Shaip, empresa de domótica (casas y espacios inteligentes), en 3 archivos (HTML, CSS y JS) con un estilo oscuro, moderno y de tipografía grande. Usa esta skill siempre que el usuario pida una página de contacto, landing, sitio web, "web de Shaip", formulario de contacto, página de presentación o cualquier página para Shaip, aunque no diga "estática" ni mencione la palabra "skill". También úsala para modificar, traducir o actualizar una página de Shaip ya creada (cambiar teléfono, horarios, colores, servicios, textos).
---

# Página de contacto de Shaip

Shaip es una empresa de domótica. Esta skill produce una página web **estática** (sin backend ni frameworks) cuyo objetivo es uno: que un visitante interesado contacte a Shaip en menos de 30 segundos.

## Archivos: máximo 3

Entrega exactamente estos archivos, nunca más:

- `index.html`: estructura y contenido.
- `styles.css`: todo el estilo, con variables de color en `:root`.
- `script.js`: interacciones (animaciones al hacer scroll, barra de navegación, formulario).


Limitar a 3 archivos significa que no hay carpeta de imágenes pero tenemos imagenes subidas en la carpeta raiz. Por eso: iconos y logo en **SVG incluido dentro del HTML**, y efectos visuales con CSS (degradados, brillos). Si el usuario aporta un logo o fotos reales, pregúntale si prefiere incrustarlos (SVG o base64) para mantener los 3 archivos, o si acepta una carpeta extra.

## Antes de escribir código: reunir los datos

Una página de contacto con datos inventados es peor que no tener página: un teléfono falso o un correo equivocado hace perder clientes reales. Nunca inventes datos de contacto ni afirmaciones sobre la empresa.

Revisa qué datos ya dio el usuario y pide los que falten, **en un solo mensaje corto**:

| Dato | Obligatorio | Notas |
|---|---|---|
| Correo de contacto | Sí | Aparece en la página y recibe el formulario |
| Teléfono y/o WhatsApp | Al menos uno | Con código de país, para el enlace `wa.me` |
| Ciudad / zona de servicio | Sí | Puede ser dirección completa o solo "zona de cobertura" |
| Horario de atención | Recomendado | |
| Instagram (@usuario) y otras redes | Opcional | |
| Logo y colores de marca | Opcional | Si no hay, usa la paleta por defecto |
| Servicios que ofrece | Recomendado | Si no los dicen, propón los típicos de domótica y avisa que son una propuesta a confirmar |

Si el usuario quiere ver algo ya, genera la página con marcadores visibles como `[TELÉFONO]` en vez de inventar, y dile qué falta reemplazar.

## Estructura de la página

1. **Navegación fija**: marca a la izquierda, 2 enlaces de ancla y botón "Contacto" siempre visible. En móvil solo marca + botón.
2. **Hero**: pantalla completa, titular corto con **una sola palabra en `<em>`** (cursiva y color de acento), subtítulo de una frase y dos botones (principal: contactar; secundario: ver servicios).
3. **Cinta en movimiento** (marquee) con palabras de servicios. Nunca logos de clientes ni "marcas que confían en nosotros" si el usuario no las proporcionó.
4. **Servicios**: lista grande y espaciada, numerada (01, 02…), 4 a 6 elementos, cada uno con título y una frase de beneficio.
5. **Cómo trabajamos**: 3 pasos cortos (por ejemplo: escuchamos, diseñamos, instalamos). Confírmalo con el usuario; si no hay información fiable, omite la sección.
6. **Contacto** con titular grande ("Empieza tu proyecto *hoy*"), formulario y datos directos.
7. **Pie** con año, nombre y redes.

Cada sección se activa con un solo llamado a la acción: contactar.

## Estilo visual

Referencia del usuario: la estética de majestyk.com. Lo que se toma de ella es el **lenguaje visual**, no su contenido, textos ni marca:

- Fondo oscuro casi negro, texto claro y un único color de acento vivo.
- Titulares muy grandes y en negrita, con **una palabra destacada en cursiva y color de acento** (el sello del estilo). Máximo una por titular.
- Mucho espacio en blanco, secciones amplias y pocos elementos por pantalla.
- Cinta de texto en movimiento entre hero y servicios.
- Servicios como lista grande y numerada con líneas divisorias, en lugar de tarjetas pequeñas.
- Aparición suave de los bloques al hacer scroll.
- Cierre con un llamado a la acción enorme, antes del pie.
- Navegación mínima y botón de contacto destacado.

El acento por defecto es turquesa (`#3be8c4`), distinto a propósito del magenta de esa web para que Shaip tenga identidad propia. Si el usuario tiene colores de marca o prefiere otro acento, cámbialo en `:root` de `styles.css` y nada más.

Si el usuario cita otra página como referencia de estilo, usa `web_fetch` para analizar su estructura y copy, y traduce lo que encuentres a estas mismas reglas. Nunca copies textos, imágenes, logos ni código de la web de referencia.

## Reglas de contenido

- Español neutro y cercano, trato de "tú" salvo que el usuario pida formal.
- No inventes testimonios, cifras ("+500 proyectos"), certificaciones, marcas aliadas ni precios. Todo eso debe venir del usuario.
- Titulares cortos y beneficios concretos ("controla la luz de tu casa desde el móvil") antes que tecnicismos (Zigbee, KNX), salvo que el público sea profesional.

## Reglas técnicas

- **Sin dependencias** salvo Google Fonts (Inter) con fuente de sistema de respaldo. Nada de frameworks, librerías de animación ni CDNs de scripts.
- **Formulario en una página estática**: no hay servidor, así que ofrece siempre dos vías que funcionen sin backend:
  - Botón de WhatsApp: `https://wa.me/<numero_con_codigo_pais_sin_signos>?text=<mensaje_codificado>`
  - Formulario con `action="https://formspree.io/f/XXXXXXXX"` (o Netlify Forms si el hosting es Netlify). Mientras el ID siga siendo `XXXXXXXX`, `script.js` abre el correo del visitante con `mailto:` para que nunca falle en silencio. Deja claro al usuario que debe crear su cuenta gratuita y pegar su ID.
- Enlaces directos: `tel:` y `mailto:`.
- **Móvil primero**: la mayoría de visitas vendrán de Instagram en el celular. Botones de al menos 44 px de alto, sin scroll horizontal.
- **Movimiento responsable**: respeta `prefers-reduced-motion` (ya incluido en la plantilla). Sin JS el contenido debe seguir visible: las animaciones de aparición solo se activan cuando `script.js` añade la clase `js` al `<html>`.
- **Accesibilidad**: `<label>` en cada campo, contraste suficiente, foco visible, enlace "Saltar al contenido", jerarquía de encabezados correcta, `lang="es"`, `aria-hidden` en decoración.
- **SEO básico**: `<title>`, `meta description`, Open Graph y JSON-LD tipo `LocalBusiness` con los datos reales.
- Sin `localStorage` ni cookies; no hace falta aviso de cookies si no se rastrea nada. Si el usuario pide analítica, menciónale ese requisito legal.

## Entrega

1. Guarda `index.html`, `styles.css` y `script.js` juntos en `/mnt/user-data/outputs/` y preséntalos con `index.html` primero. Los tres deben estar en la misma carpeta para que los enlaces relativos funcionen.
2. Resume en 3 a 5 líneas: qué se hizo, qué datos quedaron pendientes y qué debe configurar el usuario (ID de Formspree, por ejemplo).
3. Ofrece como siguiente paso cómo publicarla gratis (Netlify, GitHub Pages o Cloudflare Pages) y poner el enlace en la biografía de Instagram.

## Modificaciones posteriores

Si el usuario pide cambios sobre una página ya creada, edita los archivos existentes en lugar de regenerarlos desde cero. Cambia solo lo pedido y toca únicamente el archivo que corresponda (un color vive en `styles.css`, un texto en `index.html`).
