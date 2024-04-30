import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Groups all the routes to the appropriate handler in the
 * given Express application.
 * @param {Express} app The Express application
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
