var gulp = require("gulp");
var typescript = require("gulp-typescript");
var typescriptProject = typescript.createProject("tsconfig.json");

gulp.task("default", function() {
    return typescriptProject.src()
    .pipe(typescript())
    .js.pipe(gulp.dest("dist"));
});