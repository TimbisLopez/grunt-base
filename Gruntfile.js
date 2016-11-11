module.exports = function(grunt) {
  
  grunt.registerTask('clean', [ 'clean' ]);
  grunt.registerTask('build', [ 'jshint', 'concat:js', 'uglify:js', 'sass:style', 'autoprefixer', 'copy' ]);
  grunt.registerTask('serve', [ 'connect', 'watch' ]);
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
      },
      css: {
        expand: true,
        cwd: 'source/css',
        src: '*.css',
        dest: 'build/css',
      },
      otros: {
        expand: true,
        cwd: 'source/otros',
        src: '**/*',
        dest: 'build/otros',
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
      cssLibs: {
        files: ['source/css/*.css'],
        tasks: ['copy:css', 'sass:style', 'autoprefixer'],
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
      }, 
      otros: {
        files: ['source/otros/**/*'],
        tasks: ['copy:otros'],        
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'build',
          livereload: true
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

};