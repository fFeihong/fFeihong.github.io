document.addEventListener("DOMContentLoaded", () => {
    // เปลี่ยน <title>
    document.title = `${siteConfig.siteName} - ${siteConfig.pageNav0}`;

    // เปลี่ยน <h1>
    const heroName = document.getElementById("hero-name");
    if(heroName) heroName.textContent = siteConfig.siteName;

    // เปลี่ยน href ของ social links
    for (const [key, url] of Object.entries(siteConfig.socialLinks)) {
        const link = document.getElementById(`link-${key}`);
        if(link) link.href = url;
    }
});