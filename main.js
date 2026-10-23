(function () {
  var S = window.SITE, P = S.person, root = document.documentElement;
  var CARD = {
    1: "FNO for urban microclimate. Real-time prediction.",
    2: "SpecB-FNO: Understanding and improving FNO's Fourier parameterization bias.",
    3: "Local-FNO: Scalable, memory-efficient and high-resolution predictions.",
    4: "FLUME: Generalizable to arbitrary urban geometries with only 23 training samples.",
    5: "Accelerating CFD spin-up with FNO initialization.",
    6: "GeoWind2Plan: 3D urban wind prediction for energy-efficient UAV planning.",
    7: "ScaleSplit-NO: Coarse global + fine local enables higher accuracy with less memory.",
    8: "Generating high-quality instantaneous fields from mean fields."
  };

  var ORDER = [7, 8, 6, 5, 4, 3, 2, 1];
  var SEL = S.main.slice().sort(function (a, b) { return ORDER.indexOf(a.n) - ORDER.indexOf(b.n); }).map(function (p) {
    return { n: p.n, num: p.n, cat: p.cat, cites: p.cites, year: +p.vyear, title: p.title, authors: p.authors, venue: p.venue, links: p.links };
  });
  var COL = S.others.map(function (o, i) { return { o: o, i: i }; }).sort(function (a, b) { return b.o.year - a.o.year || a.i - b.i; }).map(function (x) { var o = x.o;
    return { year: +o.year, title: o.title, authors: o.authors, venue: o.venue, links: o.href ? [{ label: "Paper", href: o.href }] : [] };
  });
  COL.forEach(function (p, i) { p.num = S.main.length + i + 1; });
  SEL.forEach(function (p, i) { p.num = i + 1; });
  var NUM = {}; SEL.forEach(function (p) { NUM[p.n] = p.num; });

  S.categories.gen.name = "Instantaneous-field generation";
  function $(id) { return document.getElementById(id); }
  function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  var themeBtn = $("theme-btn");
  function syncThemeBtn() {
    var dark = root.getAttribute("data-theme") === "dark";
    themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    themeBtn.setAttribute("aria-pressed", dark ? "true" : "false");
  }
  themeBtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {   }
    syncThemeBtn();
  });
  syncThemeBtn();

  var email = Array.isArray(P.email) ? P.email.join("@") : "";
  var ICON = {
    cap: '<svg class="s-ico" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12 3.5 1 9l11 5.5 9-4.5v6h2V9L12 3.5zM5 12.6V16c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5v-3.4l-7 3.5-7-3.5z"/></svg>',
    mail: '<svg class="s-ico" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M3.5 4.5h17A1.5 1.5 0 0 1 22 6v.6l-10 6.1L2 6.6V6a1.5 1.5 0 0 1 1.5-1.5zM2 8.9l10 6.1 10-6.1V18a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18V8.9z"/></svg>'
  };
  var contact = P.links.map(function (l) { return '<a href="' + l.href + '">' + ICON.cap + esc(l.label) + "</a>"; }).join("") +
    (email ? '<a href="mailto:' + email + '">' + ICON.mail + esc(email) + "</a>" : "");
  $("name").textContent = P.name;
  $("name-zh").textContent = P.nameZh;
  $("role").innerHTML = P.roles.map(esc).join("<br>");
  $("links").innerHTML = contact;
  var bioLink = function (t) { t = esc(t); Object.keys(P.bioLinks || {}).forEach(function (k) { t = t.split(esc(k)).join('<a href="' + P.bioLinks[k] + '">' + esc(k) + "</a>"); }); return t; };
  $("intro").innerHTML = bioLink(P.bio[0]);

  var BTN_ICON = {
    Paper: '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V9h5.5L13 3.5zM8 13h8v1.6H8V13zm0 3.4h8V18H8v-1.6z"/></svg>',
    Code: '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-1.97c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
    Demo: '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M7 4.5v15l12.5-7.5z"/></svg>'
  };
  function button(label, href, ext) {
    return '<a class="s-btn' + (label === "Demo" ? " s-btn-main" : "") + '" href="' + href + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + (BTN_ICON[label] || "") + "<span>" + esc(label) + "</span></a>";
  }
  function badge(k, label, value) {
    return '<span class="s-cap s-cap-' + k + '"><span class="s-cap-k">' + esc(label) + '</span><span class="s-cap-v">' + esc(value) + "</span></span>";
  }
  $("proj").innerHTML = S.projects.map(function (p) {
    return '<article class="s-card"><a class="s-shot" href="' + p.demo + '" target="_blank" rel="noopener"><img src="' + p.img + '" alt="' + esc(p.name) + ' live demo" width="1280" height="720"><span class="s-demo-tag" aria-hidden="true">Interactive demo</span></a>' +
      '<h3><a href="#paper-' + p.paper + '">' + esc(p.name) + "</a>" + (p.after ? '<span class="s-proj-note">' + esc(p.after) + "</span>" : "") + (p.note ? ' <span class="s-proj-note">(' + esc(p.note) + ")</span>" : "") + "</h3><p>" + esc(p.text) + "</p></article>";
  }).join("");

  $("research-text").innerHTML = P.bio.slice(1).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") +
    "<ol>" + P.bioList.map(function (t) { var i = t.indexOf(":"); return "<li>" + (i > 0 ? '<span class="s-lead">' + esc(t.slice(0, i + 1)) + "</span>" + esc(t.slice(i + 1)) : esc(t)) + "</li>"; }).join("") + "</ol>";

  function cv(title, org, place, years, logo) {
    return '<div class="s-cv-i">' + (logo ? '<img class="s-logo" src="' + logo + '" alt="' + esc(org) + ' logo" width="74" height="74">' : "<span></span>") +
      "<div><h3>" + esc(title) + '</h3><p class="s-meta">' + esc(org) + '</p><p class="s-meta">' + (place ? esc(place) + " · " : "") + '<span class="s-nw">' + esc(years) + "</span></p></div></div>";
  }
  $("edu").innerHTML = S.education.map(function (e) { return cv(e.degree, e.school, e.place, e.years, e.logo); }).join("");
  $("exp").innerHTML = S.experience.map(function (e) { return cv(e.role, e.org, e.place, e.years, e.logo); }).join("");

  if (!$("main-list")) return;
  var byN = {}; S.main.forEach(function (p) { byN[p.n] = p; });
  var SVGNS = "http://www.w3.org/2000/svg";

  var map = $("map");
  function el(tag, attrs, parent) { var n = document.createElementNS(SVGNS, tag); for (var k in attrs) n.setAttribute(k, attrs[k]); if (parent) parent.appendChild(n); return n; }
  function path(pts, rc) {
    var d = "M" + pts[0][0] + " " + pts[0][1];
    for (var k = 1; k < pts.length; k++) {
      var p = pts[k];
      if (k < pts.length - 1) {
        var a = pts[k - 1], c = pts[k + 1];
        var r = Math.min(rc, Math.abs(p[0] - a[0] + p[1] - a[1]) / 2, Math.abs(c[0] - p[0] + c[1] - p[1]) / 2);
        var ux = Math.sign(p[0] - a[0]), uy = Math.sign(p[1] - a[1]), vx = Math.sign(c[0] - p[0]), vy = Math.sign(c[1] - p[1]);
        d += " L" + (p[0] - ux * r) + " " + (p[1] - uy * r) + " Q" + p[0] + " " + p[1] + " " + (p[0] + vx * r) + " " + (p[1] + vy * r);
      } else d += " L" + p[0] + " " + p[1];
    }
    return d;
  }

  var mode = null, pinned = [];

  var DOMLAB = { pde: ["AI for", "PDE/turbulence"], urban: ["AI for", "urban", "microclimate"] };
  var DOMLAB_N = { pde: ["AI for", "PDE/turbulence"], urban: ["AI for", "urban", "microclimate"] };
  function domHTML(k) { return (window.innerWidth <= 640 ? DOMLAB_N : DOMLAB)[k].map(esc).join("<br>"); }
  function domMeasure() { var r = { w: 0, h: 0 }; ["pde", "urban"].forEach(function (k) { var pr = document.createElement("span"); pr.className = "bm-dh"; pr.style.position = "absolute"; pr.style.visibility = "hidden"; pr.innerHTML = domHTML(k); map.appendChild(pr); r.w = Math.max(r.w, Math.ceil(pr.offsetWidth)); r.h = Math.max(r.h, Math.ceil(pr.offsetHeight)); map.removeChild(pr); }); return r; }

  var LOPT = { a: [6, 55], b: [8, 42], c: [10, 32] };
  var lopt = LOPT[(/[?&]line=([abc])/.exec(location.search) || [])[1] || "c"];

  var hangS = 0;
  function hang() { var fr = $("map-scroll").parentNode; fr.style.removeProperty("margin-left"); fr.style.width = ""; var L = fr.getBoundingClientRect().left, h = Math.round(hangS / 2), on = window.innerWidth > 640 && hangS && L >= h + 16; if (on) fr.style.setProperty("margin-left", -h + "px", "important"); else fr.style.removeProperty("margin-left"); fr.style.width = on ? "calc(100% + " + hangS + "px)" : ""; }
  window.addEventListener("resize", hang);
  function drawMap() {
    var narrow = window.innerWidth <= 640;
    if (mode === narrow) return; mode = narrow;

    var G = narrow ? { gx: 12, w: 150, p: 10, axis: 30, padT: 14, rowGap: 18, padB: 14, rc: 9, st: 40, g45: 30 }
                   : { gx: 18, w: 196, p: 12, axis: 30, padT: 16, rowGap: 20, padB: 16, rc: 10, st: 38, g45: 12, d2: 64, d4: 40, g13: 6 };
    var DM = domMeasure(); G.S = DM.w + G.gx; G.lw = lopt[0]; map.style.setProperty("--lmix", lopt[1] + "%");
    hangS = 0; hang();
    var c24 = G.p + (G.g13 != null ? G.g13 : G.st) + G.w + G.p,    c26 = G.p + 2 * G.st + G.w + G.p, c25 = G.p + G.st + G.w + G.g45 + G.w + G.p;
    if (!narrow) { var room = $("map-scroll").clientWidth || 1000; c25 = Math.max(c25, room - G.S - c24 - c26); }
    G.W = G.S + c24 + c25 + c26;
    if (!narrow && G.W > room) { hangS += G.W - room; hang(); }
    var C0 = G.S, C1 = C0 + c24, C2 = C1 + c25, colX = [C0, C1, C2];
    var X = { 1: C0 + G.p, 2: C0 + G.p + G.st + (G.d2 || 0), 3: C1 + G.p, 4: C1 + G.p + G.st + (G.d4 || 0), 5: C1 + G.p + G.st + G.w + G.g45, 6: C2 + G.p, 7: C2 + G.p + G.st, 8: C2 + G.p + G.st };
    map.innerHTML = ""; map.style.width = G.W + "px"; pinned = [];
    var ROW = { 2: "P", 7: "P", 1: "T", 3: "T", 8: "T", 4: "M", 6: "M", 5: "M2" };
    var boxes = {}, RH = {}, HB = {};
    S.main.forEach(function (p) {
      var a = document.createElement("a");
      a.className = "bm-box bm-box-" + p.cat; a.href = "#paper-" + p.n; a.style.width = G.w + "px";
      a.setAttribute("aria-label", "Paper " + NUM[p.n] + ": " + p.title + " (" + p.year + "). " + S.categories[p.cat].name + "; " + S.domains[p.dom].name + ".");
      a.innerHTML = '<span class="bm-c">' + esc(CARD[p.n]) + ' <span class="bm-n">[' + NUM[p.n] + "]</span></span>";
      map.appendChild(a); boxes[p.n] = a;
      var r = ROW[p.n]; HB[p.n] = Math.ceil(a.offsetHeight); RH[r] = Math.max(RH[r] || 0, HB[p.n]);
    });

    var Y = {};
    Y.pTop = G.axis; Y.P = Y.pTop + G.padT; Y.mid = Y.P + RH.P + G.padB;
    Y.T = Y.mid + G.padT; Y.M = Y.T + RH.T + G.rowGap; Y.M2 = Y.M + RH.M + G.rowGap; Y.uBot = Y.M2 + RH.M2 + G.padB;
    G.H = Y.uBot + 2; map.style.height = G.H + "px";
    function bx(n) { var x = X[n], y = Y[ROW[n]], h = HB[n]; return { l: x, r: x + G.w, t: y, b: y + h, cx: Math.round(x + G.w / 2), cy: Math.round(y + h / 2) }; }
    var B = {}; for (var n = 1; n <= 8; n++) B[n] = bx(n);
    var ov = 2;

    var yB = function (b) { return Math.round(b.t + (b.b - b.t) * 0.8); };
    var xR = B[3].r + 20, xT = B[5].cx,    y27 = Math.round(B[7].t + Math.min(HB[2], HB[7]) * 0.2), y37 = yB(B[7]), y46 = Math.round(B[4].t + Math.min(HB[4], HB[6]) * 0.2), y45 = yB(B[4]), y13 = Math.round(B[1].t + Math.min(HB[1], HB[3]) / 2);
    var LINES = [
      { e: "1-3", cat: "ts", pts: [[B[1].r - ov, y13], [B[3].l + ov, y13]] },
      { e: "2-7", cat: "ts", pts: [[B[2].r - ov, y27], [B[7].l + ov, y27]] },
      { e: "3-7", cat: "ts", pts: [[B[3].r - ov, y13], [xR, y13], [xR, y37], [B[7].l + ov, y37]] },
      { e: "4-5", cat: "mf", pts: [[B[4].r - ov, y45], [xT, y45], [xT, B[5].t + ov]] },
      { e: "4-6", cat: "mf", pts: [[B[4].r - ov, y46], [B[6].l + ov, y46]] }
    ];
    var svg = el("svg", { width: G.W, height: G.H, viewBox: "0 0 " + G.W + " " + G.H, class: "bm-svg", "aria-hidden": "true" });
    var yrs = []; S.main.forEach(function (p) { if (yrs.indexOf(p.year) < 0) yrs.push(p.year); });
    yrsN = []; yrs.forEach(function (yy, k) {
      var t = el("text", { x: colX[k] + G.p + 2, y: 18, class: "bm-year" }, svg); t.textContent = yy; if (k === 0) yrsN = []; yrsN.push({ t: t, x: colX[k] + G.p + 2 });
      if (k > 0 && narrow) el("line", { x1: colX[k] + 0.5, y1: Y.pTop, x2: colX[k] + 0.5, y2: Y.uBot, class: "bm-yr-dash" }, svg);
    });
    LINES.forEach(function (l) { el("path", { d: path(l.pts, G.rc), class: "bm-line bm-" + l.cat, "stroke-width": G.lw }, svg); });
    map.insertBefore(svg, map.firstChild);
    S.main.forEach(function (p) { var b = B[p.n], a = boxes[p.n]; a.style.left = b.l + "px"; a.style.top = b.t + "px"; });
    function lab(c) { var s = document.createElement("span"), t = S.categories[c].name.replace(/-/g, "\u2011"); s.className = "bm-tk bm-tk-" + c; s.textContent = t; s.dataset.t = t; map.appendChild(s); return s; }
    function cap(s) {
      if (!narrow) return;
      var t = s.textContent, sp = [], i = -1;
      while ((i = t.indexOf(" ", i + 1)) >= 0) sp.push([i, i + 1]);
      i = t.indexOf("-to-"); if (i >= 0) sp.push([i + 4, i + 4]);
      if (!sp.length) return;
      var k = sp.reduce(function (a, b) { return Math.abs(b[0] - t.length / 2) < Math.abs(a[0] - t.length / 2) ? b : a; });
      s.innerHTML = esc(t.slice(0, k[0])) + "<br>" + esc(t.slice(k[1])); s.style.whiteSpace = "nowrap"; s.style.width = ""; s.style.textAlign = "center";
    }
    var lts = lab("ts"), lmf = lab("mf");
    function two(n, pen) {
      var t = n.dataset.t, best = null;
      for (var i = 1; i < t.length - 1; i++) {
        var c = t[i] === " " ? [i, i + 1, 0] : t[i - 1] === "-" ? [i, i, pen == null ? 10 : pen] : null; if (!c) continue;
        var sc = Math.max(c[0], t.length - c[1]) + c[2]; if (!best || sc < best.sc) best = { sc: sc, c: c };
      }
      n.innerHTML = best ? esc(t.slice(0, best.c[0])) + "<br>" + esc(t.slice(best.c[1])) : esc(t); n.style.whiteSpace = "nowrap"; n.style.textAlign = "center";
    }
    function lane(n, x0, x1, y0, y1) { two(n);       n.style.textAlign = "left"; n.style.left = Math.round(x0 + 8) + "px";    n.style.top = Math.round((y0 + y1) / 2 - n.offsetHeight / 2) + "px"; }
    lane(lts, xR + G.lw / 2, B[7].l, y27, y37);
    lane(lmf, B[4].r, xT - G.lw / 2, y46, y45);
    var lgen = lab("gen"); lgen.textContent = lgen.dataset.t; lgen.style.maxWidth = Math.min(232, B[8].l - 22 - (xR + G.lw / 2 + 40)) + "px";    lgen.style.textAlign = "left";    lgen.style.textWrap = "balance"; cap(lgen); if (narrow) lgen.style.textAlign = "left";
    lgen.innerHTML = esc(lgen.dataset.t).replace(" ", "<br>"); lgen.style.textWrap = "";
    lgen.style.left = (B[8].l - 22 - lgen.offsetWidth) + "px"; lgen.style.top = Math.round(B[8].cy - lgen.offsetHeight / 2) + "px";

    glide = []; glideS = G.S; cardsN = narrow ? S.main.map(function (p) { return { a: boxes[p.n], l: B[p.n].l }; }) : [];
    if (narrow) {

      var vars = function (n, pen) {
        var t = n.dataset.t, bp = [], out = []; n.style.whiteSpace = "nowrap"; n.style.width = ""; n.style.maxWidth = "";
        for (var i = 0; i < t.length - 1; i++) { if (t[i] === " ") bp.push([i, i + 1]); else if (t[i] === "-") bp.push([i + 1, i + 1]); }
        [2, 3].forEach(function (k) {
          var best = null;
          (function pick(st, from, acc) {
            if (acc.length === k - 1) {
              var cut = [[0, 0]].concat(acc), ls = cut.map(function (c, j) { return t.slice(c[1], j + 1 < cut.length ? cut[j + 1][0] : t.length); });
              var sc = Math.max.apply(null, ls.map(function (l) { return l.length; })) + (pen || 10) * acc.filter(function (c) { return c[0] === c[1]; }).length;
              if (Math.min.apply(null, ls.map(function (l) { return l.length; })) < 6) return;
              if (!best || sc < best.sc) best = { sc: sc, ls: ls };
              return;
            }
            for (var j = from; j < bp.length; j++) pick(st, j + 1, acc.concat([bp[j]]));
          })(0, 0, []);
          if (best) { n.innerHTML = best.ls.map(esc).join("<br>"); out.push({ h: n.innerHTML, w: n.offsetWidth, ht: n.offsetHeight }); }
        });
        n.style.whiteSpace = "nowrap"; n.style.width = ""; n.style.maxWidth = "";
        return out;
      };
      lts.style.textAlign = lmf.style.textAlign = "left"; lgen.style.textAlign = "left";
      glide = [
        { n: lts, vs: vars(lts), gap: 40, hug: true, lo: xR + G.lw / 2 + 8, hi: B[7].l - 6, mid: (y27 + y37) / 2 },
        { n: lmf, vs: vars(lmf), gap: 40, hug: true, lo: B[4].r + 8, hi: xT - G.lw / 2 - 6, mid: (y46 + y45) / 2 },
        { n: lgen, vs: vars(lgen, 3), lo: xR + G.lw / 2 + 40, hi: B[8].l - 6, right: true, mid: B[8].cy, need: B[8].l }
      ];
    }

    var strip = document.createElement("div"); strip.className = "bm-dstrip"; strip.style.width = G.S + "px"; strip.style.height = G.H + "px";
    [["pde", Y.pTop, Y.mid], ["urban", Y.mid, Y.uBot]].forEach(function (d) {
      var sec = document.createElement("div"); sec.className = "bm-dsec";
      sec.style.top = d[1] + "px"; sec.style.height = (d[2] - d[1]) + "px"; sec.style.width = G.S + "px";
      sec.innerHTML = '<span class="bm-dh">' + domHTML(d[0]) + "</span>";
      strip.appendChild(sec);
    });
    map.appendChild(strip); pinned.push(strip);
    [Y.pTop, Y.mid, Y.uBot].forEach(function (y) { var sep = document.createElement("div"); sep.className = "bm-sep"; sep.style.top = y + "px"; sep.style.width = G.W + "px"; map.appendChild(sep); });
    pin();
  }

  var glide = [], glideS = 0, cardsN = [], yrsN = [];
  var sc0 = $("map-scroll");
  function pin() {
    var x = sc0.scrollLeft, vL = x + glideS - 4, vR = x + sc0.clientWidth - 8;
    pinned.forEach(function (n) { n.style.transform = x ? "translateX(" + x + "px)" : ""; n.classList.toggle("is-scrolled", x > 0); });

    yrsN.forEach(function (y, k) { var pos = x > 0 ? Math.max(y.x, x + glideS + 6) : y.x, nx = yrsN[k + 1] ? yrsN[k + 1].x - 46 : Infinity; y.t.setAttribute("x", Math.min(pos, nx)); y.t.style.opacity = pos > nx + 40 ? "0" : ""; });
    glide.forEach(function (g) {
      var a = Math.max(g.lo, vL + (g.gap || 0)), b = Math.min(g.hi, vR), v = null;
      if (g.fixed) { var w0 = g.n.offsetWidth; g.n.style.opacity = (g.L >= vL - 1 && g.L + w0 <= vR + 1) ? "" : "0"; return; }
      if (!g.need || (g.need >= vL && g.need + 40 <= vR)) for (var i = 0; i < g.vs.length; i++) if (b - a >= g.vs[i].w) { v = g.vs[i]; break; }
      if (!v) { g.n.style.opacity = "0"; return; }
      if (g.cur !== v) { g.n.innerHTML = v.h; g.cur = v; }
      var t = g.right ? b - v.w : g.hug ? a : Math.max(a, Math.min(g.cx - v.w / 2, b - v.w));
      g.n.style.left = Math.round(t) + "px"; g.n.style.top = Math.round(g.mid != null ? g.mid - v.ht / 2 : g.top != null ? g.top : g.base - v.ht) + "px"; g.n.style.opacity = "";
    });
  }
  sc0.addEventListener("scroll", pin, { passive: true });
  drawMap();
  window.addEventListener("resize", drawMap);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { mode = null; drawMap(); });

  var sc = $("map-scroll");
  function syncScroll() {
    var over = sc.scrollWidth > sc.clientWidth + 2;
    sc.parentNode.classList.toggle("is-over", over);
    sc.parentNode.classList.toggle("at-end", sc.scrollLeft + sc.clientWidth >= sc.scrollWidth - 4);
    document.querySelector(".map-fig").classList.toggle("is-over", over);
  }
  sc.addEventListener("scroll", syncScroll, { passive: true }); window.addEventListener("resize", syncScroll); syncScroll();

  function full(v) {
    if (/^arXiv/.test(v)) return "arXiv";
    return v.replace(/\s*\b20\d\d\b/g, "").replace(/[,\s]*\d[\d()\u2013,\s-]*$/, "").replace(/\s+\(/, " (").trim();
  }
  function grp(ls, k) {
    return ls.length ? '<span class="s-btns s-bd ' + k + '">' + ls.map(function (l) { return button(l.label, l.href, l.label === "Demo"); }).join("") + "</span>" : "";
  }
  function item(p) {
    var v = full(p.venue), tags = [], vtags = [], cite = "";
    if (/\(Spotlight\)/.test(v)) { v = v.replace(/\s*\(Spotlight\)/, " Spotlight"); tags.push(badge("top", "Top", "5.1% of accepted papers")); }
    var mt = (S.venueMetrics || {})[v];
    if (mt && mt.jif) tags.push('<span class="s-cap-row">' + badge("jcr", "IF", mt.jif) + "</span>");
    if (p.cites) { cite = badge("cite", "Cited by", String(p.cites)); tags.push(cite); }
    vtags = tags.slice();
    var ORD = { Paper: 0, Code: 1, Demo: 2 };
    var ls = p.links.slice().sort(function (a, b) { return (a.label in ORD ? ORD[a.label] : 9) - (b.label in ORD ? ORD[b.label] : 9); });

    return "<li" + (p.n ? ' class="paper" id="paper-' + p.n + '"' : "") + '><div class="s-ven"><b' + (v === "arXiv" ? ' class="s-pre"' : "") + ">" + esc(v) + '</b><span class="s-yr">' + p.year + "</span>" +
      (tags.length ? '<span class="s-tags s-tags-m">' + tags.join("") + "</span>" : "") +
      (vtags.length ? '<span class="s-tags s-tags-d s-tags-l">' + vtags.join("") + "</span>" : "") + '</div><div class="s-body"><h4>' +
      grp(ls.filter(function (l) { return l.label !== "Demo"; }), "s-g1") + grp(ls.filter(function (l) { return l.label === "Demo"; }), "s-g2") +
      '<span class="s-num">[' + p.num + "]</span>" + esc(p.title) + '</h4><p class="s-au">' + p.authors + "</p>" +
      (ls.length ? '<div class="s-act"><p class="s-btns">' + ls.map(function (l) { return button(l.label, l.href, l.label === "Demo"); }).join("") + "</p></div>" : "") + "</div></li>";
  }
  $("main-list").innerHTML = SEL.map(item).join("");
  $("other-list").innerHTML = COL.map(item).join("");

  function reveal(id) {
    var li = document.getElementById(id);
    if (!li || !li.classList.contains("paper")) return;
    li.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    [].forEach.call(document.querySelectorAll(".s-papers li.s-hit"), function (x) { x.classList.remove("s-hit"); clearTimeout(x._hit); });
    void li.offsetWidth; li.classList.add("s-hit");
    clearTimeout(li._hit); li._hit = setTimeout(function () { li.classList.remove("s-hit"); }, 3200);
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href").slice(1), el = id && document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    if (/^paper-\d+$/.test(id)) { reveal(id); return; }
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    if (id === "content") { el.setAttribute("tabindex", "-1"); el.focus({ preventScroll: true }); }
  });
  if (location.hash.length > 1 && document.getElementById(location.hash.slice(1))) setTimeout(function () { var id = location.hash.slice(1); if (/^paper-\d+$/.test(id)) reveal(id); else document.getElementById(id).scrollIntoView({ block: "start" }); if (history.replaceState) history.replaceState(null, "", location.pathname + location.search); }, 60);
})();

