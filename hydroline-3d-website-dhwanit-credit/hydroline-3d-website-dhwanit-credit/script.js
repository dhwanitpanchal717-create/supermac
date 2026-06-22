const machines = [
  {
    model: "SMH 80",
    tonnage: 80,
    clamp: {
      "Mould Clamping Force": "80 tons",
      "Minimum Mould Height": "150 mm",
      "Maximum Mould Opening Stroke": "500 mm",
      "Maximum Day Light": "650 mm",
      "Distance Between Tie Rod": "380 x 380 mm",
      "Mould Platen Size": "570 x 570 mm",
      "Tie Rod Dia": "65 mm",
      "Ejector Force": "3 tons",
      "Ejector Stroke": "100 mm",
      "Mould Carrying Capacity": "500 kg"
    },
    general: {
      "Servo Motor": "10(13) kW",
      "Oil Tank Capacity": "275 ltrs",
      "Water Requirement": "50 lpm",
      "Connected Load": "17(22) / 19(25) kW",
      "Machine Dimensions": "12.8 x 2.6 x 5.1 ft / 13 x 3 x 5.1 ft"
    },
    quick: {
      "Screw Diameter": "30–45 mm",
      "Max Injection Weight": "100–271 gm",
      "Injection Pressure Max": "1389–2297 bar",
      "Heating Zones": "3+1 / 4+1"
    }
  },
  {
    model: "SMH 110",
    tonnage: 110,
    clamp: {
      "Mould Clamping Force": "110 tons",
      "Minimum Mould Height": "200 mm",
      "Maximum Mould Opening Stroke": "550 mm",
      "Maximum Day Light": "750 mm",
      "Distance Between Tie Rod": "410 x 410 mm",
      "Mould Platen Size": "610 x 610 mm",
      "Tie Rod Dia": "70 mm",
      "Ejector Force": "4.5 tons",
      "Ejector Stroke": "125 mm",
      "Mould Carrying Capacity": "1050 kg"
    },
    general: {
      "Servo Motor": "15(20) kW",
      "Oil Tank Capacity": "430 ltrs",
      "Water Requirement": "75 lpm",
      "Connected Load": "22(29) / 24(32) / 28(37) kW",
      "Machine Dimensions": "15 x 3 x 5.5 ft / 16.5 x 3.5 x 5.5 ft"
    },
    quick: {
      "Screw Diameter": "30–50 mm",
      "Max Injection Weight": "100–400 gm",
      "Injection Pressure Max": "1389–2346 bar",
      "Heating Zones": "3+1 / 4+1"
    }
  },
  {
    model: "SMH 125",
    tonnage: 125,
    clamp: {
      "Mould Clamping Force": "125 tons",
      "Minimum Mould Height": "200 mm",
      "Maximum Mould Opening Stroke": "600 mm",
      "Maximum Day Light": "800 mm",
      "Distance Between Tie Rod": "460 x 460 mm",
      "Mould Platen Size": "720 x 720 mm",
      "Tie Rod Dia": "80 mm",
      "Ejector Force": "6 tons",
      "Ejector Stroke": "140 mm",
      "Mould Carrying Capacity": "1050 kg"
    },
    general: {
      "Servo Motor": "18(24) kW",
      "Oil Tank Capacity": "450 ltrs",
      "Water Requirement": "75 lpm",
      "Connected Load": "27(36) / 31(41) kW",
      "Machine Dimensions": "17.5 x 3.5 x 5.5 ft / 18 x 3.5 x 5.8 ft"
    },
    quick: {
      "Screw Diameter": "35–50 mm",
      "Max Injection Weight": "164–400 gm",
      "Injection Pressure Max": "1389–2346 bar",
      "Heating Zones": "4+1"
    }
  },
  {
    model: "SMH 150",
    tonnage: 150,
    clamp: {
      "Mould Clamping Force": "150 tons",
      "Minimum Mould Height": "200 mm",
      "Maximum Mould Opening Stroke": "650 mm",
      "Maximum Day Light": "850 mm",
      "Distance Between Tie Rod": "510 x 510 mm",
      "Mould Platen Size": "760 x 760 mm",
      "Tie Rod Dia": "90 mm",
      "Ejector Force": "6 tons",
      "Ejector Stroke": "140 mm",
      "Mould Carrying Capacity": "2000 kg"
    },
    general: {
      "Servo Motor": "20(27) kW",
      "Oil Tank Capacity": "575 ltrs",
      "Water Requirement": "100 lpm",
      "Connected Load": "29(38) / 33(44) / 37(49) kW",
      "Machine Dimensions": "18 x 3.5 x 6 ft / 19 x 3.5 x 6 ft"
    },
    quick: {
      "Screw Diameter": "35–55 mm",
      "Max Injection Weight": "164–561 gm",
      "Injection Pressure Max": "1389–2506 bar",
      "Heating Zones": "4+1"
    }
  },
  {
    model: "SMH 200",
    tonnage: 200,
    clamp: {
      "Mould Clamping Force": "200 tons",
      "Minimum Mould Height": "250 mm",
      "Maximum Mould Opening Stroke": "750 mm",
      "Maximum Day Light": "1000 mm",
      "Distance Between Tie Rod": "560 x 560 mm",
      "Mould Platen Size": "830 x 830 mm",
      "Tie Rod Dia": "100 mm",
      "Ejector Force": "10 tons",
      "Ejector Stroke": "175 mm",
      "Mould Carrying Capacity": "2500 kg"
    },
    general: {
      "Servo Motor": "25(33) kW",
      "Oil Tank Capacity": "660 ltrs",
      "Water Requirement": "150 lpm",
      "Connected Load": "38(50) / 42(56) / 45(60) kW",
      "Machine Dimensions": "19 x 3.5 x 6.5 ft / 20 x 3.8 x 6.7 ft"
    },
    quick: {
      "Screw Diameter": "40–60 mm",
      "Max Injection Weight": "255–668 gm",
      "Injection Pressure Max": "1495–2506 bar",
      "Heating Zones": "4+1"
    }
  },
  {
    model: "SMH 250",
    tonnage: 250,
    clamp: {
      "Mould Clamping Force": "250 tons",
      "Minimum Mould Height": "250 mm",
      "Maximum Mould Opening Stroke": "850 mm",
      "Maximum Day Light": "1100 mm",
      "Distance Between Tie Rod": "640 x 640 mm",
      "Mould Platen Size": "970 x 970 mm",
      "Tie Rod Dia": "100 mm",
      "Ejector Force": "10 tons",
      "Ejector Stroke": "175 mm",
      "Mould Carrying Capacity": "3200 kg"
    },
    general: {
      "Servo Motor": "27(36) kW",
      "Oil Tank Capacity": "800 ltrs",
      "Water Requirement": "150 lpm",
      "Connected Load": "44(59) / 47(63) / 52(69) kW",
      "Machine Dimensions": "22 x 4.2 x 6.5 ft / 23 x 6 x 6.5 ft"
    },
    quick: {
      "Screw Diameter": "45–70 mm",
      "Max Injection Weight": "376–1017 gm",
      "Injection Pressure Max": "1427–2506 bar",
      "Heating Zones": "4+1"
    }
  },
  {
    model: "SMH 300",
    tonnage: 300,
    clamp: {
      "Mould Clamping Force": "300 tons",
      "Minimum Mould Height": "250 mm",
      "Maximum Mould Opening Stroke": "950 mm",
      "Maximum Day Light": "1200 mm",
      "Distance Between Tie Rod": "700 x 650 mm",
      "Mould Platen Size": "1010 x 960 mm",
      "Tie Rod Dia": "110 mm",
      "Ejector Force": "10 tons",
      "Ejector Stroke": "200 mm",
      "Mould Carrying Capacity": "3800 kg"
    },
    general: {
      "Servo Motor": "27(36) kW",
      "Oil Tank Capacity": "800 ltrs",
      "Water Requirement": "150 lpm",
      "Connected Load": "44(59) / 47(63) / 52(69) kW",
      "Machine Dimensions": "23 x 4.2 x 7.8 ft"
    },
    quick: {
      "Screw Diameter": "50–80 mm",
      "Max Injection Weight": "461–1662 gm",
      "Injection Pressure Max": "1422–2528 bar",
      "Heating Zones": "4+1"
    }
  },
  {
    model: "SMH 350",
    tonnage: 350,
    clamp: {
      "Mould Clamping Force": "350 tons",
      "Minimum Mould Height": "300 mm",
      "Maximum Mould Opening Stroke": "1100 mm",
      "Maximum Day Light": "1400 mm",
      "Distance Between Tie Rod": "760 x 760 mm",
      "Mould Platen Size": "1130 x 1130 mm",
      "Tie Rod Dia": "120 mm",
      "Ejector Force": "12 tons",
      "Ejector Stroke": "200 mm",
      "Mould Carrying Capacity": "4800 kg"
    },
    general: {
      "Servo Motor": "37(49) kW",
      "Oil Tank Capacity": "1400 ltrs",
      "Water Requirement": "180 lpm",
      "Connected Load": "57(76) / 62(83) / 67(89) kW",
      "Machine Dimensions": "27 x 6 x 7.5 ft / 28 x 7.5 x 7.5 ft"
    },
    quick: {
      "Screw Diameter": "60–90 mm",
      "Max Injection Weight": "748–2403 gm",
      "Injection Pressure Max": "1422–2528 bar",
      "Heating Zones": "4+1 / 5+1"
    }
  },
  {
    model: "SMH 450",
    tonnage: 450,
    clamp: {
      "Mould Clamping Force": "450 tons",
      "Minimum Mould Height": "400 mm",
      "Maximum Mould Opening Stroke": "1100 mm",
      "Maximum Day Light": "1500 mm",
      "Distance Between Tie Rod": "830 x 830 mm",
      "Mould Platen Size": "1270 x 1270 mm",
      "Tie Rod Dia": "140 mm",
      "Ejector Force": "12 tons",
      "Ejector Stroke": "200 mm",
      "Mould Carrying Capacity": "6800 kg"
    },
    general: {
      "Servo Motor": "45(60) kW",
      "Oil Tank Capacity": "1550 ltrs",
      "Water Requirement": "220 lpm",
      "Connected Load": "70(93) / 75(100) kW",
      "Machine Dimensions": "29 x 7.5 x 7.5 ft / 30 x 7.5 x 7.5 ft"
    },
    quick: {
      "Screw Diameter": "60–100 mm",
      "Max Injection Weight": "935–3115 gm",
      "Injection Pressure Max": "1422–2528 bar",
      "Heating Zones": "4+1 / 5+1"
    }
  },
  {
    model: "SMH 650",
    tonnage: 650,
    clamp: {
      "Mould Clamping Force": "650 tons",
      "Minimum Mould Height": "500 mm",
      "Maximum Mould Opening Stroke": "1350 mm",
      "Maximum Day Light": "1850 mm",
      "Distance Between Tie Rod": "950 x 950 mm",
      "Mould Platen Size": "1400 x 1400 mm",
      "Tie Rod Dia": "170 mm",
      "Ejector Force": "12 tons",
      "Ejector Stroke": "200 mm",
      "Mould Carrying Capacity": "9500 kg"
    },
    general: {
      "Servo Motor": "65(87) kW",
      "Oil Tank Capacity": "2000 ltrs",
      "Water Requirement": "300 lpm",
      "Connected Load": "95(127) / 119(159) / 125(167) kW",
      "Machine Dimensions": "34 x 9 x 9.8 ft / 34.5 x 9 x 9.8 ft"
    },
    quick: {
      "Screw Diameter": "70–125 mm",
      "Max Injection Weight": "1454–5100 gm",
      "Injection Pressure Max": "1349–2400 bar",
      "Heating Zones": "4+1 / 5+1 / 6+1"
    }
  }
];

