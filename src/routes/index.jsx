import { lazy } from "react";

const Home = lazy(() => import("pages/home"));
const PortfolioLegend = lazy(() => import("pages/portfolio/legend"))
const PortfolioOquvmarkaz = lazy(() => import("pages/portfolio/oquvmarkaz"))
const PortfolioFazogram = lazy(() => import("pages/portfolio/fazogram"))
const PortfolioUztube = lazy(() => import("pages/portfolio/uztube"))
const PortfolioMitagroup = lazy(() => import("pages/portfolio/mitagroup"))

const authRoutes = [
  {
    path: "/admin/login",
    element: <Home />,
  }
];

const pages = [
  {
    path: "/",
    element: <Home />,
    children: [{}]
  },
  {
    path: "/portfolio/legend",
    element: <PortfolioLegend />
  },
  {
    path: "/portfolio/oquvmarkaz",
    element: <PortfolioOquvmarkaz />
  },
  {
    path: "/portfolio/fazogram",
    element: <PortfolioFazogram />
  },
  {
    path: "/portfolio/uztube",
    element: <PortfolioUztube />
  },
  {
    path: "/portfolio/mitagroup",
    element: <PortfolioMitagroup />
  }
]

export { authRoutes, pages };