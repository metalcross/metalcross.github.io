window.SITE = {
  person: {
    name: "Shaoxiang Qin",
    nameZh: "秦少翔",
    roles: ["PhD Student, School of Computer Science, McGill University", "Visiting Scholar, Department of EECS, University of Tennessee, Knoxville"],
    email: ["shaoxiang.qin", "mail.mcgill.ca"],
    links: [
      { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=aGB2exIAAAAJ" }
    ],

    bio: [
      "I am a PhD student in the School of Computer Science at McGill University, advised by Dr. Xue Liu. I am currently a visiting scholar in Dr. Xiongye Xiao's group at the University of Tennessee, Knoxville, working on AI for physics. Before that, I was a research assistant in Dr. Liangzhu (Leon) Wang's group at Concordia University, where I worked on AI for urban microclimate.",
      "I work on AI for Science, focusing on data-driven modeling for complex physical dynamics and systems, such as turbulence and urban microclimates. My research addresses specific challenges in machine learning for physical sciences:"
    ],

    bioLinks: {
      "Xue Liu": "https://cs.mcgill.ca/~xueliu/",
      "Xiongye Xiao": "https://dual.xiongyexiao.com/",
      "Liangzhu (Leon) Wang": "https://www.concordia.ca/faculty/liangzhu-wang.html"
    },
    bioList: [
      "Multi-scale Dynamics: I develop spectrally parameterized neural networks (integrating Fourier and wavelet transforms) to accurately capture complex, multi-scale physical processes.",
      "Data Efficiency: Since high-quality simulation and observational data are often scarce in scientific domains, I design methods that enable models to generalize effectively and maintain high accuracy even when trained on sparse datasets."
    ]
  },

  projects: [
    { name: "GeoWind2Plan", note: "NeurIPS 2026 Spotlight", text: "Mission-time 3D urban wind prediction for energy-efficient UAV planning.", demo: "https://geowind2plan.com/", paper: 6, img: "img/demo-geowind2plan.jpg" },
    { name: "FLUME", after: ": Fast Localized Urban Microclimate Emulator", text: "Generalizable to arbitrary urban geometries with only 23 training samples.", demo: "https://flume.cityffd.ai/", paper: 4, img: "img/demo-flume.jpg" }
  ],

  venueMetrics: {
    "Building and Environment": { jif: "8.4" },
    "Energy and Buildings": { jif: "8.0" },
    "Building Simulation": { jif: "6.9" },
    "Physics of Fluids": { jif: "3.8" }
  },
  education: [
    { degree: "Doctor of Philosophy - PhD, Computer Science", school: "McGill University", logo: "img/logo-mcgill.svg", place: "Montreal, Quebec, Canada", years: "Sep 2020 – Present" },
    { degree: "Bachelor of Engineering - BE, Automation (Control)", school: "Zhejiang University", logo: "img/logo-zju.svg", place: "Hangzhou, Zhejiang, China", years: "Sep 2016 – Jul 2020" }
  ],

  experience: [
    { role: "Visiting Scholar", org: "University of Tennessee, Knoxville", logo: "img/logo-utk.svg", place: "Knoxville, Tennessee, United States", years: "Apr 2026 – Present" },
    { role: "Research Assistant", org: "Concordia University", logo: "img/logo-concordia.svg", place: "Montreal, Quebec, Canada", years: "Apr 2023 – Mar 2026" }
  ],
  categories: {
    ts:  { name: "Instantaneous-field time-series prediction" },
    mf:  { name: "Geometry-to-mean-field prediction" },
    gen: { name: "Geometry-to-instantaneous-field generation" }
  },
  domains: {
    urban: { name: "Urban microclimate" },
    pde:   { name: "General PDE / turbulence" }
  },

  main: [
    { n: 1, cites: 138, year: 2024, cat: "ts", dom: "urban",
      title: "Fourier neural operator for real-time simulation of 3D dynamic urban microclimate",
      authors: "Wenhui Peng, <b>Shaoxiang Qin</b>, Senwen Yang, Jianchun Wang, Xue Liu, Liangzhu (Leon) Wang", venue: "Building and Environment 248", vyear: "2024",
      links: [{ label: "Paper", href: "https://doi.org/10.1016/j.buildenv.2023.111063" }, { label: "Code", href: "https://github.com/CUBELeonwang/FNO-3DUM" }] },
    { n: 2, cites: 88, year: 2024, cat: "ts", dom: "pde",
      title: "Toward a better understanding of Fourier neural operators from a spectral perspective",
      authors: "<b>Shaoxiang Qin</b>, Fuyuan Lyu, Wenhui Peng, Dingyang Geng, Ju Wang, Xing Tang, Sylvie Leroyer, Naiping Gao, Xue Liu, Liangzhu (Leon) Wang", venue: "arXiv:2404.07200", vyear: "2024",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2404.07200" }] },
    { n: 3, cites: 65, year: 2025, cat: "ts", dom: "urban",
      title: "Modeling multivariable high-resolution 3D urban microclimate using localized Fourier neural operator",
      authors: "<b>Shaoxiang Qin</b>, Dongxue Zhan, Dingyang Geng, Wenhui Peng, Geng Tian, Yurong Shi, Naiping Gao, Xue Liu, Liangzhu (Leon) Wang", venue: "Building and Environment 273", vyear: "2025",
      links: [{ label: "Paper", href: "https://doi.org/10.1016/j.buildenv.2025.112668" }] },
    { n: 4, year: 2025, cat: "mf", dom: "urban",
      title: "Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",
      authors: "<b>Shaoxiang Qin</b>, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stathopoulos, Liangzhu (Leon) Wang", venue: "arXiv:2503.19708", vyear: "2025",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2503.19708" }, { label: "Demo", href: "https://flume.cityffd.ai/" }] },
    { n: 5, year: 2026, cat: "mf", dom: "urban",
      title: "AI-enhanced large-eddy simulation for urban wind flows: accelerating spin-up with Fourier neural operator initialization",
      authors: "Geng Tian, <b>Shaoxiang Qin</b>, Dingyang Geng, Dongxue Zhan, Senwen Yang, Peng Liu, Naiping Gao, Liangzhu (Leon) Wang", venue: "Building and Environment", vyear: "2026",
      links: [{ label: "Paper", href: "https://doi.org/10.1016/j.buildenv.2025.114046" }] },
    { n: 6, year: 2026, cat: "mf", dom: "urban",
      title: "GeoWind2Plan: mission-time 3D urban wind prediction for energy-efficient UAV planning",
      authors: "<b>Shaoxiang Qin</b>, Yucheng Zhao, Fuyuan Lyu, Di Zhou, Jiachen Yao, Xue Liu, Anima Anandkumar, Liangzhu (Leon) Wang, Xiongye Xiao", venue: "NeurIPS 2026 (Spotlight)", vyear: "2026",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2609.36056" }, { label: "Code", href: "https://github.com/DUAL-Xiao/GeoWind2Plan/" }, { label: "Demo", href: "https://geowind2plan.com/" }] },
    { n: 7, year: 2026, cat: "ts", dom: "pde",
      title: "Scale-Split neural operator for memory- and data-efficient 3D turbulence prediction",
      authors: "<b>Shaoxiang Qin</b>, Yucheng Zhao, Zongyi Li, Liangzhu (Leon) Wang, Xiongye Xiao", venue: "arXiv:2609.38977", vyear: "2026",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2609.38977" }] },
    { n: 8, year: 2026, cat: "gen", dom: "urban",
      title: "Conditional flow matching for generation of 3D multi-variable instantaneous urban microclimate fields",
      authors: "Peng Liu, <b>Shaoxiang Qin</b>, Theodore Potsis, Lili Ji, Dingyang Geng, Liangzhu (Leon) Wang", venue: "arXiv:2610.10430", vyear: "2026",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2610.10430" }] }
  ],

  edges: [[1, 3], [2, 7], [3, 7], [4, 5], [4, 6]],

  others: [
    { year: 2026, title: "ASPIRE: saddle-point discovery through set prediction and physical refinement", authors: "Yucheng Zhao, Quanyou Zhang, <b>Shaoxiang Qin</b>, Haixuan Xu, Xiongye Xiao", venue: "arXiv:2610.10969", href: "https://arxiv.org/abs/2610.10969" },
    { year: 2026, title: "Progressive filtering and cluster-localized calibration for customized UBEM", authors: "Wei Zhou, Navid Shirzadi, Dongxue Zhan, <b>Shaoxiang Qin</b>, Peng Liu, Travis Moore, Liangzhu (Leon) Wang, Andreas Athienitis", venue: "Energy and Buildings, 118250", href: "https://doi.org/10.1016/j.enbuild.2026.118250" },
    { year: 2026, title: "3D high resolution urban microclimate reconstruction and sensor placement optimization based on diffusion-based deep learning", authors: "Youmin Xu, Xu Han, <b>Shaoxiang Qin</b>, Liangzhu (Leon) Wang", venue: "Building and Environment, 114877", href: "https://doi.org/10.1016/j.buildenv.2026.114877" },
    { year: 2026, title: "Urban wind field prediction using Fourier neural operators across different wind directions and cities", authors: "Cheng Chen, Geng Tian, <b>Shaoxiang Qin</b>, Senwen Yang, Dingyang Geng, Dongxue Zhan, Jinqiu Yang, David Vidal, Liangzhu (Leon) Wang", venue: "Building Simulation 19(1), 271–285", href: "https://doi.org/10.1007/s12273-025-1392-x" },
    { year: 2025, title: "Using diffusion models for reducing spatiotemporal errors of deep learning based urban microclimate predictions at post-processing stage", authors: "Sepehrdad Tahmasebi, Geng Tian, <b>Shaoxiang Qin</b>, Ahmed Marey, Liangzhu (Leon) Wang, Saeed Rayegan", venue: "Physics of Fluids 37(3)", href: "https://doi.org/10.1063/5.0256658" },
    { year: 2025, title: "Weather clustering for machine learning-based hourly building energy prediction models at design phase", authors: "Dongxue Zhan, <b>Shaoxiang Qin</b>, Liangzhu (Leon) Wang, Ibrahim Galal Hassan", venue: "Energy and Buildings 329, 115308", href: "https://doi.org/10.1016/j.enbuild.2025.115308" },
    { year: 2024, title: "Peering the edge: enabling low-latency interdomain edge communication via collaborative transmission", authors: "Yuxin Wang, Haoyu Liu, Haohao Song, Siyong Huang, <b>Shaoxiang Qin</b>, Yutong Liu, Qiao Xiang, Linghe Kong, Geng Li, Jiwu Shu, Xue Liu", venue: "IWQoS 2024", href: "https://doi.org/10.1109/iwqos61813.2024.10682890" }
  ]
};

(function (S) {
  function nb(a) { return a.replace(/\b([A-Z]{1,3}) (?=[A-Z][A-Za-z'\u00C0-\u017F-]+)/g, "$1\u00a0"); }
  [S.main, S.others].forEach(function (list) { (list || []).forEach(function (p) { if (p.authors) p.authors = nb(p.authors); }); });
})(window.SITE);
