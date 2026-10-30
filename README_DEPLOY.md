# Tultepec suena a fiesta · Santa Cecilia 2026

Sitio estático de una sola página, preparado para publicación en Cloudflare Pages.

## Vista previa local

Abre `index.html` en un navegador moderno. Para evitar restricciones del navegador con archivos multimedia, también puedes iniciar un servidor estático desde esta carpeta:

```bash
python -m http.server 8000
```

Después visita `http://localhost:8000`.

## Publicar en Cloudflare Pages

1. Descomprime el ZIP de entrega.
2. En Cloudflare Pages, crea un proyecto mediante **Direct Upload** (o sube el contenido a un repositorio conectado).
3. Sube la carpeta que contiene `index.html`, `styles.css`, `script.js`, `02_identidad`, `03_imagenes` y `04_video_audio`.
4. No se requiere comando de build ni carpeta de salida adicional: es un sitio estático.
5. Comprueba la versión de vista previa en móvil y escritorio antes de asignar un dominio propio.

## Antes de publicar

- Confirmar que las URLs oficiales de Facebook, Instagram y TikTok son las correctas; el sitio enlaza al perfil de Instagram y TikTok indicados en el brief, pero el enlace de Facebook es genérico hasta tener la URL exacta.
- Revisar los textos, nombres y logotipos de las bandas con la coordinación del evento.
- El dominio `tultepecsuenaafiesta.com` aparece como propuesto en el brief; no se configura ni se compra desde este paquete.
- El sitio no incluye formularios con almacenamiento. Los botones de contacto abren WhatsApp y correo electrónico.
- La página no se ha publicado ni reemplazado en el sitio actual. Esta es una entrega lista para revisión y despliegue.
