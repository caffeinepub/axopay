import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function EarningsPage() {
  const earningsBreakdown = {
    roi: 285.00,
    referral: 450.00,
    binary: 680.00,
    rewards: 75.00,
    total: 1490.00
  };

  const transactions = [
    { id: 1, date: '2026-02-21', type: 'ROI', amount: 15.00, status: 'Completed' },
    { id: 2, date: '2026-02-21', type: 'Binary', amount: 30.00, status: 'Completed' },
    { id: 3, date: '2026-02-20', type: 'Referral', amount: 30.00, status: 'Completed' },
    { id: 4, date: '2026-02-20', type: 'Binary', amount: 50.00, status: 'Completed' },
    { id: 5, date: '2026-02-19', type: 'ROI', amount: 15.00, status: 'Completed' },
    { id: 6, date: '2026-02-19', type: 'Referral', amount: 10.00, status: 'Completed' },
    { id: 7, date: '2026-02-18', type: 'Binary', amount: 30.00, status: 'Completed' },
    { id: 8, date: '2026-02-18', type: 'ROI', amount: 15.00, status: 'Completed' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Earnings & Transactions</h1>
          <p className="text-muted-foreground">Track all your income sources</p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Earnings Breakdown */}
      <div className="grid md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${earningsBreakdown.total.toFixed(2)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-1">${earningsBreakdown.roi.toFixed(2)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Referral</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-2">${earningsBreakdown.referral.toFixed(2)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Binary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-3">${earningsBreakdown.binary.toFixed(2)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-4">${earningsBreakdown.rewards.toFixed(2)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Transaction History</CardTitle>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="roi">ROI</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="binary">Binary</SelectItem>
                  <SelectItem value="rewards">Rewards</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="completed">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${tx.status === 'Completed' ? 'bg-success' : 'bg-warning'}`} />
                  <div>
                    <p className="font-medium">{tx.type}</p>
                    <p className="text-sm text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-success">+${tx.amount.toFixed(2)}</p>
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
