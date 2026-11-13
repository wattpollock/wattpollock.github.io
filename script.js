/* ==========================================================================
   Matthew Pollock — Portfolio Scripts
   Builds the project cards on the page from the list below.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. Project Data
   To add a project: copy a line and change the title/desc.
   -------------------------------------------------------------------------- */
const projects = [
  { title: "Proxmox + Tailscale", desc: "Set up a Proxmox host with secure remote access over Tailscale." },
  { title: "Kali VM + WireGuard",  desc: "Built a Kali Linux VM and connected to a CTF network over WireGuard VPN." },
  { title: "Wazuh SIEM",           desc: "Log monitoring and intrusion detection lab (in progress)." },
  { title: "Home NAS",             desc: "Converted a laptop into a network-attached file server." }
];

/* --------------------------------------------------------------------------
   2. Render Cards
   Uses textContent (not innerHTML) so any text is rendered as plain text
   and can never be executed as HTML/script — this is the XSS-safe pattern.
   -------------------------------------------------------------------------- */
const grid = document.getElementById("projects");

projects.forEach(function (project) {
  const card = document.createElement("div");
  card.className = "card";

  const heading = document.createElement("h3");
  heading.textContent = project.title;   // safe: rendered as text

  const para = document.createElement("p");
  para.textContent = project.desc;       // safe: rendered as text

  card.appendChild(heading);
  card.appendChild(para);
  grid.appendChild(card);
});
