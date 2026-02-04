export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="section-card space-y-4">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="text-white/70">
          Let’s discuss your next project. I respond within 24 hours for new inquiries.
        </p>
        <form className="grid gap-4 md:grid-cols-2">
          <input
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
            placeholder="Name"
            name="name"
          />
          <input
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
            placeholder="Email"
            name="email"
            type="email"
          />
          <input
            className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
            placeholder="Tell me about your project"
            name="message"
            rows={5}
          />
          <button
            type="submit"
            className="w-fit rounded-full bg-primary px-6 py-2 text-sm font-semibold"
          >
            Send message
          </button>
        </form>
      </section>

      <section className="section-card grid gap-4 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Email</p>
          <p className="text-lg font-semibold">hello@portfolio.dev</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Phone</p>
          <p className="text-lg font-semibold">+1 (555) 555-5555</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Location</p>
          <p className="text-lg font-semibold">Remote / Global</p>
        </div>
      </section>
    </div>
  );
}
