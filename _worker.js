export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const accept = (request.headers.get('Accept') || '').toLowerCase();
    
    if ((url.pathname === '/' || url.pathname === '') && accept.includes('text/markdown')) {
      const markdown = `# Shaip Domótica | Casas y espacios inteligentes

Automatiza tu casa para que trabaje por ti. Controla la iluminación, persianas, climatización y seguridad desde tu móvil.

## Servicios para hacer tu casa más eficiente

1. **Iluminación inteligente** - Crea escenas según el momento del día y ahorra energía sin renunciar a comodidad.
2. **Control de persianas** - Prográmalas para aprovechar la luz natural y mejorar el aislamiento térmico.
3. **Climatización inteligente** - Optimiza calefacción o aire acondicionado para tener confort y reducir consumo.
4. **Seguridad y videovigilancia** - Monitorea tu casa estés donde estés y recibe alertas ante eventos importantes.
5. **Automatización integral** - Conecta todos los sistemas para que funcionen juntos con un solo toque o por horarios.
6. **Energía eficiente** - Reduce el gasto energético con automatismos inteligentes pensados para tu día a día.

## Datos de contacto

- **Correo:** [shaipdomotica@gmail.com](mailto:shaipdomotica@gmail.com)
- **WhatsApp:** [+54 351 549 5495](https://wa.me/543515495495)
- **Zona de servicio:** Córdoba y La Rioja, Argentina
- **Instagram:** [@shaipdomotica](https://www.instagram.com/shaipdomotica)
`;
    
      return new Response(markdown, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept'
        }
      });
    }
    
    if (env.ASSETS) {
      if ((url.pathname === '/' || url.pathname === '') && accept.includes('text/markdown')) {
        const markdown = `# Shaip Domótica | Casas y espacios inteligentes\n\nAutomatiza tu casa para que trabaje por ti.`;
        return new Response(markdown, { status: 200, headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Vary': 'Accept' } });
      }
      return env.ASSETS.fetch(request);
    }
    
    return fetch(request);
  }
};
