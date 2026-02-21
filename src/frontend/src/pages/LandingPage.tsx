import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Globe, Zap, Lock, TrendingUp, Users, Award, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-secondary/90" />
        </div>
        
        <div className="container relative z-10 px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Borderless Payments.<br />Limitless Possibilities.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Modern digital finance platform for global transactions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/signup">
                <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-glow">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What is AXOPAY?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your gateway to seamless global financial transactions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Globe, title: 'Global Money Transfer', desc: 'Send and receive money worldwide instantly' },
              { icon: Zap, title: 'Payment Receiving', desc: 'Accept payments from anywhere, anytime' },
              { icon: TrendingUp, title: 'Instant Currency Swap', desc: 'Convert currencies at competitive rates' },
              { icon: Shield, title: 'Multi-Currency Wallet', desc: 'One secure wallet for all your currencies' }
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 transition-all hover:shadow-glow-sm">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose AXOPAY?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-destructive flex items-center gap-2">
                <XCircle className="h-6 w-6" /> Traditional Problems
              </h3>
              {['Expensive fees', 'Slow processing', 'Complex procedures', 'Limited access'].map((problem, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{problem}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-success flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" /> AXOPAY Solutions
              </h3>
              {[
                'International payment gateway',
                'Multi-currency support',
                'Instant swap technology',
                'Unified wallet system',
                'Cyber-security focus'
              ].map((solution, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-success/5 rounded-lg border border-success/20">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/assets/generated/shield-icon.dim_256x256.png" 
                  alt="Security Shield" 
                  className="w-64 h-64 mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">Security & Trust</h2>
                <p className="text-lg text-muted-foreground">
                  Your financial security is our top priority. We employ industry-leading security measures to protect your assets.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Lock, text: 'End-to-end encryption' },
                    { icon: Shield, text: 'Secure infrastructure' },
                    { icon: CheckCircle2, text: 'Fraud detection' },
                    { icon: TrendingUp, text: 'Advanced monitoring' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-lg">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Capability Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-bold">Global Capability</h2>
                <p className="text-lg text-muted-foreground">
                  Expand your business globally with our comprehensive payment infrastructure.
                </p>
                <ul className="space-y-4">
                  {[
                    'Accept international payments',
                    'Multi-currency processing',
                    'Scalable global gateway'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/assets/generated/global-network.dim_800x600.png" 
                  alt="Global Network" 
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Plans & Benefits</h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your investment goals
            </p>
            <div className="mt-6 inline-block px-6 py-3 bg-primary/10 rounded-full">
              <p className="text-sm font-medium">Example: <span className="text-primary font-bold">5% daily returns × 30 days</span></p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'BEGIN', price: '$100', color: 'from-chart-1 to-chart-1/70' },
              { name: 'GROW', price: '$300', color: 'from-chart-2 to-chart-2/70', featured: true },
              { name: 'PEAK', price: '$500', color: 'from-chart-3 to-chart-3/70' }
            ].map((plan, i) => (
              <Card key={i} className={`relative overflow-hidden ${plan.featured ? 'border-primary border-2 shadow-glow' : ''}`}>
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    Popular
                  </div>
                )}
                <CardContent className="pt-6 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className={`text-5xl font-bold bg-gradient-to-br ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span className="text-sm">5% daily returns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span className="text-sm">30-day duration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span className="text-sm">Referral bonuses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                      <span className="text-sm">Binary rewards</span>
                    </div>
                  </div>
                  <img 
                    src="/assets/generated/growth-chart.dim_600x400.png" 
                    alt="Growth Chart" 
                    className="w-full rounded-lg opacity-80"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referral System Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/assets/generated/binary-tree.dim_400x400.png" 
                  alt="Binary Tree" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">Referral System</h2>
                <p className="text-lg text-muted-foreground">
                  Earn more by building your network and helping others succeed.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg border">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="h-6 w-6 text-primary" />
                      <h4 className="font-semibold text-lg">10% Direct Bonus</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Earn 10% commission on direct referrals</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                      <h4 className="font-semibold text-lg">Multi-Level Earnings</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Build your team and earn from multiple levels</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="h-6 w-6 text-accent" />
                      <h4 className="font-semibold text-lg">Binary Pairing Rewards</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Pair income: <span className="font-bold">$10 / $30 / $50</span> per matched pair
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">Daily limits apply • Volume carry-forward • Milestone rewards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-secondary text-white">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">
              Join AXOPAY Today — Secure Your Financial Future
            </h2>
            <p className="text-xl text-white/90">
              Start your journey towards financial freedom with our trusted platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/signup">
                <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-glow">
                  Create Account <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
