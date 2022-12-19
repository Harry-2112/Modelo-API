# Creacion de APi

## Tabla de contenidos

- [Creacion Del Proyecto](#Creacion)
- [Iniciamos el proyecto](#Inicio)
- [Uso](#usage)

## Creacion <a name = "Creacion"></a>

Este proyecto Es la gia rapida para crear una api con node.js, express y mongoose.

## Iniciamos el proyecto <a name = "Inicio"></a>

Estas instrucciones le proporcionarán una copia del proyecto en funcionamiento en su máquina local para fines de desarrollo y prueba. Empieze descomprimiendo la carpeta y abriendo su editor de codigo (Yo utilizo [visual studio code](https://code.visualstudio.com/)) por lo que te recomendare este editor para el proyecto.

### Prerequisites

pàra iniciar primero devera crear su cuenta en [MongoDB](https://cloud.mongodb.com/) y crear un Cluster, luego descarge este repositorio y siga los sigientes pasos.

```
Le Recomiendo que Instale la Extencion REST Client por que usare esta extencion para hacer las peticiones a la APi, las peticiones se encuentran almacenadas dentro del archivo request.http
```

(Si usted desea puede utilizar servicios como [Postman](https://www.postman.com/downloads/), [Soap-ui](https://www.soapui.org/downloads/soapui/) o el que sea de su Agrado)

### Instalacion

Abrimos una terminal dentro del proyecto y Ejecutamos el siguiente comando para iniciar node

```
npm  init --yes
```

Instalamos Express ejecutando el siguiente comando

```
npm i express
```

Para probar el servidor instalaremos un paquete llamado nodemon ejecutando el comando

```
npm i nodemon -D
```

Instalamos mongoose para poder conectarnos A la BD Mongo con el siguiente comando

```
npm i mongoose
```

En este proyecto estaremos utilizando dotenv para crear varibles de entorno, para eso ejecutamos el comando

```
npm i dotenv -D
```

Crea un archivo .env y dentro pega la uri de tu Base de datos (para obtenerla ve a tu Cluster de MongoDB y Presiona -> 'Conect' -> 'Conect your Application' y copia la cadena que mongo te dara, Recuerda remplasar password por la contraseña que ingresaste al crear el cluster):

```
MONGODB_URI = {Aqui va la URI de tu Base de datos}
```

Recuerde modificar la parte de Scripts en archivo package.json que se creo luego de iniciar el proyecto

```
modificar:
"test": "echo \"Error: no test specified\" && exit 1"

por:
"start": "nodemon src/index.js"

```

Instale Cors para prevenir algun error

```
npm i cors
```

Ejecute La API con el comando y verifique si La api se creo correctamente

```
npm start
```

## Uso <a name = "usage"></a>

Para modificar los datos que recibe la DB modifique dentro de (src/models/user.js) el Schema por los datos que desea recibir, luego modifique dentro de (src/routes/user.js) la parte de update a users(Peticion PUT) por los datos que ingreso dentro del Schema.
Ademas recuerde modificar el archivo request.http al hacer las peticiones en caso de que este utilizando REST Client.