const overviewCards = [
  ["80–650 Ton Range", "Hydroline range covers compact to heavy-duty injection molding requirements.", "⚙️"],
  ["Direct Clamping Design", "Built for stable platen movement and reliable mold clamping.", "🧲"],
  ["Servo Driven Efficiency", "Servo motor driven system supports energy-saving machine operation.", "⚡"],
  ["Large Mold Space", "Generous mold space helps accommodate larger mold designs.", "📐"],
  ["User Friendly Control", "X-Mold 9 control focuses on clear operation and diagnostics.", "🖥️"],
  ["Stable Production", "Designed for consistent shot weight and process stability.", "📈"]
];

const callouts = [
  { id: 1, title: "Large Ram Diameter & Unique Prefill Cylinder Design", x: "18%", y: "31%", bullets: ["Uniform force distribution across platen", "Excellent mold squareness and parallelism", "Reduced mold wear", "Fast tonnage build-up time"] },
  { id: 2, title: "Generous Mold Space", x: "44%", y: "30%", bullets: ["Accommodates large molds"] },
  { id: 3, title: "Closed Loop PID Temperature Control", x: "62%", y: "30%", bullets: ["Precise temperature control", "Excellent process control and stability"] },
  { id: 4, title: "Injection Unit", x: "80%", y: "38%", bullets: ["Twin cylinder injection unit provides uniform load distribution across screw centreline", "Frictionless linear bearing guideways improve injection power and cylinder alignment", "Closed loop pressure control through servo", "Sliding hopper"] },
  { id: 5, title: "X-Mold 9 User Friendly Control", x: "58%", y: "64%", bullets: ["Ergonomic layout", "High speed processor", "Graphical presentation of machine features", "Direct access menu keys", "Self diagnostic and fault finding capability", "Statistical process control"] },
  { id: 6, title: "Servo Motor", x: "83%", y: "68%", bullets: ["Outstanding energy saving", "Faster response towards hydraulic system", "Excellent shot weight consistency", "Reduced noise level"] },
  { id: 7, title: "Wide Skates for Platen Support", x: "38%", y: "66%", bullets: ["Reduced platen deflection", "Enhanced life of tie-bars", "Higher mold carrying capacity"] }
];

