# Proyecto: ```Plataforma web de visualización de notas```

Este proyecto fue desarrollado como un requisito para la asignatura ```Desarrollo de aplicaciones para internet```, con el objetivo de aplicar los conocimientos adquiridos durante las 
clases. El proyecto consistió en ayudar a un grupo de usuarios registrados en otro sistema a visualizar sus calificaciones. Además, se agregó la funcionalidad de generar, editar y borrar 
notas para cada usuario que se registre en la aplicación.  
El proyecto incluye importantes medidas de seguridad, por ejemplo, al registrar una cuenta, la contraseña se encripta en la base de datos MongoDB. Cada vez que un usuario intenta ingresar 
a su cuenta, se genera un token que le permite navegar por el contenido protegido de la plataforma web. Además, para permitir la creación, edición y eliminación de notas para cada usuario, 
se estableció una relación entre los modelos ```nota``` y ```user```

Cuando el usuario inicia sesión y accede a la sección para visualizar los datos del otro sistema, el backend realiza una petición a una API externa utilizando Fetch API, lo que permite mostrar los datos de cada usuario registrado en la base de datos en el frontend.

### Stack de tecnologías.
<p align="center">
  <img src="./IMG/StackTec.PNG" alt="Descripción de la imagen">
</p>

