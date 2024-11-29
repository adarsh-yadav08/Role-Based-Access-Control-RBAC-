exports.authorize = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.roles[0].name)) {
        return res.status(403).json({ message: 'Access denied' });
      }
      next();
    };
  };  