const standardFeatures = [
  ["Clamp", ["Large prefill designed for fast tonnage build up", "Hollow headless ram with mono seal and no piston rings", "Unique prefill design for fast tonnage build-up", "High speed traverse cylinders", "T-slot platens with tapped holes", "Adjustable moving platen skates", "Rigid casting platens", "Adjustable closing/opening speed and pressure", "Sensitive mold protection", "Insert molding program", "Actual tonnage display on screen"]],
  ["Ejector", ["Multipoint ejection for uniform force distribution", "Ejector speed and pressure adjustable on screen", "Linear transducer for ejector position", "Pilot operated check valve for ejector", "Multiple pulsating ejector strokes", "Intermediate retract set point", "Ejector stay forward and forward delay timer"]],
  ["Temperature Control", ["Heating zone current display", "Heater failure and thermocouple failure detection", "PID temperature control", "Feed throat temperature indication", "Auto heat startup and shutdown", "Heat standby after set number of cycles", "Soak timer for cold start protection", "High/low temperature alarm", "Temperature graph", "Insulated heater bands", "Oil temperature on screen"]],
  ["Injection", ["Multi-stage injection speed and pressure profile", "Multi-stage screw speed and manual back pressure control", "Digital screw RPM setting", "A/B/C screw and barrel combinations", "Comfortable injection unit swivelling", "Switch over from fill to pack by position or time", "Linear position transducer for injection position", "Injection decompression before/after refilling", "Semi-auto purge", "Chequered plate below purge area", "Injection start, suck-back and melt decompression delay timer", "Adjustable alarm bands for injection pressure"]],
  ["Controls", ["Automatic sequence by codes or free programmable sequence", "10.5 inch TFT color display with alpha-numeric keypad", "Actual movement speed and pressure graph", "100 mold data storage", "Configurable multilevel password", "Graphical hourly production table", "Customized setup menu", "High/low limit display", "I/O diagnosis visualization", "Free I/O assignment", "Change log for set point changes with time and date", "Integrated statistical process control", "Smart outputs", "Overview screen with graphical machine function display", "Soft keys", "Visual and audible alarm", "Alarm history", "Automatic cycle graph", "USB recipe exchange", "Ethernet host-PC connection", "Remote modem or internet support", "External USB data saving", "Online help", "LED function keys"]],
  ["Hydraulics", ["Servo motor driven pump", "Convenient hydraulic layout", "Valves near actuators for quick response", "Low oil level indicator", "Continuous oil filtration with 10 micron filter", "Oil temperature on screen"]],
  ["Available Options", ["Proportional speed control for mold open and close", "Proportional back pressure control on screen", "Air ejection", "Hydraulic core pull", "Feed throat temperature control", "Part drop sensor", "Water manifolds", "Robot interface EUROMAP 67", "Extra heating zones", "T-slot platens", "Extended daylight with ram spacer", "Eject retract limit switch verification", "Bimetallic barrel and hardened/coated screw", "Ejector on fly", "Free programmable cores"]]
];

