import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Reports", path: "/reports" },
    { name: "ADM", path: "/adm" },
    { name: "Subdivision", path: "/subdivision" },
    { name: "MIS", path: "/mis" },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex space-x-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "inline-flex items-center px-1 pt-1 text-sm font-medium relative group",
                    location.pathname === link.path
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700 transition-colors"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-0.5 bg-gray-900 bottom-0"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={logout}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};