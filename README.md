# Employee Review System

Employee Review System is a web application designed to manage employee reviews and feedback within an organization. The system allows administrators to add employees, assign and receive reviews, and provides a platform for employees to view their performance feedback.

## Demo

[Link to Demo](https://employee-system-4paq.onrender.com/sign-up)

## Features

- User Authentication: Sign up, sign in, and sign out functionality with authentication.
- Admin Dashboard: View and manage all employees, assign reviews, and perform administrative tasks.
- Employee Dashboard: View assigned reviews and feedback from other employees.
- Review Assignment: Admins can assign reviews to employees, specifying the reviewer and recipient.
- CRUD Operations: Create, read, update, and delete functionality for users and reviews.

## Technologies Used

- Node.js
- Express.js
- MongoDB 
- Passport.js (for authentication)
- EJS
- Bootstrap

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rehan018/employee-review-system.git
   ```

2. Install dependencies:

   ```bash
   cd employee-review-system
   npm install
   ```

3. Set up your MongoDB database and update the connection string in `config/database.js`.

4. Run the application:

   ```bash
   node index.js
   ```

   The application should be running on `http://localhost:5000`.
5. login:

   ```bash
   email:john.deo@gmail.com
   pass:123456
   ```
## Usage

- Visit `http://localhost:5000` to access the application.
- Sign up as a new user or use the provided admin credentials (if any).
- Explore the admin and employee dashboards.

## Contributing

Contributions are welcome! Please open an issue or create a pull request for any improvements or bug fixes.

## License

This project is licensed under the [Coding Ninja  License](LICENSE).

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [Passport.js](http://www.passportjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [EJS](https://ejs.co/)
- [Bootstrap](https://getbootstrap.com/)

```
