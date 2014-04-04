# Laboratorio de Bases de Datos 2014
## Universidad Nacional de Itapúa - Ingeniería en Informática

Este repositorio será utilizado para la publicación, seguimiento y entrega de los trabajos prácticos en el marco de la materia Bases de Datos, en sus clases en el laboratorio.

### Precondiciones

Para poder realizar el proceso o flujo de trabajo, el alumno deberá previamente:

1. Crear una cuenta en este sitio [github.com](http://github.com)
2. Hacer fork de este repositorio, observarlo (watch) para recibir notificaciones cada vez que se actualiza el mismo
3. Instalar git en su localhost
4. Clonar el repositorio a su localhost
5. Generar la clave SSH que utilizarán para subir los cambios a su repositorio
6. Subir su clave SSH a su cuenta de [github.com](http://github.com)
7. Agregar este repositorio como un remote adicional a su **origin**

Todos los pasos mencionados más arriba son muy fáciles de lograrlos y pueden encontrar suficiente información en Internet al respecto.

En https://help.github.com/articles/generating-ssh-keys enlace pueden ver como generar una clave SSH y subirla su cuenta de [github.com](http://github.com).

Para agregar este repositorio como un remote adicional a su **origin** pueden ejecutar el siguiente comando en su consola (localhost):
> git remote add bd2014 git@github.com:hisapy/uni-bd-2014.git

Luego para verificar que realmente se tenga acceso para **fetch** del nuevo remote llamado en este caso *bd2014* se puede ejecutar el comando:
> git remote show bd2014

Para sincronizar sus respectivos repositorios con bd2014, primero tendrán que bajar el árbol de dicho remote.
> git fetch bd2014

Y luego hacer el **git merge** del branch correspondiente a su branch local. Si el branch local aún no existe, pueden crearlo y luego hacer el **git merge**. Por último para subir sus cambios a sus respectivos repositorios, tendrán que ejecutar el comando **git push**. Estos últmos comandos (_git merge_ y _git push_) varían según elijan subir un solo branch, todos los branches, y también pueden depender del remote a cual quieren subir sus cambios, por lo tanto deberán investigar para tener la información exacta.

La entrega de los trabajos se hará mediante el sistema de [pull requests](https://help.github.com/articles/using-pull-requests) disponible en GitHub. Una vez que hayan subido sus trabajos a sus respectivos repositorios en sus cuentas de GitHub, irán al repositorio https://github.com/hisapy/uni-bd-2014 y presionar el botón **pull request**. También deberán investigar al respecto sobre como administrar el código (o los trabajos prácticos) con esta clase de flujo de trabajo.

### Acerca de los trabajos prácticos o proyectos

En la sección [issues](https://github.com/hisapy/uni-bd-2014/issues) de este repositorio, los [milestones](https://github.com/hisapy/uni-bd-2014/issues/milestones) representarán cada uno de los trabajos prácticos y cada issue dentro de un *milestone* representará una tarea a realizar para completar dicho trabajo. La mayoría de los trabajos serán individuales, pero cuando corresponda se indicará si el trabajo es grupal.

Todos los archivos entregados por los alumnos deberán tener encoding utf-8.

