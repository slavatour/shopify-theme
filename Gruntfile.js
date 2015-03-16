module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shopify');

    grunt.initConfig({
        shopify: {
            options: {
                //You can find these in your Shopify Admin under Apps then look at the bottom for Create a private API Key
                api_key: "494b9a199ac10848b56cfd745720108a",
                password: "ed5b9ff5e2fc83771e86c87e9a315fe3",
                url: "cube-8.myshopify.com",
                base: 'shop/'
            }
        },
        watch: {
            shopify: {
                files: ['shop/**'],
                tasks: ["shopify"]
            }
        }

    });

    grunt.registerTask('default', ['shopify']);

};