(function () {
  var selectors = ".row.data, .row.three-d";
  var gutter = 15;
  var grids = [];

  function columns() {
    if (window.matchMedia("(max-width: 585px)").matches) return 2;
    if (window.matchMedia("(max-width: 845px)").matches) return 2;
    if (window.matchMedia("(max-width: 980px)").matches) return 3;
    if (window.matchMedia("(max-width: 1160px)").matches) return 4;
    return 5;
  }

  function cardWidth(el) {
    var cols = columns();
    var width = el.clientWidth;
    return Math.floor((width - gutter * (cols - 1)) / cols);
  }

  function applyItemWidths(el, width) {
    el.querySelectorAll("article").forEach(function (article) {
      article.style.width = width + "px";
      article.style.maxWidth = width + "px";
      article.style.float = "left";
      article.style.display = "block";
      article.style.boxSizing = "border-box";
      article.style.margin = "0 0 " + gutter + "px 0";
    });
  }

  function ensureGrid(el) {
    var existing = grids.find(function (g) {
      return g.el === el;
    });
    if (existing) return existing.msnry;

    var width = cardWidth(el);
    applyItemWidths(el, width);

    var msnry = new Masonry(el, {
      itemSelector: "article",
      columnWidth: width,
      gutter: gutter,
      percentPosition: false,
      // Shortest-column packing → more even bottom edge
      horizontalOrder: false,
      transitionDuration: 0,
      initLayout: true,
    });

    grids.push({ el: el, msnry: msnry });
    return msnry;
  }

  function relayout(el) {
    var msnry = ensureGrid(el);
    var width = cardWidth(el);
    applyItemWidths(el, width);
    msnry.options.columnWidth = width;
    msnry.reloadItems();
    msnry.layout();
  }

  function layoutAll() {
    grids.forEach(function (item) {
      relayout(item.el);
    });
  }

  function boot() {
    var nodes = document.querySelectorAll(selectors);
    if (!nodes.length || typeof Masonry === "undefined" || typeof imagesLoaded === "undefined") {
      return;
    }

    nodes.forEach(function (el) {
      var imgLoad = imagesLoaded(el);

      imgLoad.on("progress", function () {
        relayout(el);
      });

      imgLoad.on("always", function () {
        relayout(el);
        requestAnimationFrame(function () {
          relayout(el);
        });
      });
    });

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(layoutAll, 150);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
