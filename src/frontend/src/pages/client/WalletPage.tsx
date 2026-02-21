import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wallet</h1>
        <p className="text-muted-foreground">Manage your funds and transactions</p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          This is a demonstration page. Full wallet functionality including deposits, withdrawals, transfers, and currency conversion will be implemented with backend integration.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
          <TabsTrigger value="transfer">Transfer</TabsTrigger>
          <TabsTrigger value="convert">Convert</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Main Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$1,250.00</div>
                <p className="text-sm text-muted-foreground mt-2">Available for investment</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Earnings Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$450.75</div>
                <p className="text-sm text-muted-foreground mt-2">Accumulated earnings</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Withdrawal Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$320.50</div>
                <p className="text-sm text-muted-foreground mt-2">Ready to withdraw</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="deposit">
          <Card>
            <CardHeader>
              <CardTitle>Deposit Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Deposit functionality will be available soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="withdraw">
          <Card>
            <CardHeader>
              <CardTitle>Withdraw Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Withdrawal functionality will be available soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transfer">
          <Card>
            <CardHeader>
              <CardTitle>Internal Transfer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Transfer functionality will be available soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="convert">
          <Card>
            <CardHeader>
              <CardTitle>Currency Conversion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Currency conversion will be available soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Transaction history will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
