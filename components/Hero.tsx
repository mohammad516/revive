"use client";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[540px] items-center justify-center overflow-hidden">
      {/* Background image with parallax hint */}
      <img
        src="/hero1.jpg"
        alt="Clinic ambience"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />

      {/* Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <div className="[animation:fade-in_800ms_ease_both]">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Revive Wellness Center
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/90 md:text-lg">
            Advanced skincare and holistic wellness, delivered with luxury and care.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#book"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#00D0B0] px-7 py-3 text-sm font-medium text-black shadow-[0_8px_30px_rgb(0,208,176,0.35)] transition-all hover:scale-[1.03] hover:shadow-[0_10px_40px_rgb(0,208,176,0.5)] sm:w-auto"
            >
              Book Now
            </a>
            <a
              href="#treatments"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/80 px-7 py-3 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:bg-white hover:text-black sm:w-auto"
            >
              View Treatments
            </a>
          </div>
          {/* Reviews and certification icons intentionally removed */}
        </div>
      </div>
    </section>
  );
}
