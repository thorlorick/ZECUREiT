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
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-4xl font-extrabold text-left">Why This Matters</h2>
              <p className="mt-4 text-white/80 text-left">Small teams are frequent targets for attackers. Reducing friction while enforcing strong protections keeps your people, clients, and reputation safe without adding operational burden.</p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900">The Cybersecurity Gap</h3>
                <p className="mt-3 text-slate-700">SMBs face the same threats as large enterprises — without the same defenses. Cybercriminals know this and actively target them.</p>
                <p className="mt-3 text-slate-700">46% of breaches hit companies under 1,000 employees, and 61% of SMBs were attacked in 2021. That number keeps rising.</p>
                <p className="mt-3 text-slate-700">Top attack methods include Malware (18%), Phishing (17%), and Ransomware (10%).</p>
                <p className="mt-3 font-semibold text-slate-900">The reality: SMBs are on the front lines of today’s cyberwar — and most don’t even know it.</p>
              </article>

              <article className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900">Why You Need Protection</h3>
                <p className="mt-3 text-slate-700">Most SMBs remain underprepared. Limited budgets and the belief that they’re “too small to be targeted” leave businesses exposed.</p>
                <p className="mt-3 text-slate-700">Cyberattacks aren’t just inconvenient — they can halt operations, destroy client trust, and cost hundreds of thousands of dollars to recover.</p>
                <p className="mt-3 text-slate-700">Our solutions are designed to fill the protection gap and safeguard your business before it’s too late.</p>
                <p className="mt-3 font-semibold text-slate-900">The choice is simple: stay vulnerable, or partner with experts who keep you secure.</p>
              </article>

              <article className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900">The Cost of Inaction</h3>
                <p className="mt-3 text-slate-700">Breaches can be business-ending for SMBs. Global average breach cost: $4.44M.</p>
                <p className="mt-3 text-slate-700">SMB incidents typically cost $826–$653K (95% of cases).</p>
                <p className="mt-3 text-slate-700">Other research shows $120K–$1.24M just to respond and recover.</p>
                <p className="mt-3 font-semibold text-slate-900">For many small businesses, those costs aren’t just damaging — they’re fatal.</p>
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
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-4xl font-extrabold text-left">Trusted by small teams</h2>
              <p className="mt-4 text-white/80 text-left">Real customers, real outcomes — teams that lowered risk and simplified compliance without a big IT lift.</p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="rounded-xl bg-white p-6 shadow-md">
                <p className="text-slate-700">“Before switching to ZECUREiT, we were juggling spreadsheets, patchy tools, and an overwhelming compliance checklist. Setup took less than an hour, and the single-login dashboard gave us immediate visibility — no IT team required. Within weeks we felt genuinely protected, and our partners noticed the difference in how confidently we handle client data.”</p>
                <cite className="mt-4 block text-sm text-slate-600">— Dr. Maya Rios, Clinic Director, BrightLeaf Medspa</cite>
              </article>

              <article className="rounded-xl bg-white p-6 shadow-md">
                <p className="text-slate-700">“We used to assume compliance was a full-time job. ZECUREiT changed that — it integrated with our practice management system seamlessly and made HIPAA compliance something our staff actually understands. The cost is reasonable, the admin work is minimal, and the peace of mind is priceless. It’s the easiest security decision we’ve made all year.”</p>
                <cite className="mt-4 block text-sm text-slate-600">— Alan Cho, Managing Partner, Harbor &amp; Cho Legal</cite>
              </article>

              <article className="rounded-xl bg-white p-6 shadow-md">
                <p className="text-slate-700">“A ransomware scare last year nearly shut us down. After implementing ZECUREiT, our exposure dropped immediately and audits became straightforward instead of stressful. The single-click protections and concise reporting let our small team stay focused on clients, not firefighting security issues — and the ROI was obvious within months.”</p>
                <cite className="mt-4 block text-sm text-slate-600">— Priya Nair, Operations Lead, NorthPoint Financial Advisors</cite>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-4xl font-extrabold text-left">Simple Pricing, No Surprises</h2>
              <p className="mt-4 text-white/80 text-left">Plans designed for small teams, fully scalable.</p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl bg-white p-6 shadow-md text-left">
                <h3 className="text-2xl font-bold text-slate-900">Starter</h3>
                <p className="mt-3 text-slate-700">Everything a small office needs to get protected quickly.</p>
                <div className="mt-4 font-bold text-2xl text-slate-900">$29 / month</div>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md text-left">
                <h3 className="text-2xl font-bold text-slate-900">Growth</h3>
                <p className="mt-3 text-slate-700">Scalable controls for growing teams and additional compliance needs.</p>
                <div className="mt-4 font-bold text-2xl text-slate-900">$79 / month</div>
              </div>
            </div>

            <div className="md:col-span-2 mt-8 text-center">
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