const applications = [
  ["Food Containers", "Suitable for buckets, containers, tubs, and packaging products.", "🥡"],
  ["PET Products", "Useful for PET preform and transparent molded plastic applications.", "🧪"],
  ["Automobile Parts", "Supports molded automotive plastic components and housings.", "🚗"],
  ["Household Appliances", "Applicable for home appliance parts and consumer plastic products.", "🏠"],
  ["Medical Products", "Useful for syringe-like and precision medical plastic products.", "💉"],
  ["Paint Buckets", "Suitable for larger bucket and container molding applications.", "🪣"],
  ["Pipes and Fittings", "Supports PVC and technical plastic fitting production.", "🔩"],
  ["Water Purifier Parts", "Useful for purifier housings and filter components.", "💧"],
  ["General Plastic Products", "Covers everyday molded components across industries.", "🧩"],
  ["Toys & Consumer Products", "Suitable for toys and lightweight consumer products.", "🧸"]
];

let selectedModel = machines.find(m => m.model === "SMH 125") || machines[0];
let selectedCompare = ["SMH 125", "SMH 200", "SMH 300"];
let activeCallout = callouts[0];
const experienceState = { blueprint: false, lens: false, pulse: false };

document.addEventListener("DOMContentLoaded", () => {
  setupHeader();
  setupTilt();
  setupReveal();
  renderOverview();
  renderExperienceDeck();
  renderCallouts();
  renderModels();
  renderTabs();
  renderSpecs();
  renderCompareControls();
  renderCompareTable();
  renderStandardFeatures();
  renderApplications();
});

