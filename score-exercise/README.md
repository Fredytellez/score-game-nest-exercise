# Implementar CRUD
Implementar CRUD para (game scores) de los dominios users y scores en NestJS sin utilizar una base de datos por el momento.

## Ejercicio 1: Creación y configuración del proyecto NestJS
Objetivo: Crear en NestJS módulos, controladores y servicios para gestionar las puntuaciones.
Pasos:
Crea un nuevo proyecto con el comando:
nest new gameScore
Crea el módulo Scores para gestionar las puntuaciones:
nest generate module modules/scores
Crea el controlador Scores:
nest generate controller modules/scores
Crea el servicio Scores:
nest generate service modules/scores
## Ejercicio 2: Definición del dominio en memoria
Objetivo: Crear estructura de datos en memoria con faker para almacenar las puntuaciones.
Pasos:

En el archivo scores.service.ts, define una interfaz Score:
export interface Score {
  id: string;
  username: string;
  game: string;
  score: number;
}

Añade un array en el servicio para almacenar las puntuaciones:
private scores: Score[] = [];
## Ejercicio 3: Implementación del CRUD en el servicio
Objetivo: Implementar CRUD de creación, lectura especifica, lectura masiva, actualización y eliminación (CRUD) en el servicio.
2. Pasos:
- Implementa el método createScore para añadir una nueva puntuación:
typescript createScore(score: ScoreDto) { this.scores.push(score); } 
Implementa getAllScores (o el nombre que define en operationId del swagger) para obtener las puntuaciones paginadas:

getAllScores(paginationQuery: PaginationQueryDto): Paginator {
  return <Paginator> {
   data,
   total,
   page,
   limit,
   totalPages,
  }   
}

Implementa getScoreById para obtener una puntuación por su id:
 getScoreById(id: string): Score {
   return this.scores.find(score => score.id === id);
 }

Implementa updateScoreById para actualizar una puntuación:
updateScoreById(id: string, updateData: ScoreDto) {
  const score = this.getScoreById(id);
  if (score) {
    Object.assign(score, updateData);
  }
}
Implementa deleteScoreById para eliminar una puntuación por id:
deleteScoreById(id: string) {
  this.scores = this.scores.filter(score => score.id !== id);
}
## Ejercicio 4: Implementación de los controladores
Objetivo: Implementar los controladores para manejar las solicitudes HTTP para el CRUD.
Pasos:
En scores.controller.ts, inyecta el servicio ScoresService en el constructor.
Define los endpoints para manejar las operaciones:
@Post()
createScore(@Body() score: Score) {
  return this.scoresService.createScore(score);
}

@Get() // tener en cuenta la paginación
getAllScores(@Query() paginationQuery: PaginationQueryDto) {
  return this.scoresService.getAllScores(paginationQuery);
}

@Get(':id')
getScoreById(@Param('id') id: string) {
  return this.scoresService.getScoreById(id);
}

@Patch(':id')
updateScoreById(@Param('id') id: string, @Body() updateData: ScoreDto) {
  return this.scoresService.updateScoreById(id, updateData);
}

@Delete(':id')
deleteScoreById(@Param('id') id: string) {
  return this.scoresService.deleteScoreById(id);
}
## Ejercicio 5: Implementación del dominio Users con rol (usuarios y administradores)
Objetivo: Implementar una funcionalidad que permita diferenciar entre usuarios y administradores, recuerde tomar como base los anteriores 4 puntos.
Objetivo: Implementar los servicios de subida y descarga de archivos
Ejercicio 6: Probar las APIs
Objetivo: Subir el swagger de la primera revisión a postman
Objetivo: Probar el swagger definido