import { NavLink } from 'react-router';
import { 
  House, 
  ChartLine, 
  Upload, 
  User, 
  Gear, 
  Question,
  X,
  
} from '@phosphor-icons/react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: House },
  { name: 'Results', href: '/results', icon: ChartLine },
  { name: 'Upload', href: '/upload', icon: Upload },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: Gear },
  { name: 'Help', href: '/help', icon: Question },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 glass-dark backdrop-blur-xl z-50 
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-0
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="text-xl font-bold text-white">ISC</span>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${isActive 
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }
              `}
              onClick={() => setIsOpen(false)}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Upgrade Card */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="glass rounded-xl p-4 border border-indigo-500/30">
            <h3 className="text-white font-semibold mb-2">Upgrade Plan</h3>
            <p className="text-gray-400 text-sm mb-3">Unlock advanced features</p>
            <button 
              disabled 
              className="w-full neuro-btn text-white py-2 rounded-lg text-sm opacity-50 cursor-not-allowed"
            >
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
