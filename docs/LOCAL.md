# Imago AI — instalación local

## Pollinations

No requiere instalación: serví `public/` con un servidor HTTP y abrí `editor.html`.

## ComfyUI

```bash
git clone https://github.com/Comfy-Org/ComfyUI.git
cd ComfyUI
python -m venv .venv
# Linux/macOS
source .venv/bin/activate
# Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
python main.py --listen 127.0.0.1 --port 8188
```

Descargá un checkpoint compatible en `models/checkpoints/`. El código de Imago usa `model.safetensors` como nombre inicial; cambiá el nombre en el workflow si es necesario.

## Ejecutar Imago

Desde la raíz del repositorio:

```bash
python -m http.server 8000 --directory public
```

Abrí `http://localhost:8000/editor.html`. Elegí `ComfyUI · local` para evitar enviar prompts al proveedor online.

## Notas

- El endpoint local predeterminado es `http://127.0.0.1:8188`.
- El historial se guarda en IndexedDB.
- Pollinations es un proveedor externo y puede modificar sus límites.
- Para uso comercial, revisá las licencias del checkpoint, proveedor y contenido generado.
