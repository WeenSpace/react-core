const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add WeenSpace licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* React Core - v2.0.0
=========================================================

* Product Page: https://www.weenspace.com/product/now-ui-kit-pro-react
* Copyright 2021 WeenSpace (http://www.weenspace.com)

* Coded by WeenSpace

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add WeenSpace licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* React Core - v2.0.0
=========================================================

* Product Page: https://www.weenspace.com/product/now-ui-kit-pro-react
* Copyright 2021 WeenSpace (http://www.weenspace.com)

* Coded by WeenSpace

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add WeenSpace licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* React Core - v2.0.0
=========================================================

* Product Page: https://www.weenspace.com/product/now-ui-kit-pro-react
* Copyright 2021 WeenSpace (https://www.weenspace.com)

* Coded by WeenSpace

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
