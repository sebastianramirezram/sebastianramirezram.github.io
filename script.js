// A small rotating line in the footer — reload for a new one.
const CURRENTLY_THINKING_ABOUT = [
  "why summer jobs seem to outlast the summer",
  "whether “rule-following” is a trait or just a function of how tired you are",
  "how to model a decision no one wants to make explicit, like childcare",
  "the gap between what people say they'll do on a survey and what they actually do",
  "whether the Charles River path counts as a natural experiment in commuting",
  "how many working papers is too many working papers",
  "why economists keep rediscovering things psychologists already knew",
  "what a control group for a whole childhood would even look like",
];

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("[data-thinking]");
  if (el) {
    const pick = CURRENTLY_THINKING_ABOUT[Math.floor(Math.random() * CURRENTLY_THINKING_ABOUT.length)];
    el.textContent = pick;
  }

  // Quiet scroll-reveal for the larger editorial blocks only — not every
  // small card, so it reads as composition, not a wall of motion.
  const revealTargets = document.querySelectorAll(
    ".section-h, .paper-card, .photo-section, .amelia-hero, .amelia-section, .amelia-reveal"
  );
  if (revealTargets.length && "IntersectionObserver" in window) {
    revealTargets.forEach((t) => t.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach((t) => io.observe(t));
  }
});
