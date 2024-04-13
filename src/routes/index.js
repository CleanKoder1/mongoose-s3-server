const router = require("express").Router();
const productRoutes = require("./product.routes");
const routes = [
  {
    path: "/products",
    routes: productRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.routes);
});

module.exports = router;
