import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, TrendingUp } from 'lucide-react';

export default function PlansPage() {
  const plans = [
    { name: 'BEGIN', price: 100, color: 'from-chart-1 to-chart-1/70' },
    { name: 'GROW', price: 300, color: 'from-chart-2 to-chart-2/70', featured: true },
    { name: 'PEAK', price: 500, color: 'from-chart-3 to-chart-3/70' }
  ];

  const activePlan = {
    name: 'GROW',
    invested: 300,
    roiPercentage: 5,
    daysElapsed: 19,
    totalDays: 30,
    earned: 285,
    remaining: 165
  };

  const progress = (activePlan.daysElapsed / activePlan.totalDays) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Investment Plans</h1>
        <p className="text-muted-foreground">Choose your plan and track your ROI progress</p>
      </div>

      {/* Active Plan ROI Tracker */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Active Plan: {activePlan.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Invested</p>
              <p className="text-2xl font-bold">${activePlan.invested}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Daily ROI</p>
              <p className="text-2xl font-bold">{activePlan.roiPercentage}%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Earned</p>
              <p className="text-2xl font-bold text-success">${activePlan.earned}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Remaining</p>
              <p className="text-2xl font-bold">${activePlan.remaining}</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress: Day {activePlan.daysElapsed} of {activePlan.totalDays}</span>
              <span className="font-medium">{progress.toFixed(0)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          <div className="flex justify-between items-center pt-2">
            <p className="text-sm text-muted-foreground">
              Plan expires in {activePlan.totalDays - activePlan.daysElapsed} days
            </p>
            <Button variant="outline" size="sm">View Details</Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Available Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.featured ? 'border-primary border-2 shadow-glow' : ''}>
              {plan.featured && (
                <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-xl mb-2">{plan.name}</div>
                  <div className={`text-4xl font-bold bg-gradient-to-br ${plan.color} bg-clip-text text-transparent`}>
                    ${plan.price}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {[
                    '5% daily returns',
                    '30-day duration',
                    '10% referral bonus',
                    'Binary pair rewards',
                    'Milestone bonuses'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full" variant={plan.featured ? 'default' : 'outline'}>
                  Purchase Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
