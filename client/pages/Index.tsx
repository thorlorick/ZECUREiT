import {
  Check,
  Zap,
  DollarSign,
  ShieldCheck,
  UserPlus,
  MousePointer,
  Eye,
} from "lucide-react";

export default function Index() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
              Small Business. Big Security.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90">
              Protect client, patient, and customer data with a single-click
              solution that’s affordable, compliance-ready (HIPAA, GDPR, FINRA),
              and requires no IT staff. Stop cyber threats before they stop your
              business.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Get Protected Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold">Why This Matters</h2>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <article className="rounded-xl bg-white/6 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/20 px-3 py-1 font-semibold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold">
                    The Cybersecurity Gap
                  </h3>
                </div>
                <p className="mt-4 text-white/80">
                  SMBs face the same threats as large enterprises — without the
                  same defenses. Cybercriminals know this and actively target
                  them.
                </p>
                <p className="mt-3 text-white/80">
                  46% of breaches hit companies under 1,000 employees, and 61%
                  of SMBs were attacked in 2021. That number keeps rising.
                </p>
                <p className="mt-3 text-white/80">
                  Top attack methods include Malware (18%), Phishing (17%), and
                  Ransomware (10%).
                </p>
                <p className="mt-3 font-semibold">
                  The reality: SMBs are on the front lines of today’s cyberwar —
                  and most don’t even know it.
                </p>
              </article>

              <article className="rounded-xl bg-white/6 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/20 px-3 py-1 font-semibold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold">
                    Why You Need Protection
                  </h3>
                </div>
                <p className="mt-4 text-white/80">
                  Most SMBs remain underprepared. Limited budgets and the belief
                  that they’re “too small to be targeted” leave businesses
                  exposed.
                </p>
                <p className="mt-3 text-white/80">
                  Cyberattacks aren’t just inconvenient — they can halt
                  operations, destroy client trust, and cost hundreds of
                  thousands of dollars to recover.
                </p>
                <p className="mt-3 text-white/80">
                  Our solutions are designed to fill the protection gap and
                  safeguard your business before it’s too late.
                </p>
                <p className="mt-3 font-semibold">
                  The choice is simple: stay vulnerable, or partner with experts
                  who keep you secure.
                </p>
              </article>

              <article className="rounded-xl bg-white/6 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/20 px-3 py-1 font-semibold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold">
                    The Cost of Inaction
                  </h3>
                </div>
                <p className="mt-4 text-white/80">
                  Breaches can be business-ending for SMBs. Global average
                  breach cost: $4.44M.
                </p>
                <p className="mt-3 text-white/80">
                  SMB incidents typically cost $826–$653K (95% of cases).
                </p>
                <p className="mt-3 text-white/80">
                  Other research shows $120K–$1.24M just to respond and recover.
                </p>
                <p className="mt-3 font-semibold">
                  For many small businesses, those costs aren’t just damaging —
                  they’re fatal.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-extrabold text-left">How It Works</h2>
              <p className="mt-4 text-white/80 text-left">Simple, effective protections designed for small teams — no heavy lift, no dedicated IT required.</p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900">Simple &amp; Seamless</h3>
                <p className="mt-3 text-slate-700">No complex setups, no steep learning curves. Our single-login platform integrates smoothly with the systems you already use, giving you enterprise-level protection without disrupting your workflow.</p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900">Affordable &amp; Low-Burden</h3>
                <p className="mt-3 text-slate-700">Security shouldn’t drain your budget or your team’s time. Our solution delivers enterprise-grade protection at a price built for small businesses, with minimal admin work so you can stay focused on your mission.</p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900">Compliance-Ready</h3>
                <p className="mt-3 text-slate-700">From healthcare to legal to financial services, compliance isn’t optional. Our platform is built to help you meet HIPAA, GDPR, FINRA, and other regulatory requirements — keeping client data safe and your business shielded from costly fines and reputational damage.</p>
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
                <p className="text-white">
                  “Finally, cybersecurity that doesn’t require a full IT
                  department!”
                </p>
                <cite className="mt-4 block text-sm text-white/80">
                  — Law Firm Client
                </cite>
              </blockquote>

              <blockquote className="rounded-xl bg-white/6 p-6">
                <p className="text-white">
                  “Affordable, easy to use, and keeps our practice
                  HIPAA-compliant.”
                </p>
                <cite className="mt-4 block text-sm text-white/80">
                  — Medical Office Client
                </cite>
              </blockquote>

              <div className="rounded-xl bg-white/6 p-6 flex flex-col items-center justify-center">
                <p className="font-semibold">Client Logos</p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="px-3 py-1 rounded bg-white/8">Acme</span>
                  <span className="px-3 py-1 rounded bg-white/8">
                    Bright Health
                  </span>
                  <span className="px-3 py-1 rounded bg-white/8">LawCo</span>
                </div>
                <div className="mt-4 text-sm text-white/80">
                  Rated 4.9 / 5 by our customers
                </div>
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
            <p className="mt-4 text-white/80">
              Plans designed for small teams, fully scalable.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white/6 p-6 text-left">
                <h3 className="text-xl font-semibold">Starter</h3>
                <p className="mt-2 text-white/80">
                  Everything a small office needs to get protected quickly.
                </p>
                <div className="mt-4 font-bold text-2xl">$29 / month</div>
              </div>

              <div className="rounded-xl bg-white/6 p-6 text-left">
                <h3 className="text-xl font-semibold">Growth</h3>
                <p className="mt-2 text-white/80">
                  Scalable controls for growing teams and additional compliance
                  needs.
                </p>
                <div className="mt-4 font-bold text-2xl">$79 / month</div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Start Protecting Your Business Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
