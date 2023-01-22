# Encriptador/desencriptador de textos
HTML, CSS, JavaScript

## Llaves de encriptación
"e" -> "enter"

"i" -> "imes"

"a" -> "ai"

"o" -> "ober"

"u" -> "ufat"

## Requisitos
- Debe funcionar sólo con letras minúsculas
- No utilizar letras con acentos ni caracteres especiales
- Debe ser posible encriptar y desencriptar
- La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones
- El resultado debe ser mostrado en la pantalla

## Extras
- Un botón que copie el texto encriptado/desencriptado en el portapapeles, o sea que tenga la misma funcionalidad del CTRL+C o de la opción "copiar" del menú de las aplicaciones.
- Footer con los datos de la persona que desarrolló el sitio web
- Responsive (PC, tableta, celualar)

## Secciones
- **Texto**: Área para ingresar texto
- **Mensaje**: Área para mostrar texto encriptado/desencriptado: comenzará con una imagen que debe ser sustituida por el texto encriptado/desencriptado y por un botón para copiar el resultado
- **Botones**: Área para botones de encriptado y desencriptado

## Actualizar GitHub 
1. `git pull origin main`
```
From https://github.com/fortythreesunsets/alura-encriptador-de-texto
 * branch            main       -> FETCH_HEAD
Already up to date.
```
2. `git status`
```
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified: README.md
```
3. `git add .`
4. `git commit -m "Added code to copy on mobile devices"` 
```
[main 54b0157] Added code to copy on mobile devices
 1 file changed, 1 insertion(+), 1 deletion(-)
 ```
 5. `git push origin main`
 ```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 313 bytes | 313.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/fortythreesunsets/alura-encriptador-de-texto.git
   66bea85..54b0157  main -> main
```

## + Información
https://regex101.com/
