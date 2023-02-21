const express = require('express');
const router = express.Router();
const UserController= require('../controllers/userController');
const HomeController= require('../controllers/homeController');
const AdminController = require('../controllers/adminController');

const passport = require('passport');


//home controller
router.get('/', HomeController.landingPage) ;
router.get('/signInPage', HomeController.signInPage) ;
router.get('/signUpPage', HomeController.signUpPage) ;


//user Controller 
router.get('/user/home', UserController.home) ;
router.get('/user/profile/:id', UserController.profile) ;
router.get('/user/logout',UserController.logOut) ;
router.post('/user/create', UserController.createUser) ;
router.post('/user/session',passport.authenticate('local',{failureRedirect : '/sign-in'}), UserController.login) ;
router.post('/user/feedback/:profileID', UserController.feedback) ;


//admin conroller
router.get('/admin/remove/:id', AdminController.deleteUser) ;
router.post('/admin/update/:id', AdminController.updateUser) ;
router.get('/admin/addEmployee', AdminController.addEmployee) ;
router.post('/admin/create', AdminController.createUser) ;
router.post('/admin/addTask/:id', AdminController.addTask) ;
router.get('/admin/removeTask/:id/:user', AdminController.removeTask) ;
router.get('/admin/changeStatus/:id', AdminController.changeTaskStatus) ;
router.get('/admin/changeAdmin/:id', AdminController.toggleAdmin) ;
router.post('/admin/review/:id', AdminController.assignReview) ;
router.get('/admin/review',AdminController.reviewPage);






module.exports = router ;
