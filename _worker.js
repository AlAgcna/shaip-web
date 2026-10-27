export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const accept = request.headers.get('Accept') || '';
    
    if (accept.includes('text/markdown') && url.pathname === '/') {
      const markdown = `# Shaip Domótica | Casas y espacios inteligentes

Automatiza tu casa para que trabaje por ti. Controla la iluminación, persianas, climatización y seguridad desde tu móvil.

[Contactar](mailto:shaipdomotica@gmail.com) | [Ver en Instagram](https://www.instagram.com/shaipdomotica)

## Servicios para hacer tu casa más eficiente

1. **Iluminación inteligente** - Crea escenas según el momento del día y ahorra energía sin renunciar a comodidad.
2. **Control de persianas** - Prográmalas para aprovechar la luz natural y mejorar el aislamiento térmico.
3. **Climatización inteligente** - Optimiza calefacción o aire acondicionado para tener confort y reducir consumo.
4. **Seguridad y videovigilancia** - Monitorea tu casa estés donde estés y recibe alertas ante eventos importantes.
5. **Automatización integral** - Conecta todos los sistemas para que funcionen juntos con un solo toque o por horarios.
6. **Energía eficiente** - Reduce el gasto energético con automatismos inteligentes pensados para tu día a día.

## Así es como trabajamos

1. **Escuchamos** - Analizamos tus necesidades y objetivos para entender qué quieres automatizar.
2. **Diseñamos** - Proponemos una solución personalizada, clara y adaptada a tu espacio.
3. **Instalamos** - Ponemos en marcha el proyecto y te enseñamos a usarlo de forma sencilla.

## Datos de contacto

- **Correo:** [shaipdomotica@gmail.com](mailto:shaipdomotica@gmail.com)
- **WhatsApp:** [+54 351 549 5495](https://wa.me/543515495495)
- **Zona de servicio:** Córdoba y La Rioja, Argentina
- **Horario de atención:** Lunes a Viernes de 10:00 a 20:00
- **Instagram:** [@shaipdomotica](https://www.instagram.com/shaipdomotica)

© Shaip Domótica. Todos los derechos reservados.
`;
      
      return new Response(markdown, {
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'X-Content-Type-Options': 'nosniff'
        }
      });
    }
    
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    
    return fetch(request);
  }
};
