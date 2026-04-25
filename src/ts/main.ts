function lightMode(){
    const theme = (() => {
        if( typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme') as string;
        }
        return 'dark';
    })();

    if(theme === 'light'){
        document.documentElement.classList.add('light');
    }else{
        document.documentElement.classList.remove('light');
    }

    window.localStorage.setItem('theme', theme);

    const handleToggleClick = () => {
        const element = document.documentElement
        element.classList.toggle('light');
        const isLightMode = element.classList.contains('light');
        window.localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    }

    document.getElementById('themeToggle')?.addEventListener('click', handleToggleClick);  

}

function menuNavbar(){
        const burgerBtn = document.getElementById('burger-btn');
        const closeBtn = document.getElementById('close-menu');
        const menu = document.getElementById('mobile-menu');
        const menuItems = document.querySelectorAll('.menu-item');

        if (burgerBtn && closeBtn && menu) {
            const openMenu = () => {
                menu.classList.remove('opacity-0', 'pointer-events-none');
                menu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.classList.add('overflow-hidden');
                
                menuItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.remove('opacity-0', 'translate-y-4');
                        item.classList.add('opacity-100', 'translate-y-0');
                    }, index * 100); 
                });
            };

            const closeMenu = () => {
                menu.classList.add('opacity-0', 'pointer-events-none');
                menu.classList.remove('opacity-100', 'pointer-events-auto');
                document.body.classList.remove('overflow-hidden');
                
                menuItems.forEach((item) => {
                    item.classList.add('opacity-0', 'translate-y-4');
                    item.classList.remove('opacity-100', 'translate-y-0');
                });
            };

            burgerBtn.addEventListener('click', openMenu);
            closeBtn.addEventListener('click', closeMenu);
            menuItems.forEach(item => item.addEventListener('click', closeMenu));
        }
}

 document.addEventListener('astro:page-load', lightMode);
document.addEventListener('astro:page-load', menuNavbar);