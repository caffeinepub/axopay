import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Award, CheckCircle2, Lock } from 'lucide-react';

export default function RewardsPage() {
  const milestones = [
    { id: 1, title: 'Team Builder', criteria: 'Recruit 10 members', current: 10, target: 10, reward: 50, claimed: true },
    { id: 2, title: 'Network Leader', criteria: 'Recruit 25 members', current: 24, target: 25, reward: 150, claimed: false },
    { id: 3, title: 'Volume Master', criteria: 'Generate $5,000 volume', current: 3200, target: 5000, reward: 250, claimed: false },
    { id: 4, title: 'Elite Earner', criteria: 'Earn $10,000 total', current: 2150, target: 10000, reward: 500, claimed: false }
  ];

  const claimedRewards = [
    { id: 1, milestone: 'Team Builder', date: '2026-02-15', amount: 50 },
    { id: 2, milestone: 'First Steps', date: '2026-02-10', amount: 25 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Milestone Rewards</h1>
        <p className="text-muted-foreground">Achieve milestones and earn bonus rewards</p>
      </div>

      {/* Active Milestones */}
      <div className="grid md:grid-cols-2 gap-6">
        {milestones.map((milestone) => {
          const progress = (milestone.current / milestone.target) * 100;
          const isComplete = progress >= 100;

          return (
            <Card key={milestone.id} className={isComplete ? 'border-success/50' : ''}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    {milestone.claimed ? (
                      <CheckCircle2 className="h-5 w-5 text-success" />
                    ) : isComplete ? (
                      <Award className="h-5 w-5 text-warning" />
                    ) : (
                      <Lock className="h-5 w-5 text-muted-foreground" />
                    )}
                    {milestone.title}
                  </span>
                  <span className="text-lg font-bold text-primary">${milestone.reward}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{milestone.criteria}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">
                      {milestone.current} / {milestone.target}
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                {milestone.claimed ? (
                  <Button variant="outline" disabled className="w-full">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Claimed
                  </Button>
                ) : isComplete ? (
                  <Button className="w-full">
                    <Award className="h-4 w-4 mr-2" />
                    Claim Reward
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full">
                    <Lock className="h-4 w-4 mr-2" />
                    Locked
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Claimed Rewards History */}
      <Card>
        <CardHeader>
          <CardTitle>Claimed Rewards History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {claimedRewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium">{reward.milestone}</p>
                    <p className="text-sm text-muted-foreground">{reward.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-success">+${reward.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
