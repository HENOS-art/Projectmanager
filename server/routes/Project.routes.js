const ProjectController = require("../controllers/project.controller");

module.exports = app => {
  app.get("/api/projects/", ProjectController.getAll);
//   app.get("/app/projects/backlog", ProjectController.getAllBacklog);
  app.get("/app/projects/inprogress", ProjectController.getAllInProgress);
//   app.get("/app/projects/completed", ProjectController.getAllCompleted);

  app.get(" /app/projects/:id", ProjectController.getOne);
  app.put("/api/projects/:id", ProjectController.update);
  app.post("/api/projects/new",ProjectController.create);
  app.delete("/api/projects/:id", ProjectController.delete);
};