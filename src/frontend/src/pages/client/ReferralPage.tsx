import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, Users, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://axopay.com/signup?ref=USER12345';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mockDownline = [
    { id: 1, name: 'John Doe', joinDate: '2026-02-15', plan: 'GROW', status: 'Active' },
    { id: 2, name: 'Jane Smith', joinDate: '2026-02-18', plan: 'BEGIN', status: 'Active' },
    { id: 3, name: 'Mike Johnson', joinDate: '2026-02-20', plan: 'PEAK', status: 'Active' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Referral System</h1>
        <p className="text-muted-foreground">Grow your network and earn commissions</p>
      </div>

      {/* Referral Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Direct Referrals</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-1">Active members</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Referral Earnings</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$450.00</div>
            <p className="text-xs text-success mt-1">10% commission</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Team Size</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground mt-1">Total network</p>
          </CardContent>
        </Card>
      </div>

      {/* Referral Link */}
      <Card>
        <CardHeader>
          <CardTitle>Your Referral Link</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input value={referralLink} readOnly />
            <Button onClick={handleCopy} className="flex-shrink-0">
              <Copy className="h-4 w-4 mr-2" />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Share this link to earn 10% commission on all direct referrals
          </p>
        </CardContent>
      </Card>

      {/* Downline List */}
      <Card>
        <CardHeader>
          <CardTitle>Direct Referrals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockDownline.map((member) => (
              <div key={member.id} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">Joined: {member.joinDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{member.plan}</p>
                  <p className="text-sm text-success">{member.status}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
