import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export default function FinancialControlPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Financial Control</h1>
        <p className="text-muted-foreground">Manage deposits and withdrawals</p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          This is a demonstration page. Full financial control functionality will be implemented with backend integration.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Pending Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Financial control features will be available soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}