function setupHeader() {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

function setupTilt() {
  const stage = document.getElementById("machineTilt");
  if (!stage) return;

  const zoomRange = document.getElementById("zoomRange");
  const zoomIn = document.getElementById("zoomIn");
  const zoomOut = document.getElementById("zoomOut");
  const zoomReset = document.getElementById("zoomReset");
  const zoomReadout = document.getElementById("zoomReadout");
  const inspectionLens = document.getElementById("inspectionLens");

  let zoom = 1;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let startPanX = 0;
  let startPanY = 0;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function applyZoom(nextZoom, resetPan = false) {
    zoom = clamp(Number(nextZoom), 1, 1.8);

    if (resetPan || zoom === 1) {
      panX = 0;
      panY = 0;
    }

    const maxPan = (zoom - 1) * 90;
    panX = clamp(panX, -maxPan, maxPan);
    panY = clamp(panY, -maxPan * 0.62, maxPan * 0.62);

    stage.style.setProperty("--zoom", zoom.toFixed(2));
    stage.style.setProperty("--panX", `${panX}px`);
    stage.style.setProperty("--panY", `${panY}px`);
    stage.classList.toggle("zoomed", zoom > 1.02);

    if (zoomRange) zoomRange.value = zoom.toFixed(2);
    if (zoomReadout) zoomReadout.textContent = `${Math.round(zoom * 100)}%`;
  }

  stage.addEventListener("mousemove", (event) => {
    if (isDragging) return;
    const rect = stage.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const ry = ((x / rect.width) - 0.5) * 12;
    const rx = -((y / rect.height) - 0.5) * 9;
    const tx = ((x / rect.width) - 0.5) * 8;
    stage.style.setProperty("--rx", `${rx}deg`);
    stage.style.setProperty("--ry", `${ry}deg`);
    stage.style.setProperty("--tx", `${tx}px`);

    if (inspectionLens && experienceState.lens) {
      inspectionLens.style.left = `${x}px`;
      inspectionLens.style.top = `${y}px`;
      inspectionLens.style.backgroundPosition = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
    }
  });

  stage.addEventListener("mouseleave", () => {
    if (isDragging) return;
    stage.style.setProperty("--rx", "0deg");
    stage.style.setProperty("--ry", "0deg");
    stage.style.setProperty("--tx", "0px");
  });

  stage.addEventListener("wheel", (event) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -0.08 : 0.08;
    applyZoom(zoom + delta);
  }, { passive: false });

  stage.addEventListener("dblclick", () => {
    applyZoom(zoom > 1.02 ? 1 : 1.45, true);
  });

  stage.addEventListener("pointerdown", (event) => {
    if (zoom <= 1.02) return;
    isDragging = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    startPanX = panX;
    startPanY = panY;
    stage.classList.add("dragging");
    stage.setPointerCapture(event.pointerId);
  });

  stage.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    const maxPan = (zoom - 1) * 90;
    panX = clamp(startPanX + event.clientX - dragStartX, -maxPan, maxPan);
    panY = clamp(startPanY + event.clientY - dragStartY, -maxPan * 0.62, maxPan * 0.62);
    stage.style.setProperty("--panX", `${panX}px`);
    stage.style.setProperty("--panY", `${panY}px`);
  });

  function stopDrag(event) {
    if (!isDragging) return;
    isDragging = false;
    stage.classList.remove("dragging");
    if (event?.pointerId && stage.hasPointerCapture(event.pointerId)) {
      stage.releasePointerCapture(event.pointerId);
    }
  }

  stage.addEventListener("pointerup", stopDrag);
  stage.addEventListener("pointercancel", stopDrag);

  zoomRange?.addEventListener("input", () => applyZoom(zoomRange.value));
  zoomIn?.addEventListener("click", () => applyZoom(zoom + 0.15));
  zoomOut?.addEventListener("click", () => applyZoom(zoom - 0.15));
  zoomReset?.addEventListener("click", () => applyZoom(1, true));

  applyZoom(1, true);
  setupExperienceControls();
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}


