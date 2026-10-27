export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  const accept = (request.headers.get('Accept') || '').toLowerCase();
  
  if ((url.pathname === '/' || url.pathname === '/index.html') && accept.includes('text/markdown')) {
    const markdown = `# Shaip Domótica | Casas y espacios inteligentes

Automatiza tu casa para que trabaje por ti. Controla la iluminación, persianas, climatización y seguridad desde tu móvil.

## Servicios
1. Iluminación inteligente
2. Control de persianas
3. Climatización inteligente
4. Seguridad y videovigilancia
5. Automatización integral
6. Energía eficiente

## Contacto
- Correo: shaipdomotica@gmail.com
- WhatsApp: +54 351 549 5495
- Zona: Córdoba y La Rioja, Argentina
- Instagram: @shaipdomotica
`;
    return new Response(markdown, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept'
      }
    });
  }
  
  return next();
}
