module.exports = function(grunt) {

    // 1) Inicializando a configuração do Grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 2) Executar a compilação e minificação do LESS
        less: {
            producao: {
                options: {
                    compress: true // Deixa o CSS minificado (comprimido)
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        // 3) Executar a compressão de código JavaScript (Uglify)
        uglify: {
            producao: {
                files: {
                    'dist/js/main.min.js': ['src/js/main.js']
                }
            }
        },

        // 4) Substituir as tags @@ do HTML pelos caminhos corretos da pasta dist
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_CSS',
                            replacement: './styles/main.min.css' // Caminho relativo correto dentro de dist/
                        },
                        {
                            match: 'ENDERECO_JS',
                            replacement: './js/main.min.js' // Caminho relativo correto dentro de dist/
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'], // Pega o HTML original com as tags @@
                        dest: 'dist/'            // Joga o HTML processado para a pasta dist/
                    }
                ]
            }
        },

        // 5) Opcional: Minifica o HTML que foi gerado na pasta dist/
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html' // Sobrescreve o arquivo deixando-o minificado
                }
            }
        }
    });

    // Carregando todos os plugins necessários que estão no seu package.json
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Criando a tarefa 'build' que executa todo o ecossistema na ordem exata e correta
    grunt.registerTask('build', ['less:producao', 'uglify:producao', 'replace:dist', 'htmlmin:dist']);
};