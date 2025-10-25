import TopBanner from "@/components/banner/TopBanner";
import Header from "@/components/header/Header";

export default function LandingPage() {
  return (
    <>
      {/* Banner now sits above the header naturally */}
      <TopBanner />
      <div className="mb-5" />
      <Header/>

      {/* Spacer for sticky header only */}
      <div className="h-16" />

      {/* HERO */}
      <section
        id="hero"
        className="min-h-[70vh] flex items-center justify-center bg-gray-50"
      >
        <div className="max-w-5xl px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Stay in the loop on your PRs
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            DevLoop brings your projects, pull requests, and reviews into one beautiful dashboard.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="scroll-mt-20 py-24 border-t border-gray-200 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900">Features</h2>
          <p className="mt-2 text-gray-600">
            Smart PR tracking, status at a glance, and more.
          </p>
          {/* cards go here */}
        </div>
      </section>

      {/* AGENT */}
      <section
        id="agent"
        className="scroll-mt-20 py-24 border-t border-gray-200 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900">Agent</h2>
          <p className="mt-2 text-gray-600">
            Automations that create branches, open PRs, and nudge reviewers.
          </p>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section
        id="integrations"
        className="scroll-mt-20 py-24 border-t border-gray-200 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900">Integrations</h2>
          <p className="mt-2 text-gray-600">
            GitHub, Slack, and email—more coming soon.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-gray-50 py-10 text-center text-gray-600">
        © {new Date().getFullYear()} DevLoop
      </footer>
    </>
  );
}