(function () {
  var box = document.getElementById("map-scroll"), m = document.getElementById("map");
  if (!box || !m) return;
  function fit() {
    m.style.zoom = "";
    var z = 1;
    for (var i = 0; i < 3 && window.innerWidth > 640; i++) {
      var k = box.clientWidth / box.scrollWidth;
      if (k >= 0.999) break;
      z = z * k; if (z < 0.85) { z = 1; break; }
      m.style.zoom = z.toFixed(3);
    }
    m.style.zoom = z < 1 ? z.toFixed(3) : "";
    box.dispatchEvent(new Event("scroll"));
  }
  fit(); setTimeout(fit, 300); setTimeout(fit, 1200);
  window.addEventListener("resize", function () { fit(); setTimeout(fit, 400); });
})();

(function () {
  var box = document.getElementById("map-scroll"), m = document.getElementById("map"), saved = null;
  if (!box || !m) return;
  window.addEventListener("beforeprint", function () {
    saved = m.style.zoom; m.style.zoom = "";
    var k = box.clientWidth / box.scrollWidth;
    if (k < 1) m.style.zoom = k.toFixed(3);
  });
  window.addEventListener("afterprint", function () { if (saved !== null) { m.style.zoom = saved; saved = null; } });

  if (window.matchMedia) {
    var pm = window.matchMedia("print"), onPm = function (e) {
      if (!e.matches) return;
      m.style.zoom = ""; var w = box.getBoundingClientRect().width, sw = m.scrollWidth;
      if (sw > w) m.style.zoom = (w / sw).toFixed(3);
    };
    if (pm.addEventListener) pm.addEventListener("change", onPm); else if (pm.addListener) pm.addListener(onPm);
  }
})();
