module.exports = function(grunt) {

  grunt.registerTask('clean', [ 'clean' ]);
  grunt.registerTask('build', [ 'jshint', 'concat:js', 'uglify:js', 'sass:style', 'autoprefixer', 'copy:html', 'copy:images', 'copy:fonts', 'copy:libs' ]);
  grunt.registerTask('serve-node', [ 'connect', 'watch' ]);
  grunt.registerTask('serve-php', [ 'php' ]);
  grunt.registerTask('watch', [ 'watch' ]);

  grunt.initConfig({

    //Validar JS
    jshint: {
      src: 'source/js/*.js'
    },
    // CONCATENA TODOS LOS JS, LOS MINIFICA Y OFUSCA
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'source/js/*.js'
        ],
        dest: 'build/js/script.min.js'
      },
    },
    uglify: {
      options: {
        mangle: true
      },
      js: {
        files: {
          'build/js/script.min.js': ['build/js/script.min.js']
        }
      }
    },

    // COMPILA SASS, LE AÑADE PREFIJOS Y LO MINIFICA
    sass: {
      style: {
        options:{
          style:'compressed'
        },
        files: {
          "build/css/style.css": "source/css/style.scss"
        }
      }
    },
    autoprefixer: {
      build: {
        files: {
          'build/css/style.css': 'build/css/style.css'
        }
      }
    },

    copy: {
      html: {
        expand: true,
        cwd: 'source',
        src: ['*.html'],
        dest: 'build',
      },
      images: {
        expand: true,
        cwd: 'source/img',
        src: '*.{png,jpg,jpeg,gif,svg}',
        dest: 'build/img',
      },
      fonts: {
        expand: true,
        cwd: 'source/font',
        src: '*.{eot,svg,ttf,woff,woff2}',
        dest: 'build/font',
      },
      libs: {
        expand: true,
        cwd: 'source/js/lib',
        src: '*.js',
        dest: 'build/js/lib',
      }
    },

    // LIMPIA CARPETA BUILD
    clean: {
      build: {
        src: [ 'build' ]
      },
    },

    // VIGILA CAMBIOS
    watch: {
      options: {
        livereload:true
      },
      js: {
        files: ['source/js/*.js'],
        tasks: [ 'jshint', 'concat:js', 'uglify:js'],
      },
      jsLibs: {
        files: ['source/js/lib/*.js'],
        tasks: ['copy:libs'],
      },
      css: {
        files: ['source/css/*.scss'],
        tasks: ['sass:style', 'autoprefixer'],
      },
      html: {
        files: ['source/*.html'],
        tasks: ['copy:html'],
      },      
      image: {
        files: ['source/img/*.{png,jpg,jpeg,gif,svg}'],
        tasks: ['copy:images'],
      },
      fonts: {
        files: ['source/font/*.{eot,svg,ttf,woff,woff2}'],
        tasks: ['copy:fonts'],
      }
    },

    // SERVER NODE 
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'build',
          livereload: true
        }
      }
    },

    // SERVER PHP
    php: {
      server: {
        options: {
          base: 'build',
          port: 8010,
          keepalive: true
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-php');
  
};