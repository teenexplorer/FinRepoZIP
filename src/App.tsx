import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Navigation } from "./components/Navigation";

// Page imports
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import Adm from "./pages/Adm";
import Subdivision from "./pages/Subdivision";
import GPList from "./pages/GPList";
import VillageList from "./pages/VillageList";
import HouseList from "./pages/HouseList";
import Registration from "./pages/Registration";
import MIS from "./pages/MIS";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Navigation />
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
            <Route path="/adm" element={<ProtectedRoute><Adm /></ProtectedRoute>} />
            <Route path="/subdivision" element={<ProtectedRoute><Subdivision /></ProtectedRoute>} />
            <Route path="/gp-list" element={<ProtectedRoute><GPList /></ProtectedRoute>} />
            <Route path="/village-list/:gpId" element={<ProtectedRoute><VillageList /></ProtectedRoute>} />
            <Route path="/house-list/:gpId/:villageId" element={<ProtectedRoute><HouseList /></ProtectedRoute>} />
            <Route path="/registration/:gpId/:villageId/:houseId" element={<ProtectedRoute><Registration /></ProtectedRoute>} />
            <Route path="/mis" element={<ProtectedRoute><MIS /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;