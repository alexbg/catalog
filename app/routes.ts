import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/catalog.tsx"),
  ...prefix('detail', [
    route(':id', 'routes/detail.tsx')
  ])

] satisfies RouteConfig;
