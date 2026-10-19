const discord = document.getElementById("discord");
discord.addEventListener("click", (e) => {
  if (e.ctrlKey || e.metaKey) return;
  e.preventDefault();
  navigator.clipboard.writeText("legentilbeta").then(() => {
    const old = discord.textContent;
    discord.textContent = "pseudo copié !";
    setTimeout(() => (discord.textContent = old), 1400);
  });
});