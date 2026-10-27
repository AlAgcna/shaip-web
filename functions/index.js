export async function onRequest({ request }) {
  const accept = (request.headers.get('Accept') || '').toLowerCase();
  if (accept.includes('text/markdown')) {
    const markdown = `# Shaip Domótica | Casas y espacios inteligentes\n\nAutomatiza tu casa para que trabaje por ti. Controla la iluminación, persianas, climatización y seguridad desde tu móvil.\n\n## Servicios\n1. Iluminación inteligente\n2. Control de persianas\n3. Climatización inteligente\n4. Seguridad y videovigilancia\n5. Automatización integral\n6. Energía eficiente\n\n## Contacto\n- Correo: shaipdomotica@gmail.com\n- WhatsApp: +54 351 549 5495\n- Zona de servicio: Córdoba y La Rioja, Argentina\n- Instagram: @shaipdomotica\n`;
    return new Response(markdown, {
      headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Vary': 'Accept' }
    });
  }
  return new Response(await (await fetch(request.url)).text(), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}
