Hooks.on('init', () => {
    if (typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'pf2_cn',
            lang: 'cn',
            dir: 'compendium'
        });
    }
});

