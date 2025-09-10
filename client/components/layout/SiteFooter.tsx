export default function SiteFooter() {
  return (
    <footer className="border-t bg-white/10 py-10 backdrop-blur">
      <div className="container grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-xl font-semibold text-white">ZECUREiT by AKCode</p>
          <p className="text-sm text-white/90 max-w-prose">
            Seamless file encryption for small-to-mid sized firms. Documents are
            encrypted locally before any upload to ensure confidentiality and
            compliance.
          </p>
        </div>
        <div className="md:text-right text-white/90 text-sm">
          <p>© {new Date().getFullYear()} AKCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
