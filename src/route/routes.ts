import { RouteType } from "../common/types";
import VideoGallery from "../components/gallery/VideoGallery";
import Dashboard from "../components/dashboard/Dashboard";

export const routes: RouteType[] = [
  {
    type: "public",
    Component: VideoGallery,
    path: "/movies",
    name: "Movies",
  },
  {
    type: "private",
    Component: Dashboard,
    path: "/dashboard",
    name: "Admin dashboard",
  },
  ];
