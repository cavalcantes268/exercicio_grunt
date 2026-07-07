module.exports = function(grunt) {

    // 1) Inicializando a configuração do Grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 2) Executar a compilação do LESS
        less: {
            production: {
                options: {
                    compress: true // Deixa o CSS minificado (comprimido)
                },
                files: {
                    // 'Destino' : 'Origem'
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        // 3) Executar a compressão de código JavaScript (Uglify)
        uglify: {
            production: {
                files: {
                    // 'Destino' : 'Origem'
                    'dist/js/main.min.js': ['src/js/main.js']
                }
            }
        }
    });

    // Carregando os plugins necessários
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Criando uma tarefa atalho chamada 'build' que roda o LESS e o Uglify juntos
    grunt.registerTask('build', ['less:production', 'uglify:production']);
};