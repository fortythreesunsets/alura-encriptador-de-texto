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
- Responsive (dispositivos X-Small, Small, Medium, Large, X-Large y XX-Large)
- Botón reiniciar para que haga refresh a la página después de desencriptar
- Tooltip que aparece al hacer click en el botón copiar
- Pedir a usuario que ingrese un texto si presiona los botones de encriptar o desencriptar sin haber escrito nada

## Secciones
- **Texto**: Área para ingresar texto
- **Mensaje**: Área para mostrar texto encriptado/desencriptado: comenzará con una imagen que debe ser sustituida por el texto encriptado/desencriptado y por un botón para copiar el resultado
- **Botones**: Área para botones de encriptado y desencriptado

## Crear repositorio en Git
1. En la carpeta del proyecto, dar click derecho > Git Bash Here
   
   1.1  Si es la primera vez que se usa git , configurar usuario y email
   `git config --global user.name "Tu nombre de Usuario"`
   `git config --global user.email "tu@email.com"`
2. `git init`
3. Cambiar nombre de la rama **master** a **main** con `git branch -M main`

## Crear repositorio en GitHub
1. En perfil de github crear repositorio
2. Obtener la dirección del directorio remoto (debajo de "or push an existing repository from the command line") y ejecutar los comandos:
```
git remote add origin git@github.com:TuUsuarioDeGitHub/NombreRepositorio.git
git branch -M main /***Si no se ha renombrado anteriormente***/
```
3. Verificar que el repositorio se agregó correctamente:
```
git remote  /***Muestra el nombre del repositorio remoto***/
git remote -V  /***Muestra más detalles del repositorio remoto***/
```
4. Enviar archivos desde el repositorio local al remoto con `git push -u origin main`

## Crear página con GitHub pages
1. Tener ya creado y subido el proyecto a un repositorio en el perfil de GitHub y que sea público
2. En **Settings** ir a **Pages** en el menú lateral y en **Source** seleccionar *Deploy from a branch*
3. En **Branch** seleccionar *main* y */root*

## Actualizar proyecto en Git 
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

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
