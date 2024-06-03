// middlewares/roles.js
const authorize = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: 'Access denied, insufficient permissions' });
    }

    next();
};

module.exports = authorize;
