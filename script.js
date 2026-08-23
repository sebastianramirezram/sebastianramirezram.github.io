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
  if (!el) return;
  const pick = CURRENTLY_THINKING_ABOUT[Math.floor(Math.random() * CURRENTLY_THINKING_ABOUT.length)];
  el.textContent = pick;
});
