const server = () => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.paths.build.html}`,
    },
    browser: "google chrome",
    injectChanges: true,
    notify: false,
    startPath: "index.html",
    port: 3000,
  });
};


export default server;
