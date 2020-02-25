const gulp = require("gulp");
const sass = require("gulp-sass");
const cssMinify = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const PORT = 7000;

gulp.task("styles", () =>
  gulp
    .src("./scss/build.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssMinify())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream())
);

gulp.task("serve", () => {
  browserSync.init({
    server: "./",
    port: PORT,
    ghostMode: false
  });
  gulp.watch(["./scss/**/*.scss", "./*.html"], gulp.series("styles"));
});

gulp.task("build", gulp.series("styles", "serve"));
