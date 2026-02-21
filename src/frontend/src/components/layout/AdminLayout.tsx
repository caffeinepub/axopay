import { Outlet, Link, useNavigate, useLocation } from '@tanstack/react-router';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  Award, 
  BarChart3, 
  Bell,
  LogOut,
  Menu,
  X,
  Shield
} from 'lucide-react';
import { useState } from 'react';

export default function AdminLayout() {
  const { identity, clear } = useInternetIdentity();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
    navigate({ to: '/admin/login' });
  };

  const navItems = [
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/users', icon: Users, label: 'Users' },
    { to: '/admin/financial', icon: DollarSign, label: 'Financial' },
    { to: '/admin/plans', icon: TrendingUp, label: 'Plans' },
    { to: '/admin/config', icon: Settings, label: 'Config' },
    { to: '/admin/rewards', icon: Award, label: 'Rewards' },
    { to: '/admin/reports', icon: BarChart3, label: 'Reports' },
    { to: '/admin/notifications', icon: Bell, label: 'Notifications' },
  ];

  if (!identity) {
    navigate({ to: '/admin/login' });
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link to="/admin/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">AXOPAY Admin</span>
            </Link>
          </div>
          
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 border-r bg-muted/30">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link key={item.to} to={item.to}>
                  <Button
                    variant={isActive ? 'default' : 'ghost'}
                    className="w-full justify-start"
                  >
                    <item.icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur">
            <nav className="p-4 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link key={item.to} to={item.to} onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant={isActive ? 'default' : 'ghost'}
                      className="w-full justify-start"
                    >
                      <item.icon className="h-4 w-4 mr-3" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}

        <main className="flex-1 overflow-auto">
          <div className="container py-6 px-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
