(function () {
  const buttons = window.BUTTONS || [];
  const grid = document.getElementById("grid");
  const filters = document.getElementById("filters");
  const search = document.getElementById("search");
  const count = document.getElementById("count");

  let activeTag = "all";

  // Load every button's CSS once so the previews work.
  const style = document.createElement("style");
  style.textContent = buttons.map((b) => b.css).join("\n\n");
  document.head.appendChild(style);

  const tags = ["all", ...new Set(buttons.flatMap((b) => b.tags))];
  tags.forEach((tag) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "g-chip";
    chip.textContent = tag;
    chip.setAttribute("aria-pressed", String(tag === activeTag));
    chip.addEventListener("click", () => {
      activeTag = tag;
      filters.querySelectorAll(".g-chip").forEach((c) => {
        c.setAttribute("aria-pressed", String(c.textContent === tag));
      });
      render();
    });
    filters.appendChild(chip);
  });

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    return Promise.resolve();
  }

  function createCard(item, index) {
    const card = document.createElement("article");
    card.className = "g-card";

    const preview = document.createElement("div");
    preview.className = "g-preview";
    if (item.bg) preview.style.background = item.bg;
    preview.innerHTML = item.html;

    const head = document.createElement("div");
    head.className = "g-card-head";
    head.innerHTML = `<h2></h2><span class="g-num">#${String(index + 1).padStart(2, "0")}</span>`;
    head.querySelector("h2").textContent = item.name;

    const tabs = document.createElement("div");
    tabs.className = "g-tabs";
    const code = document.createElement("pre");
    code.className = "g-code";
    const codeEl = document.createElement("code");
    code.appendChild(codeEl);

    let current = "html";
    const show = (lang) => {
      current = lang;
      codeEl.textContent = item[lang];
      tabs.querySelectorAll("[data-lang]").forEach((t) => {
        t.setAttribute("aria-pressed", String(t.dataset.lang === lang));
      });
    };

    ["html", "css"].forEach((lang) => {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "g-tab";
      tab.dataset.lang = lang;
      tab.textContent = lang.toUpperCase();
      tab.addEventListener("click", () => show(lang));
      tabs.appendChild(tab);
    });

    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "g-copy";
    copy.textContent = "Copy";
    copy.addEventListener("click", () => {
      copyText(item[current]).then(() => {
        copy.textContent = "Copied!";
        copy.classList.add("is-done");
        setTimeout(() => {
          copy.textContent = "Copy";
          copy.classList.remove("is-done");
        }, 1500);
      });
    });
    tabs.appendChild(copy);

    show("html");
    card.append(preview, head, tabs, code);
    return card;
  }

  function render() {
    const q = search.value.trim().toLowerCase();
    const list = buttons
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => activeTag === "all" || item.tags.includes(activeTag))
      .filter(({ item }) => !q || item.name.toLowerCase().includes(q) || item.tags.some((t) => t.includes(q)));

    grid.replaceChildren(...list.map(({ item, index }) => createCard(item, index)));
    count.textContent = list.length
      ? `Showing ${list.length} of ${buttons.length} buttons`
      : "No buttons match that search. Try another word.";
  }

  search.addEventListener("input", render);
  render();
})();
