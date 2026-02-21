import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import DashboardPage from './pages/client/DashboardPage';
import WalletPage from './pages/client/WalletPage';
import PlansPage from './pages/client/PlansPage';
import ReferralPage from './pages/client/ReferralPage';
import BinaryPage from './pages/client/BinaryPage';
import RewardsPage from './pages/client/RewardsPage';
import EarningsPage from './pages/client/EarningsPage';
import ProfilePage from './pages/client/ProfilePage';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagementPage from './pages/admin/UserManagementPage';
import FinancialControlPage from './pages/admin/FinancialControlPage';
import PlanManagementPage from './pages/admin/PlanManagementPage';
import ReferralBinaryConfigPage from './pages/admin/ReferralBinaryConfigPage';
import RewardsManagementPage from './pages/admin/RewardsManagementPage';
import ReportsPage from './pages/admin/ReportsPage';
import NotificationsPage from './pages/admin/NotificationsPage';
import PublicLayout from './components/layout/PublicLayout';
import MainLayout from './components/layout/MainLayout';
import AdminLayout from './components/layout/AdminLayout';
import { useEffect } from 'react';

const rootRoute = createRootRoute({
  component: () => <Outlet />
});

const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'public',
  component: PublicLayout
});

const indexRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/',
  component: LandingPage
});

const loginRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/login',
  component: LoginPage
});

const signupRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/signup',
  component: SignupPage
});

const forgotPasswordRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/forgot-password',
  component: ForgotPasswordPage
});

const adminLoginRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/admin/login',
  component: AdminLoginPage
});

const clientRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'client',
  component: MainLayout
});

const dashboardRoute = createRoute({
  getParentRoute: () => clientRoute,
  path: '/dashboard',
  component: DashboardPage
});

const walletRoute = createRoute({
  getParentRoute: () => clientRoute,
  path: '/wallet',
  component: WalletPage
});

const plansRoute = createRoute({
  getParentRoute: () => clientRoute,
  path: '/plans',
  component: PlansPage
});

const referralRoute = createRoute({
  getParentRoute: () => clientRoute,
  path: '/referrals',
  component: ReferralPage
});

const binaryRoute = createRoute({
  getParentRoute: () => clientRoute,
  path: '/binary',
  component: BinaryPage
});

const rewardsRoute = createRoute({
  getParentRoute: () => clientRoute,
  path: '/rewards',
  component: RewardsPage
});

const earningsRoute = createRoute({
  getParentRoute: () => clientRoute,
  path: '/earnings',
  component: EarningsPage
});

const profileRoute = createRoute({
  getParentRoute: () => clientRoute,
  path: '/profile',
  component: ProfilePage
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'admin',
  component: AdminLayout
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/admin/dashboard',
  component: AdminDashboard
});

const adminUsersRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/admin/users',
  component: UserManagementPage
});

const adminFinancialRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/admin/financial',
  component: FinancialControlPage
});

const adminPlansRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/admin/plans',
  component: PlanManagementPage
});

const adminConfigRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/admin/config',
  component: ReferralBinaryConfigPage
});

const adminRewardsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/admin/rewards',
  component: RewardsManagementPage
});

const adminReportsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/admin/reports',
  component: ReportsPage
});

const adminNotificationsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/admin/notifications',
  component: NotificationsPage
});

const routeTree = rootRoute.addChildren([
  publicRoute.addChildren([
    indexRoute,
    loginRoute,
    signupRoute,
    forgotPasswordRoute,
    adminLoginRoute
  ]),
  clientRoute.addChildren([
    dashboardRoute,
    walletRoute,
    plansRoute,
    referralRoute,
    binaryRoute,
    rewardsRoute,
    earningsRoute,
    profileRoute
  ]),
  adminRoute.addChildren([
    adminDashboardRoute,
    adminUsersRoute,
    adminFinancialRoute,
    adminPlansRoute,
    adminConfigRoute,
    adminRewardsRoute,
    adminReportsRoute,
    adminNotificationsRoute
  ])
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
