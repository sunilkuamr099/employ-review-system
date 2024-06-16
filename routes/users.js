import express from "express";
import passport from "passport";

import{signIn,signUp,destroySession,addEmployee,editEmployee,updateEmployee,create,createSession,destroy,createEmployee} from '../controllers/users_controller.js';
import {adminDashboard,employeeDashboard}  from '../controllers/dashboard_controller.js';
const userrouter = express.Router();
userrouter.get('/', signIn);
userrouter.get('/sign-up', signUp);
userrouter.get('/sign-out', destroySession);
userrouter.get('/admin-dashboard', adminDashboard);
userrouter.get('/employee-dashboard/:id', employeeDashboard);
userrouter.get('/add-employee', addEmployee);
userrouter.get('/edit-employee/:id', editEmployee);

userrouter.post('/update-employee/:id', updateEmployee);

userrouter.post('/create', create);
userrouter.post('/create-employee', createEmployee);

// use passport as middleware to authenticate
userrouter.post(
  '/create-session',
  passport.authenticate('local', { failureRedirect: '/' }),
  createSession
);

userrouter.get('/destroy/:id', destroy)

export default  userrouter;
