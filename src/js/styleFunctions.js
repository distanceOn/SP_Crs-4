export function resetDifficultStyles() {
  const diffs = document.querySelectorAll(".diff__choice-item");
  for (const item of diffs) {
    item.style.backgroundColor = "#fff";
    item.style.transform = "none";
  }
}

export function toAnotherStyle(item) {
  item.style.backgroundColor = "yellow";
  item.style.transform = "scale(1.1)";
}
