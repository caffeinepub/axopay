import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export default function RewardsManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Rewards Management</h1>
        <p className="text-muted-foreground">Configure milestone rewards</p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          This is a demonstration page. Full rewards management functionality will be implemented with backend integration.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Milestone Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Rewards management features will be available soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}
