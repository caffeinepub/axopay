import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export default function PlanManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Plan Management</h1>
        <p className="text-muted-foreground">Configure investment plans</p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          This is a demonstration page. Full plan management functionality will be implemented with backend integration.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Investment Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Plan management features will be available soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}