function setupExperienceControls() {
  document.querySelectorAll("[data-experience-toggle]").forEach(btn => {
    if (btn.dataset.experienceBound === "true") return;
    btn.dataset.experienceBound = "true";
    btn.addEventListener("click", () => {
      const mode = btn.dataset.experienceToggle;
      experienceState[mode] = !experienceState[mode];
      updateExperienceMode();
    });
  });
  updateExperienceMode();
}

function updateExperienceMode() {
  const stage = document.getElementById("machineTilt");
  if (stage) {
    stage.classList.toggle("blueprint-on", experienceState.blueprint);
    stage.classList.toggle("lens-on", experienceState.lens);
    stage.classList.toggle("pulse-on", experienceState.pulse);
  }
  document.body.classList.toggle("spec-pulse-on", experienceState.pulse);

  document.querySelectorAll("[data-experience-toggle]").forEach(btn => {
    const mode = btn.dataset.experienceToggle;
    btn.classList.toggle("active", Boolean(experienceState[mode]));
  });
}

function renderExperienceDeck() {
  const deck = document.getElementById("experienceDeck");
  const orbit = document.getElementById("tonnageOrbit");
  const dashboard = document.getElementById("modelDashboard");
  const consoleModel = document.getElementById("consoleModel");

  if (consoleModel) consoleModel.textContent = `${selectedModel.model} · ${selectedModel.tonnage} TON`;

  if (deck) {
    const cards = [
      ["blueprint", "▧", "Blueprint Scan", "Turns the hero machine into a technical blueprint-style scan layer."],
      ["lens", "◉", "Inspection Lens", "Move your cursor over the machine to inspect details with a magnified glass effect."],
      ["pulse", "✦", "Spec Pulse", "Adds a subtle live-data pulse to selected model specs and dashboard cards."]
    ];
    deck.innerHTML = cards.map(([mode, icon, title, text]) => `
      <article class="deck-card">
        <div class="deck-icon">${icon}</div>
        <h3>${title}</h3>
        <p>${text}</p>
        <button class="deck-action ${experienceState[mode] ? "active" : ""}" data-experience-toggle="${mode}">
          ${experienceState[mode] ? "Active" : "Try it"}
        </button>
      </article>
    `).join("");
  }

  if (orbit) {
    const radius = 142;
    orbit.innerHTML = `
      <div class="orbit-core"><div><strong>${selectedModel.tonnage}</strong><span>Ton Active</span></div></div>
      ${machines.map((m, index) => {
        const angle = (index / machines.length) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return `<button class="orbit-node ${m.model === selectedModel.model ? "active" : ""}" style="transform: translate(${x}px, ${y}px);" data-orbit-model="${m.model}">${m.model.replace("SMH ", "")}</button>`;
      }).join("")}
    `;
    orbit.querySelectorAll("[data-orbit-model]").forEach(btn => {
      btn.addEventListener("click", () => {
        selectedModel = machines.find(m => m.model === btn.dataset.orbitModel) || selectedModel;
        renderModels();
        renderTabs();
        renderSpecs();
        renderExperienceDeck();
      });
    });
  }

  if (dashboard) {
    const maxTonnage = 650;
    const capacity = Number(String(selectedModel.clamp["Mould Carrying Capacity"]).replace(/[^0-9.]/g, "")) || 0;
    const capacityPercent = Math.min(100, Math.round((capacity / 9500) * 100));
    const tonnagePercent = Math.min(100, Math.round((selectedModel.tonnage / maxTonnage) * 100));
    dashboard.innerHTML = `
      <p class="dashboard-kicker">Active Model</p>
      <h3>${selectedModel.model}</h3>
      <p class="muted-copy">A quick visual dashboard for the selected Hydroline model.</p>
      <div class="dashboard-metrics">
        <div class="metric-tile"><span>Clamping Force</span><strong>${selectedModel.clamp["Mould Clamping Force"]}</strong></div>
        <div class="metric-tile"><span>Servo Motor</span><strong>${selectedModel.general["Servo Motor"]}</strong></div>
        <div class="metric-tile"><span>Tie Rod Distance</span><strong>${selectedModel.clamp["Distance Between Tie Rod"]}</strong></div>
        <div class="metric-tile"><span>Machine Size</span><strong>${selectedModel.general["Machine Dimensions"]}</strong></div>
      </div>
      <div class="power-bar"><span><b>Tonnage Scale</b><b>${tonnagePercent}%</b></span><div class="power-track"><div class="power-fill" style="--fill:${tonnagePercent}%"></div></div></div>
      <div class="power-bar"><span><b>Mold Carrying Capacity</b><b>${capacityPercent}%</b></span><div class="power-track"><div class="power-fill" style="--fill:${capacityPercent}%"></div></div></div>
    `;
  }

  setupExperienceControls();
  updateExperienceMode();
  setupReveal();
}

