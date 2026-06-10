export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-stack-lg border-t border-white/5">
      <div className="max-w-container mx-auto px-6 md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-display text-[18px] font-bold text-on-surface">KuDesign</span>
          <p className="text-label-md text-on-tertiary-container max-w-xs text-center md:text-left capitalize">
            © 2024 KuDesign Limited. Hong Kong Roots, Global Vision.
          </p>
        </div>
        <div className="flex gap-stack-md flex-wrap justify-center">
          <a className="text-label-md text-on-tertiary-container hover:text-primary transition-colors cursor-pointer capitalize">Privacy Policy</a>
          <a className="text-label-md text-on-tertiary-container hover:text-primary transition-colors cursor-pointer capitalize">Terms of Service</a>
          <a className="text-label-md text-on-tertiary-container hover:text-primary transition-colors cursor-pointer capitalize">LinkedIn</a>
          <a className="text-label-md text-on-tertiary-container hover:text-primary transition-colors cursor-pointer capitalize">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
