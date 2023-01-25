export function resetDifficultStyles() {
  const diffs: NodeListOf<Element> = document.querySelectorAll(".diff__choice-item");
  for (const item of diffs) {
    (item as HTMLElement).style.backgroundColor = "#fff";
    (item as HTMLElement).style.transform = "none";
  }
}

export function toAnotherStyle(item) {
  item.style.backgroundColor = "yellow";
  item.style.transform = "scale(1.1)";
}
