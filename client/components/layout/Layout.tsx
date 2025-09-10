import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(135deg,#384F92_0%,#6B63E6_60%,#0f1724_100%)] text-white">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
