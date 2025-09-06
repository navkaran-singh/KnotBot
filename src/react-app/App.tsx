import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import Dashboard from "@/react-app/pages/Dashboard";
import Results from "@/react-app/pages/Results";
import Upload from "@/react-app/pages/Upload";
import Profile from "@/react-app/pages/Profile";
import Settings from "@/react-app/pages/Settings";
import Help from "@/react-app/pages/Help";
import Pricing from "@/react-app/pages/Pricing";
import Privacy from "@/react-app/pages/Privacy";
import Contact from "@/react-app/pages/Contact";
import NotFound from "@/react-app/pages/NotFound";
import RefundPolicy from "./pages/RefundPolicy";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/results" element={<Results />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