function renderOverview() {
  const grid = document.getElementById("overviewGrid");
  grid.innerHTML = overviewCards.map(([title, text, icon]) => `
    <article class="overview-card reveal">
      <div class="icon-box">${icon}</div>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
  setupReveal();
}

function renderCallouts() {
  const layer = document.getElementById("calloutLayer");
  const panel = document.getElementById("featurePanel");

  layer.innerHTML = callouts.map(item => `
    <button class="callout ${item.id === activeCallout.id ? "active" : ""}" style="left:${item.x};top:${item.y}" data-callout="${item.id}">${item.id}</button>
  `).join("");

  const mobile = `
    <div class="mobile-callouts">
      ${callouts.map(item => `<button class="${item.id === activeCallout.id ? "active" : ""}" data-callout="${item.id}">${item.id}</button>`).join("")}
    </div>
  `;

  panel.innerHTML = `
    <p class="eyebrow">Feature ${activeCallout.id}</p>
    <h3>${activeCallout.title}</h3>
    <ul>${activeCallout.bullets.map(bullet => `<li>${bullet}</li>`).join("")}</ul>
    ${mobile}
  `;

  document.querySelectorAll("[data-callout]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCallout = callouts.find(c => c.id === Number(btn.dataset.callout));
      renderCallouts();
    });
  });
}

function renderModels() {
  const grid = document.getElementById("modelGrid");
  grid.innerHTML = machines.map(m => `
    <article class="model-card ${m.model === selectedModel.model ? "active" : ""}">
      <div class="model-ton">${m.tonnage} Ton</div>
      <h3>${m.model}</h3>
      <div class="info-line"><span>Servo Motor</span><strong>${m.general["Servo Motor"]}</strong></div>
      <div class="info-line"><span>Mold Capacity</span><strong>${m.clamp["Mould Carrying Capacity"]}</strong></div>
      <div class="info-line"><span>Dimensions</span><strong>${m.general["Machine Dimensions"]}</strong></div>
      <button class="view-spec-btn" data-model="${m.model}">View Specs</button>
    </article>
  `).join("");

  grid.querySelectorAll("button[data-model]").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedModel = machines.find(m => m.model === btn.dataset.model);
      renderModels();
      renderTabs();
      renderSpecs();
      renderExperienceDeck();
      document.getElementById("specifications").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderTabs() {
  const tabs = document.getElementById("modelTabs");
  tabs.innerHTML = machines.map(m => `
    <button class="tab-btn ${m.model === selectedModel.model ? "active" : ""}" data-model="${m.model}">${m.model}</button>
  `).join("");
  tabs.querySelectorAll("button[data-model]").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedModel = machines.find(m => m.model === btn.dataset.model);
      renderModels();
      renderTabs();
      renderSpecs();
      renderExperienceDeck();
    });
  });
}

function renderSpecs() {
  document.getElementById("specTitle").textContent = `${selectedModel.model} technical specifications`;
  const grid = document.getElementById("specGrid");
  grid.innerHTML = `
    <article class="spec-card full reveal">
      <h3>Quick Machine Summary</h3>
      <div class="summary-row">
        <div class="summary-pill"><span>Tonnage</span><strong>${selectedModel.tonnage} ton</strong></div>
        ${Object.entries(selectedModel.quick).map(([key, value]) => `<div class="summary-pill"><span>${key}</span><strong>${value}</strong></div>`).join("")}
      </div>
    </article>
    ${renderSpecCard("Clamp Unit Specification", selectedModel.clamp)}
    ${renderSpecCard("General Data", selectedModel.general)}
  `;
  setupReveal();
}

function renderSpecCard(title, data) {
  return `
    <article class="spec-card reveal">
      <h3>${title}</h3>
      <div class="spec-table-wrap">
        <table class="spec-table">
          <tbody>
            ${Object.entries(data).map(([key, value]) => `
              <tr><th>${key}</th><td>${value}</td></tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `;
}

function renderCompareControls() {
  const wrap = document.getElementById("compareControls");
  wrap.innerHTML = machines.map(m => `
    <button class="${selectedCompare.includes(m.model) ? "active" : ""}" data-compare="${m.model}">${m.model}</button>
  `).join("");
  wrap.querySelectorAll("button[data-compare]").forEach(btn => {
    btn.addEventListener("click", () => {
      const model = btn.dataset.compare;
      if (selectedCompare.includes(model)) {
        if (selectedCompare.length > 2) selectedCompare = selectedCompare.filter(x => x !== model);
      } else if (selectedCompare.length < 3) {
        selectedCompare.push(model);
      }
      renderCompareControls();
      renderCompareTable();
    });
  });
}

function renderCompareTable() {
  const table = document.getElementById("compareTable");
  const selected = machines.filter(m => selectedCompare.includes(m.model));
  const rows = [
    ["Tonnage", m => `${m.tonnage} ton`],
    ["Mould Clamping Force", m => m.clamp["Mould Clamping Force"]],
    ["Tie Rod Distance", m => m.clamp["Distance Between Tie Rod"]],
    ["Platen Size", m => m.clamp["Mould Platen Size"]],
    ["Servo Motor", m => m.general["Servo Motor"]],
    ["Oil Tank Capacity", m => m.general["Oil Tank Capacity"]],
    ["Connected Load", m => m.general["Connected Load"]],
    ["Machine Dimensions", m => m.general["Machine Dimensions"]],
    ["Mould Carrying Capacity", m => m.clamp["Mould Carrying Capacity"]]
  ];

  table.innerHTML = `
    <thead><tr><th>Parameter</th>${selected.map(m => `<th>${m.model}</th>`).join("")}</tr></thead>
    <tbody>
      ${rows.map(([label, get]) => {
        const values = selected.map(get);
        const diff = new Set(values).size > 1;
        return `<tr><th>${label}</th>${values.map(v => `<td class="${diff ? "diff" : ""}">${v}</td>`).join("")}</tr>`;
      }).join("")}
    </tbody>
  `;
}

function renderStandardFeatures() {
  const grid = document.getElementById("standardFeatures");
  grid.innerHTML = standardFeatures.map(([title, bullets]) => `
    <article class="standard-card reveal">
      <div class="icon-box">🔧</div>
      <h3>${title}</h3>
      <ul>
        ${bullets.map((bullet, index) => `<li class="${index > 5 ? "hidden extra" : ""}">${bullet}</li>`).join("")}
      </ul>
      ${bullets.length > 6 ? `<button class="show-more" data-open="false">Show more</button>` : ""}
    </article>
  `).join("");

  grid.querySelectorAll(".show-more").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".standard-card");
      const isOpen = btn.dataset.open === "true";
      card.querySelectorAll("li.extra").forEach(li => li.classList.toggle("hidden", isOpen));
      btn.dataset.open = String(!isOpen);
      btn.textContent = isOpen ? "Show more" : "Show less";
    });
  });
  setupReveal();
}

function renderApplications() {
  const grid = document.getElementById("applicationGrid");
  grid.innerHTML = applications.map(([title, text, icon]) => `
    <article class="application-card reveal">
      <div class="app-icon">${icon}</div>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
  setupReveal();
}
