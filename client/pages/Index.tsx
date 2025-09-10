import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Check, FileLock2, FolderLock, ShieldCheck, Sparkles, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DemoRequestPayload } from "@shared/api";

const DemoSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Valid email required"),
  company: z.string().min(1, "Company is required"),
  role: z.string().optional(),
  teamSize: z.string().optional(),
  phone: z.string().optional(),
  useCase: z.string().optional(),
  compliance: z.array(z.string()).optional(),
  agreeToPrivacy: z.literal(true, {
    errorMap: () => ({ message: "You must agree to continue" }),
  }),
});

export default function Index() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DemoRequestPayload>({ resolver: zodResolver(DemoSchema) });

  async function onSubmit(values: DemoRequestPayload) {
    const res = await fetch("/api/demo-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      const msg = await res.text();
      throw new Error(msg);
    }
    setSubmitted(true);
    reset();
  }

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container py-16 md:py-24 lg:py-28">
          <div className="min-h-[60vh] flex items-center">
            <div className="w-full">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white uppercase">
                ENCRYPT FIRST, PROTECT ALWAYS
              </h1>
              <p className="mt-4 text-lg text-white/90 max-w-3xl">
                ZECUREiT safeguards your documents from the moment they’re created, keeping client privilege secure and compliance effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column form + description section */}
      <section id="request-demo" className="w-full py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Left: Form column (narrow) */}
            <div className="w-full md:max-w-md">
              <div className="rounded-xl border border-[#f0d86e]/40 bg-[#D8F3E9] p-6 shadow-xl text-slate-900">
                <h2 className="text-2xl font-semibold text-slate-900">Request a live demo</h2>
                <p className="mt-1 text-sm text-slate-700">Tell us about your organization and we'll reach out with a personalized walkthrough.</p>

                {submitted ? (
                  <div className="mt-6 rounded-md bg-green-50 p-4 text-green-900 ring-1 ring-green-200">
                    Thanks! Your request has been received. We will contact you shortly.
                  </div>
                ) : (
                  <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-slate-900 font-semibold">Full name</Label>
                      <Input id="name" placeholder="Jane Doe" className="bg-white/95 text-slate-900 placeholder:text-slate-500 border-slate-200 focus-visible:ring-primary/40" {...register("name")} />
                      {errors.name && <FieldError message={errors.name.message} />}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-slate-900 font-semibold">Work email</Label>
                      <Input id="email" type="email" placeholder="jane@firm.com" className="bg-white/95 text-slate-900 placeholder:text-slate-500 border-slate-200 focus-visible:ring-primary/40" {...register("email")} />
                      {errors.email && <FieldError message={errors.email.message} />}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="company" className="text-slate-900 font-semibold">Company</Label>
                      <Input id="company" placeholder="Acme LLP" className="bg-white/95 text-slate-900 placeholder:text-slate-500 border-slate-200 focus-visible:ring-primary/40" {...register("company")} />
                      {errors.company && <FieldError message={errors.company.message} />}
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="role" className="text-slate-900 font-semibold">Role</Label>
                        <Input id="role" placeholder="Partner, IT Lead, Counsel" className="bg-white/95 text-slate-900 placeholder:text-slate-500 border-slate-200 focus-visible:ring-primary/40" {...register("role")} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="teamSize" className="text-slate-900 font-semibold">Team size</Label>
                        <Input id="teamSize" placeholder="25" className="bg-white/95 text-slate-900 placeholder:text-slate-500 border-slate-200 focus-visible:ring-primary/40" {...register("teamSize")} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="phone" className="text-slate-900 font-semibold">Phone (optional)</Label>
                        <Input id="phone" placeholder="(555) 123‑4567" className="bg-white/95 text-slate-900 placeholder:text-slate-500 border-slate-200 focus-visible:ring-primary/40" {...register("phone")} />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="useCase" className="text-slate-900 font-semibold">Primary use case</Label>
                      <Textarea id="useCase" placeholder="Briefly describe how your team shares sensitive documents today" className="bg-white/95 text-slate-900 placeholder:text-slate-500 border-slate-200 focus-visible:ring-primary/40" {...register("useCase")} />
                    </div>

                    <fieldset className="grid gap-3">
                      <legend className="text-sm font-medium text-slate-800">Compliance priorities</legend>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {(["HIPAA", "GDPR", "SOC 2"] as const).map((label) => (
                          <CheckboxItem key={label} value={label} register={register} />
                        ))}
                      </div>
                    </fieldset>

                    <div className="flex items-start gap-3">
                      <input id="agree" type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-400 bg-transparent text-primary focus:ring-primary checked:bg-primary checked:border-primary" {...register("agreeToPrivacy")} />
                      <Label htmlFor="agree" className="text-sm text-slate-700">I agree to the privacy policy and to be contacted about my request.</Label>
                    </div>
                    {errors.agreeToPrivacy && (
                      <FieldError message={errors.agreeToPrivacy.message as string} />
                    )}

                    <Button type="submit" className="mt-2 w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Request demo"}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Description column */}
            <div className="prose prose-lg max-w-none text-white/90">
              <p className="text-lg">ZECUREiT is a revolutionary security product that automatically encrypts documents before they are uploaded to any file‑sharing platform. Keep attorney‑client privilege intact and meet regulatory obligations with zero friction.</p>

              <ul className="mt-6 space-y-3 text-white">
                <li className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 text-primary" /><span>Local, client‑side encryption before transfer</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 text-primary" /><span>Seamless with your existing cloud tools</span></li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 text-primary" /><span>Designed for small‑to‑mid sized firms</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for security, designed for simplicity</h2>
          <p className="mt-3 text-muted-foreground">
            ZECUREiT integrates seamlessly into your workflow while enforcing strong
            encryption and access controls.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature icon={FileLock2} title="Client‑side encryption" desc="Documents are encrypted on your device before any upload or sync." />
          <Feature icon={Upload} title="Works with your tools" desc="Dropbox, Google Drive, OneDrive and more — no change management." />
          <Feature icon={ShieldCheck} title="Zero‑knowledge keys" desc="Only your organization holds the keys. We cannot access your data." />
          <Feature icon={FolderLock} title="Granular access" desc="Share securely with per‑file permissions and audit logs." />
          <Feature icon={Sparkles} title="Frictionless UX" desc="One‑click protection with automatic key management for teams." />
          <Feature icon={Check} title="Compliance ready" desc="Support for HIPAA, GDPR and SOC 2 workflows out of the box." />
        </div>
      </section>

      <section id="how-it-works" className="bg-muted/30 py-16 md:py-24">
        <div className="container grid gap-10 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Select your files",
              desc: "Choose files as usual in your cloud drive or DMS.",
            },
            {
              step: "2",
              title: "ZECUREiT encrypts",
              desc: "We encrypt locally with strong AES‑256 before upload.",
            },
            {
              step: "3",
              title: "Share securely",
              desc: "Recipients decrypt with your policies and audit trail.",
            },
          ].map((s) => (
            <div key={s.step} className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {s.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Feature({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <Icon className="h-6 w-6 text-primary" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold ring-1 ring-inset ring-border shadow-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {label}
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-sm text-destructive">{message}</p>;
}

function CheckboxItem({ value, register }: { value: string; register: ReturnType<typeof useForm>["register"] }) {
  const id = `comp-${value}`;
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-2 rounded-md border p-2 hover:bg-accent">
      <input id={id} type="checkbox" value={value} className="h-4 w-4 rounded border-slate-400 bg-transparent text-primary focus:ring-primary checked:bg-primary checked:border-primary" {...register("compliance")} />
      <span className="text-sm text-slate-700">{value}</span>
    </label>
  );
}
