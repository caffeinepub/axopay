import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet, TrendingUp, Users, DollarSign, Award, GitBranch } from 'lucide-react';

export default function DashboardPage() {
  // Mock data - will be replaced with actual backend data
  const mockData = {
    wallets: {
      main: 1250.00,
      earnings: 450.75,
      withdrawal: 320.50
    },
    activePlan: 'GROW',
    roiProgress: 65,
    totalEarnings: 2150.00,
    referralIncome: 450.00,
    binaryIncome: 680.00,
    withdrawableBalance: 320.50,
    teamSize: 24,
    recentTransactions: [
      { id: 1, type: 'ROI', amount: 15.00, date: '2026-02-21', status: 'Completed' },
      { id: 2, type: 'Referral', amount: 30.00, date: '2026-02-20', status: 'Completed' },
      { id: 3, type: 'Binary', amount: 50.00, date: '2026-02-20', status: 'Completed' },
      { id: 4, type: 'Deposit', amount: 300.00, date: '2026-02-19', status: 'Completed' },
      { id: 5, type: 'Withdrawal', amount: 100.00, date: '2026-02-18', status: 'Pending' }
    ]
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your account overview.</p>
      </div>

      {/* Wallet Balances */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border-primary/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Main Wallet</CardTitle>
            <Wallet className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.wallets.main.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">Available for investment</p>
          </CardContent>
        </Card>

        <Card className="border-secondary/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Earnings Wallet</CardTitle>
            <TrendingUp className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.wallets.earnings.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">Accumulated earnings</p>
          </CardContent>
        </Card>

        <Card className="border-accent/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Withdrawal Wallet</CardTitle>
            <DollarSign className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.wallets.withdrawal.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">Ready to withdraw</p>
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Plan</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.activePlan}</div>
            <p className="text-xs text-muted-foreground mt-1">ROI: {mockData.roiProgress}% complete</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.totalEarnings.toFixed(2)}</div>
            <p className="text-xs text-success mt-1">+12.5% this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Team Size</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.teamSize}</div>
            <p className="text-xs text-muted-foreground mt-1">Active members</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Binary Income</CardTitle>
            <GitBranch className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockData.binaryIncome.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">From matched pairs</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${tx.status === 'Completed' ? 'bg-success' : 'bg-warning'}`} />
                  <div>
                    <p className="font-medium">{tx.type}</p>
                    <p className="text-xs text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${tx.amount.toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">{tx.status}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
