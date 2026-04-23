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

 document.addEventListener('astro:page-load', lightMode);