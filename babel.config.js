const path = require("path");
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            // ... some other plugins
            [
                'module-resolver',
                {
                    alias: {
                        src: './src',
                        assets: './assets',
                        auth:'./src/features/auth',
                        components: './src/components'
                    },
                },
            ]
        ]
    };
};

