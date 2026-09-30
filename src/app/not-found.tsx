import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-surface-container-low paper-grid px-4 sm:px-6 lg:px-12 py-24 lg:py-32 min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full space-y-6">
        <div className="label-tech text-signal flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-signal" /> Error 404 • Route not found
        </div>
        <h1 data-split="chars" data-immediate className="text-display-hero-mobile lg:text-display-hero uppercase">
          Off the chain.
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-xl" data-reveal data-immediate>
          This page has slipped its pins. Head back to the machine range or start an enquiry.
        </p>
        <div className="flex flex-wrap gap-4" data-reveal data-immediate>
          <Button href="/">Back to home</Button>
          <Button href="/machines" variant="secondary" icon="">
            View machines
          </Button>
        </div>
      </div>
    </section>
  );
}
