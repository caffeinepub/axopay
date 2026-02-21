import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { GitBranch, TrendingUp, Users } from 'lucide-react';

export default function BinaryPage() {
  const binaryData = {
    leftVolume: 1250,
    rightVolume: 980,
    matchedPairs: 19,
    dailyLimit: 500,
    earnedToday: 380,
    carryForward: 270,
    pairIncome: 30 // GROW plan
  };

  const dailyProgress = (binaryData.earnedToday / binaryData.dailyLimit) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Binary System</h1>
        <p className="text-muted-foreground">Track your binary team and matching rewards</p>
      </div>

      {/* Binary Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Left Volume</CardTitle>
            <Users className="h-4 w-4 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${binaryData.leftVolume}</div>
            <p className="text-xs text-muted-foreground mt-1">Left leg total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Right Volume</CardTitle>
            <Users className="h-4 w-4 text-chart-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${binaryData.rightVolume}</div>
            <p className="text-xs text-muted-foreground mt-1">Right leg total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Matched Pairs</CardTitle>
            <GitBranch className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{binaryData.matchedPairs}</div>
            <p className="text-xs text-muted-foreground mt-1">${binaryData.pairIncome} per pair</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Carry Forward</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${binaryData.carryForward}</div>
            <p className="text-xs text-muted-foreground mt-1">Unmatched volume</p>
          </CardContent>
        </Card>
      </div>

      {/* Daily Limit Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Earnings Limit</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Earned Today</p>
              <p className="text-3xl font-bold text-success">${binaryData.earnedToday}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Daily Limit</p>
              <p className="text-3xl font-bold">${binaryData.dailyLimit}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">{dailyProgress.toFixed(0)}%</span>
            </div>
            <Progress value={dailyProgress} className="h-3" />
          </div>
          <p className="text-sm text-muted-foreground">
            Remaining: ${(binaryData.dailyLimit - binaryData.earnedToday).toFixed(2)}
          </p>
        </CardContent>
      </Card>

      {/* Binary Tree Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Binary Tree Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-8">
            <div className="text-center space-y-8">
              <div className="inline-block p-4 bg-primary/10 rounded-lg border-2 border-primary">
                <p className="font-semibold">You</p>
                <p className="text-sm text-muted-foreground">Root</p>
              </div>
              <div className="flex gap-12 justify-center">
                <div className="text-center space-y-2">
                  <div className="inline-block p-4 bg-chart-2/10 rounded-lg border-2 border-chart-2">
                    <p className="font-semibold">Left Team</p>
                    <p className="text-2xl font-bold">${binaryData.leftVolume}</p>
                    <p className="text-xs text-muted-foreground">12 members</p>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="inline-block p-4 bg-chart-1/10 rounded-lg border-2 border-chart-1">
                    <p className="font-semibold">Right Team</p>
                    <p className="text-2xl font-bold">${binaryData.rightVolume}</p>
                    <p className="text-xs text-muted-foreground">12 members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
