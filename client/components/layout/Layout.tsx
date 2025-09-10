import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0f1724] text-white">
      {/* subtle radial highlight overlay for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(600px 400px at 10% 20%, rgba(99,102,241,0.18) 0%, rgba(56,79,146,0.12) 40%, transparent 60%), radial-gradient(500px 300px at 85% 75%, rgba(254,192,3,0.06) 0%, transparent 50%)',
        }}
      />

      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
