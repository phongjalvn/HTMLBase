// Generated on 2013-08-07 using generator-webapp 0.2.7
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
    port: LIVERELOAD_PORT
});
var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var threeForComConfig = {
        src: 'src',
        dist: 'dist'
    };

    grunt.initConfig({
        threeForCom: threeForComConfig,
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= threeForCom.src %>',
                    dest: '<%= threeForCom.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'css/fonts/*'
                    ]
                },{
                    expand: true,
                    dot: true,
                    cwd: '<%= threeForCom.src %>/components',
                    dest: '<%= threeForCom.dist %>/vendor',
                    src: [
                        '**/*'
                    ]
                },{
                    expand: true,
                    dot: true,
                    cwd: '<%= threeForCom.src %>/components/flexslider/fonts',
                    dest: '<%= threeForCom.dist %>/css/fonts',
                    src: [
                        '*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= threeForCom.src %>/css',
                dest: '.tmp/css/',
                src: '{,*/}*.css'
            }
        },
        watch: {
            coffee: {
                files: ['<%= threeForCom.src %>/js/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: ['<%= threeForCom.src %>/css/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer', 'csslint']
            },
            less: {
                files: ['<%= threeForCom.src %>/css/{,*/}*.less'],
                tasks: ['less:dist', 'autoprefixer', 'csslint']
            },
            stylus: {
                files: ['<%= threeForCom.src %>/css/{,*/}*.styl'],
                tasks: ['stylus:dist', 'autoprefixer', 'csslint']
            },
            styles: {
                files: ['<%= threeForCom.src %>/css/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer', 'csslint']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= threeForCom.src %>/*.html',
                    '.tmp/css/{,*/}*.css',
                    '{.tmp,<%= threeForCom.src %>}/js/{,*/}*.js',
                    '<%= threeForCom.src %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, threeForComConfig.src)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function(connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function(connect) {
                        return [
                            mountFolder(connect, threeForComConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= threeForCom.dist %>/*',
                        '!<%= threeForCom.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= threeForCom.src %>/js/{,*/}*.js',
                '!<%= threeForCom.src %>/js/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        coffee: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= threeForCom.src %>/js',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/js',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },
        compass: {
            options: {
                sassDir: '<%= threeForCom.src %>/css',
                cssDir: '.tmp/css',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= threeForCom.src %>/images',
                javascriptsDir: '<%= threeForCom.src %>/js',
                fontsDir: '<%= threeForCom.src %>/css/fonts',
                importPath: '<%= threeForCom.src %>/components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/css/fonts',
                relativeAssets: true
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= threeForCom.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        less: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= threeForCom.src %>/css',
                    src: '{,*/}*.less',
                    dest: '.tmp/css',
                    ext: '.css'
                }]
            }
        },
        stylus: {
            dist: {
                options: {
                    compress: false,
                    urlfunc: 'embedurl',
                    use: [
                        require('fluidity') // use stylus plugin at compile time
                    ]
                },
                files: [{
                    expand: true,
                    cwd: '<%= threeForCom.src %>/css',
                    src: '{,*/}*.styl',
                    dest: '.tmp/css',
                    ext: '.css'
                }]
            }
        },
        csslint: {
            options: {
                // 'adjoining-classes': false,
                'box-model': false,
                'box-sizing': false,
                'compatible-vendor-prefixes': false,
                'font-sizes': false,
                'gradients': false,
                'important': false,
                'outline-none': false,
                'qualified-headings': false,
                // 'regex-selectors': false,
                'text-indent': false,
                'unique-headings': false,
                'universal-selector': false,
                'unqualified-attributes': false
            },
            server: {
                src: ['.tmp/css/{,*/}*.css']
            },
            dist: {
                src: ['<%= threeForCom.dist %>/css/{,*/}*.css', '.tmp/css/{,*/}*.css']
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/css/',
                    src: '{,*/}*.css',
                    dest: '.tmp/css/'
                }]
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= threeForCom.dist %>/js/{,*/}*.js',
                        '<%= threeForCom.dist %>/css/{,*/}*.css',
                        '<%= threeForCom.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= threeForCom.dist %>/css/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= threeForCom.dist %>'
            },
            html: '<%= threeForCom.src %>/index.html'
        },
        usemin: {
            options: {
                dirs: ['<%= threeForCom.dist %>']
            },
            html: ['<%= threeForCom.dist %>/{,*/}*.html'],
            css: ['<%= threeForCom.dist %>/css/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= threeForCom.src %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= threeForCom.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= threeForCom.src %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= threeForCom.dist %>/images'
                }]
            }
        },
        cssmin: {
            // This task is pre-configured if you do not wish to use Usemin
            // blocks for your CSS. By default, the Usemin block from your
            // `index.html` will take care of minification, e.g.
            //
            //     <!-- build:css({.tmp,app}) css/main.css -->
            //
            // dist: {
            //     files: {
            //         '<%= threeForCom.dist %>/css/main.css': [
            //             '.tmp/css/{,*/}*.css',
            //             '<%= threeForCom.src %>/css/{,*/}*.css'
            //         ]
            //     }
            // }
        },
        csso: {
            options: {
                report: 'min'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= threeForCom.dist %>/css',
                    src: '{,*/}*.css',
                    dest: '<%= threeForCom.dist %>/css'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeCommentsFromCDATA: true,
                    // https://github.com/threeForCom/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= threeForCom.src %>',
                    src: '*.html',
                    dest: '<%= threeForCom.dist %>'
                }]
            }
        },
        concurrent: {
            server: [
                'compass',
                'coffee:dist',
                'less:dist',
                'stylus:dist',
                'copy:styles'
            ],
            test: [
                'coffee',
                'less:dist',
                'stylus:dist',
                'copy:styles'
            ],
            dist: [
                'coffee',
                'compass',
                'less:dist',
                'stylus:dist',
                'copy:styles',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        }
    });

    grunt.registerTask('server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            // 'csslint:server',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'csslint:server',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'csslint:dist',
        'jshint',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'rev',
        'usemin',
        'csso'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
