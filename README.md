# Imago

Chat experto de imagen, offline. Corre en el navegador.

Laboratorio (lectura de fotos), forja de prompts, recetario de luz/óptica y motor [WebLLM](https://github.com/mlc-ai/web-llm) local. Todo pasa por el chat.

## Descarga

- ZIP del código: https://github.com/MAXIMILIANOTARANTO/imago-chat/archive/refs/heads/main.zip
- Repo: https://github.com/MAXIMILIANOTARANTO/imago-chat

## Qué hace

- Chat tipo modelo de IA (historial, adjuntar foto, sugerencias).
- Lectura local de una imagen: luma, contraste, paleta, recorte.
- Prompts en inglés listos para copiar, con negativos.
- Recetas: retrato de ventana, claroscuro, calle, producto, paisaje, interior.
- Motor WebLLM opcional (hace falta WebGPU). Primera carga descarga el modelo; después queda en caché y trabaja offline.

Nada de lo que escribís o subís viaja a un servidor cuando laburás en el chat de oficio. El LLM, si lo cargás, también corre en tu máquina.

## Stack

TanStack Start, React, Tailwind, Zustand, `@mlc-ai/web-llm`.
