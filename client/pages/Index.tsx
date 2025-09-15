import { Check, Zap, DollarSign, ShieldCheck, UserPlus, MousePointer, Eye } from "lucide-react";

export default function Index() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">Small Business. Big Security.</h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90">
              Protect client, patient, and customer data with a single-click solution that’s affordable, compliance-ready (HIPAA, GDPR, FINRA), and requires no IT staff. Stop cyber threats before they stop your business.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="#pricing" className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                Get Protected Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold">Why This Matters</h2>
              <p className="mt-4 text-white/80">
                Small teams are frequent targets for attackers. Reducing friction while enforcing strong protections keeps your people, clients, and reputation safe without adding operational burden.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-lg bg-white/6 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Simple & Seamless</h3>
                  <p className="text-white/80">One-login platform, integrates with your existing systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-lg bg-white/6 p-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Affordable & Low-Burden</h3>
                  <p className="text-white/80">Implement enterprise-grade security without diverting funds from your core mission.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-lg bg-white/6 p-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Compliance-Ready</h3>
                  <p className="text-white/80">Meets standards like HIPAA, GDPR, FINRA so your business stays protected legally and ethically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="mt-4 text-white/80">Protect sensitive data and meet regulatory standards effortlessly — no IT headaches, no extra staff required.</p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/6">
                    <UserPlus className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sign Up & Connect</h4>
                    <p className="text-white/80">Quick setup with your existing tools.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/6">
                    <MousePointer className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Single-Click Compliance</h4>
                    <p className="text-white/80">Security and regulatory protection activated immediately.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/6">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Monitor & Protect</h4>
                    <p className="text-white/80">Real-time alerts, minimal maintenance required.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              {/* Simple phone/mockup visual */}
              <div className="relative w-64 h-128 rounded-3xl bg-gradient-to-b from-white/6 to-white/4 p-6 shadow-xl">
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-b from-black/80 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-10 w-20 rounded bg-white/8" />
                  <div className="mx-auto w-40 h-64 rounded bg-gradient-to-b from-primary/30 to-transparent" />
                  <div className="h-6 w-24 rounded bg-white/6 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section id="testimonials" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Trusted by small teams</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <blockquote className="rounded-xl bg-white/6 p-6">
                <p className="text-white">“Finally, cybersecurity that doesn’t require a full IT department!”</p>
                <cite className="mt-4 block text-sm text-white/80">— Law Firm Client</cite>
              </blockquote>

              <blockquote className="rounded-xl bg-white/6 p-6">
                <p className="text-white">“Affordable, easy to use, and keeps our practice HIPAA-compliant.”</p>
                <cite className="mt-4 block text-sm text-white/80">— Medical Office Client</cite>
              </blockquote>

              <div className="rounded-xl bg-white/6 p-6 flex flex-col items-center justify-center">
                <p className="font-semibold">Client Logos</p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="px-3 py-1 rounded bg-white/8">Acme</span>
                  <span className="px-3 py-1 rounded bg-white/8">Bright Health</span>
                  <span className="px-3 py-1 rounded bg-white/8">LawCo</span>
                </div>
                <div className="mt-4 text-sm text-white/80">Rated 4.9 / 5 by our customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Simple Pricing, No Surprises</h2>
            <p className="mt-4 text-white/80">Plans designed for small teams, fully scalable.</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white/6 p-6 text-left">
                <h3 className="text-xl font-semibold">Starter</h3>
                <p className="mt-2 text-white/80">Everything a small office needs to get protected quickly.</p>
                <div className="mt-4 font-bold text-2xl">$29 / month</div>
              </div>

              <div className="rounded-xl bg-white/6 p-6 text-left">
                <h3 className="text-xl font-semibold">Growth</h3>
                <p className="mt-2 text-white/80">Scalable controls for growing teams and additional compliance needs.</p>
                <div className="mt-4 font-bold text-2xl">$79 / month</div>
              </div>
            </div>

            <div className="mt-8">
              <a href="#" className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                Start Protecting Your Business Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
