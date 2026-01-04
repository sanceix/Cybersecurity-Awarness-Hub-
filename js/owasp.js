const items = document.querySelectorAll(".owasp-item");
const panels = document.querySelectorAll(".owasp-panel");

items.forEach(item=>{
  item.onclick=()=>{
    items.forEach(i=>i.classList.remove("active"));
    panels.forEach(p=>p.classList.remove("active"));

    item.classList.add("active");
    document.querySelector(
      `.owasp-panel[data-owasp-content="${item.dataset.owasp}"]`
    ).classList.add("active");
  };
});
