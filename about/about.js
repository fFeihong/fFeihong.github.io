document.addEventListener("DOMContentLoaded", () => {
    // เปลี่ยน <title>
    document.title = `${siteConfig.siteName} - ${siteConfig.pageNav1}`;

    // เปลี่ยน <h1>
    const heroName = document.getElementById("hero-name");
    if(heroName) heroName.textContent = siteConfig.siteName;

    // --- เพิ่ม highlight menu ปัจจุบัน ---
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname; // ตัวอย่าง: "/home/index.html"

    navLinks.forEach(link => {
        // ลบ ../ ก่อนตรวจสอบ
        const linkPath = link.getAttribute('href').replace('../', '/');
        if(linkPath === currentPath || linkPath === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });

});