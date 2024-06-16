import Review from '../models/review.js';
import User from '../models/user.js';

// Render admin dashboard
export const adminDashboard = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      if (req.user.role === 'admin') {
        // populate all users
        let users = await User.find({}).populate('username');

        // filter logged in user
        let filteredUsers = users.filter(
          (user) => user.email !== req.user.email
        );

        return res.render('admin_dashboard', {
          title: 'Admin dashboard',
          users: filteredUsers,
        });
      } else {
        return res.redirect('back');
      }
    } else {
      return res.redirect('/');
    }
  } catch (err) {
    console.log(err);
    return res.redirect('/');
  }
};

// Render employee dashboard
export const employeeDashboard = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      // populate the employee with reviews assigned to it and reviews from others
      const employee = await User.findById(req.params.id)
        .populate({
          path: 'reviewsFromOthers',
          populate: {
            path: 'reviewer',
            model: 'User',
          },
        })
        .populate('assignedReviews');

      // extract the reviews assigned to it
      const assignedReviews = employee.assignedReviews;

      // extract feedbacks from other employees
      const reviewsFromOthers = employee.reviewsFromOthers;

      // populate reviews given from others
      const populatedResult = await Review.find().populate({
        path: 'reviewer',
        model: 'User',
      });

      return res.render('employee_dashboard', {
        title: 'Employee dashboard',
        employee,
        assignedReviews,
        reviewsFromOthers,
      });
    } else {
      return res.redirect('/');
    }
  } catch (err) {
    console.log(err);
    return res.redirect('back');
  }
};
