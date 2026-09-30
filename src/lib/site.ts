export const company = {
  name: "Lucy Engineering Works Pvt. Ltd.",
  short: "Lucy Engineering",
  phone: "08047810588",
  phoneHref: "tel:08047810588",
  address: "Sachin G.I.D.C., Surat, Gujarat — 394230, India",
  coords: "21.07° N, 72.87° E",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Lucy+Engineering+Works+Sachin+GIDC+Surat",
  brochureHref: "https://www.lucyengineering.com/company-brochure.pdf",
  founded: 1985,
  certification: "ISO 9001:2015",
};

export const nav = [
  { label: "Machines", href: "/machines" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Applications", href: "/applications" },
  { label: "Contact", href: "/contact" },
];

export type Spec = { label: string; value: string };

export type Schematic = {
  kind: "stenter" | "mangle" | "dryer" | "cylinders" | "drum" | "cutter" | "burner" | "dyeing";
  chambers?: number;
};

export type Machine = {
  slug: string;
  code: string;
  name: string;
  category: string;
  summary: string;
  intro: string;
  body: string[];
  specs: Spec[];
  features: { title: string; text: string }[];
  fabrics: string[];
  process: string;
  image?: string;
  schematic: Schematic;
};

export const machines: Machine[] = [
  {
    slug: "stenter-machine",
    code: "LEW-STM-01",
    name: "Stenter Machine",
    category: "Heat-Setting & Finishing",
    summary:
      "Flagship heavy-duty textile finishing range. Precision pin/clip transport, uniform chamber airflow distribution, bow/skew weft straightening, and multi-zone heating controls.",
    intro:
      "The stenter is the last and most decisive stage in a fabric processing house — it sets width, stabilises dimensions, cures finishes and determines the hand of the fabric that ships to the garment maker.",
    body: [
      "Lucy's hot-air stenter holds fabric by both selvedges on a continuous pin or clip chain and carries it through a series of insulated chambers. Balanced upper and lower blowers drive heated air through calibrated nozzles, so the fabric dries and heat-sets evenly from edge to centre.",
      "Width is set by motorised rail spindles, while servo overfeed at the inlet lets the operator feed extra fabric into the chain to control residual shrinkage — essential for knits and stretch wovens. The same line handles drying, heat-setting of polyester and blends, resin curing and softener application.",
    ],
    specs: [
      { label: "Working Width", value: "Up to 3,600 mm" },
      { label: "Heating Media", value: "Thermic Oil / Gas / Steam" },
      { label: "Chamber Modules", value: "3 to 10 Chambers" },
      { label: "Overfeed Range", value: "-10% to +50%" },
      { label: "Max Temperature", value: "225°C Calibrated" },
      { label: "Fabric Transport", value: "Pin / Clip / Combined Chain" },
    ],
    features: [
      { title: "Heavy-duty track & pin clips", text: "Cast-iron rails with graphite slide shoes for continuous running with automatic chain lubrication." },
      { title: "Bow & skew weft control", text: "Mechanical and optical weft straighteners remove diagonal distortion before the fabric enters the heat." },
      { title: "Balanced air circulation", text: "Independent upper and lower blowers prevent fabric sag and give uniform heat-setting across width." },
      { title: "Integrated padder inlet", text: "Optional 2 or 3 bowl padding mangle for finish application in the same pass." },
    ],
    fabrics: ["Woven cotton & PC", "Polyester & synthetics", "Knits (open width)", "Denim", "Home furnishing"],
    process: "Drying · Heat-setting · Curing · Width setting",
    image: "/images/stenter-hero.jpg",
    schematic: { kind: "stenter", chambers: 6 },
  },
  {
    slug: "batching-stenter-machine",
    code: "LEW-BST-02",
    name: "Batching Stenter Machine",
    category: "Heat-Setting & Finishing",
    summary:
      "Continuous high-expression batch processing designed for high-capacity roll winding, stable fabric guide tensioning, and rapid batch changeover efficiency.",
    intro:
      "A stenter with a controlled-tension batching outlet — fabric leaves the heat and is wound straight onto large rolls, ready for the next process or for dispatch.",
    body: [
      "Where plaiting in folds creates crease marks or handling bottlenecks, batching winds the finished fabric onto a heavy A-frame roll under constant tension. Dancer-controlled surface winding keeps the roll density even from core to full diameter.",
      "The batching stenter is preferred for woven shirting, suiting and technical fabrics that move to calendering, inspection or coating in roll form, and for mills that want fewer operators at the delivery end.",
    ],
    specs: [
      { label: "Execution", value: "Heavy Continuous A-Frame" },
      { label: "Overfeed Range", value: "-10% to +50%" },
      { label: "Speed Parameter", value: "10 — 100 m/min" },
      { label: "Batching", value: "Surface / Centre Winding" },
      { label: "Heating Media", value: "Thermic Oil / Gas / Steam" },
      { label: "Working Width", value: "Up to 3,600 mm" },
    ],
    features: [
      { title: "Constant-tension winding", text: "Dancer roller and inverter drive hold uniform tension as roll diameter builds." },
      { title: "Rapid batch changeover", text: "Quick roll doffing keeps the stenter running while full batches are removed." },
      { title: "Crease-free delivery", text: "Winding instead of plaiting avoids fold marks on sensitive and finished goods." },
      { title: "Edge alignment", text: "Guider at outlet keeps selvedges aligned for straight, telescoping-free rolls." },
    ],
    fabrics: ["Shirting & suiting", "Denim", "Technical fabrics", "Coating substrates"],
    process: "Heat-setting · Finishing · Roll batching",
    image: "/images/stenter-side.jpg",
    schematic: { kind: "stenter", chambers: 5 },
  },
  {
    slug: "3-bowl-mangle-float-dryer",
    code: "LEW-3BM-03",
    name: "3 Bowl Mangle with Float Dryer",
    category: "Padding & Pre-Drying",
    summary:
      "High-expression chemical and resin impregnation mangle paired with an advanced touchless Float Dryer chamber for uniform bilateral preliminary drying.",
    intro:
      "Padding applies dye or finish liquor evenly; the float dryer then dries it without touching the fabric — the combination behind consistent pad-dry dyeing and finishing.",
    body: [
      "The three-bowl mangle squeezes fabric through pneumatically loaded rollers after it passes the liquor trough, giving a controlled, repeatable wet pick-up from selvedge to selvedge. Uniform pick-up is the single biggest factor in shade consistency on pad dyeing lines.",
      "Immediately after padding, the fabric enters the float dryer where it is carried on an air cushion between opposing nozzles. Contact-free drying from both sides minimises dye migration, marks and listing, before the fabric moves to curing or the stenter.",
    ],
    specs: [
      { label: "Bowl Configuration", value: "3-Roller High Pressure" },
      { label: "Float Dryer Nozzles", value: "Aerodynamic Cushion" },
      { label: "Pressure Loading", value: "Pneumatic Calibrated" },
      { label: "Application", value: "Pad-Dry Dyeing / Finishing" },
      { label: "Heating Media", value: "Thermic Oil / Gas / Steam" },
      { label: "Fabric Path", value: "Contact-Free Air Float" },
    ],
    features: [
      { title: "Even wet pick-up", text: "Calibrated pneumatic loading gives repeatable expression across the full width." },
      { title: "Touchless drying", text: "Fabric floats on air between upper and lower nozzles — no roller marks." },
      { title: "Reduced dye migration", text: "Balanced two-sided drying keeps colour where it was padded." },
      { title: "Line integration", text: "Designed to feed curing chambers or a stenter in a continuous line." },
    ],
    fabrics: ["Woven cotton & PC", "Polyester", "Workwear", "Home furnishing"],
    process: "Padding · Pre-drying · Pad-dry dyeing",
    schematic: { kind: "mangle", chambers: 3 },
  },
  {
    slug: "relax-dryer-machine",
    code: "LEW-RLX-04",
    name: "Relax Dryer Machine",
    category: "Drying",
    summary:
      "Tensionless tumble drying and shrinkage control for circular knits, open knits, and delicate textiles with wave-form nozzle air suspension.",
    intro:
      "Knitted fabric is stretched through wet processing. A relax dryer lets it recover — drying it without tension so the loops settle and residual shrinkage drops before the garment is cut.",
    body: [
      "The fabric is overfed onto slow conveyor belts and dried by hot air blown alternately from above and below. The pulsating air lifts and 'bounces' the fabric, releasing stored tension and letting it shrink freely while it dries.",
      "The result is lower length-wise shrinkage, better dimensional stability, and a fuller, softer hand — the qualities knit garment exporters test for. Lucy's relax dryer handles both tubular and open-width knits across a wide range of GSM.",
    ],
    specs: [
      { label: "Width Range", value: "600 — 3800 mm" },
      { label: "Operating Passes", value: "1, 2, or 3 Passes" },
      { label: "Max Operating Temp", value: "225°C Calibrated" },
      { label: "Evaporation", value: "Up to 230 kg/hr" },
      { label: "Speed", value: "0 — 30 m/min" },
      { label: "Chambers", value: "Up to 6 Chambers" },
    ],
    features: [
      { title: "Tension-free drying", text: "Overfeed onto a slow belt so fabric dries fully relaxed." },
      { title: "Pulsating air flow", text: "Alternating nozzle air agitates the fabric for shrinkage recovery." },
      { title: "Tubular & open width", text: "Suited to single jersey, rib, interlock, fleece and lycra knits." },
      { title: "Modular passes", text: "1, 2 or 3 belt passes sized to production and floor space." },
    ],
    fabrics: ["Single jersey", "Rib & interlock", "Fleece", "Lycra knits"],
    process: "Tension-free drying · Shrinkage control",
    schematic: { kind: "dryer", chambers: 4 },
  },
  {
    slug: "drying-range",
    code: "LEW-DRG-05",
    name: "Drying Range",
    category: "Drying",
    summary:
      "High-output multi-cylinder drying ranges coupled with Shade Dyeing units engineered for heavy continuous dyeing lines and uniform cylinder heat conductivity.",
    intro:
      "Cylinder drying is the fastest way to dry large volumes of woven fabric after washing, bleaching or dyeing — contact heat from steam-filled cans, stacked in vertical stands.",
    body: [
      "Fabric wraps around a series of steam-heated stainless steel cylinders, drying by direct contact as it travels. Individual inverter drives keep tension even between cylinders, so woven fabric stays flat and dimensionally stable.",
      "The drying range is typically installed after continuous washing or dyeing, and can be combined with Lucy's shade dyeing unit to form a continuous dye-and-dry line.",
    ],
    specs: [
      { label: "Cylinder Shells", value: "Stainless Steel 304/316" },
      { label: "Drive Transmission", value: "Individual Inverter Drive" },
      { label: "Drying Capacity", value: "High Evaporation M/C" },
      { label: "Configuration", value: "Vertical Cylinder Stands" },
      { label: "Heating Media", value: "Steam" },
      { label: "Fabric", value: "Woven Open Width" },
    ],
    features: [
      { title: "Contact drying", text: "Steam-heated cans give high evaporation for heavy woven volumes." },
      { title: "Even tension", text: "Individually driven cylinders prevent stretching between stands." },
      { title: "Stainless shells", text: "304/316 grade shells resist corrosion and avoid rust staining." },
      { title: "Continuous lines", text: "Pairs with washing ranges and shade dyeing for dye-and-dry processing." },
    ],
    fabrics: ["Woven cotton", "PC blends", "Denim", "Canvas"],
    process: "Post-wash & post-dye drying",
    schematic: { kind: "cylinders", chambers: 8 },
  },
  {
    slug: "shade-dyeing-machine",
    code: "LEW-SDM-06",
    name: "Shade Dyeing Machine",
    category: "Dyeing",
    summary:
      "Continuous open-width dyeing unit engineered for uniform shade development, integrated with drying ranges for high-volume dyeing lines.",
    intro:
      "A shade dyeing unit applies dye liquor to open-width fabric in a controlled bath, feeding directly into the drying range for a continuous dye-and-dry process.",
    body: [
      "Fabric passes through a temperature-controlled dye trough and squeeze rollers for uniform liquor application. Consistent immersion time and nip pressure are the keys to shade repeatability between lots.",
      "Configured as part of Lucy's drying range, it reduces handling between dyeing and drying and suits mills running long lots of solid shades on woven fabric.",
    ],
    specs: [
      { label: "Process", value: "Continuous Open Width" },
      { label: "Liquor Application", value: "Trough & Squeeze Nip" },
      { label: "Integration", value: "Inline with Drying Range" },
      { label: "Construction", value: "Stainless Steel Wetted Parts" },
    ],
    features: [
      { title: "Shade repeatability", text: "Controlled immersion and nip pressure for lot-to-lot consistency." },
      { title: "Inline drying", text: "Feeds straight into cylinder drying — no batch handling." },
      { title: "Stainless wet end", text: "Corrosion-resistant troughs and rollers for long service life." },
    ],
    fabrics: ["Woven cotton", "PC blends", "Workwear"],
    process: "Continuous dyeing",
    schematic: { kind: "dyeing", chambers: 3 },
  },
  {
    slug: "selvedge-cutting-knit-fabrics",
    code: "LEW-SCK-07",
    name: "Selvedge Cutting for Knit Fabrics",
    category: "Auxiliary",
    summary:
      "High-speed rotary trimming for knit fabrics — slitting tubular goods and trimming edges for clean open-width processing on the stenter.",
    intro:
      "Circular-knit fabric comes off the machine as a tube. Before open-width finishing it must be slit and its edges trimmed accurately so the stenter chain can grip it cleanly.",
    body: [
      "Lucy's selvedge cutting unit guides the fabric and trims or slits it with rotary blades, keeping the cut straight along the wale line. Clean, consistent edges mean fewer pin marks, less edge curling and less waste on the stenter.",
      "It can run inline ahead of the stenter or as a standalone unit in the knit processing section.",
    ],
    specs: [
      { label: "Cutting Units", value: "High-Speed Rotary Trimmers" },
      { label: "Fabric", value: "Tubular & Open-Width Knits" },
      { label: "Installation", value: "Inline / Standalone" },
      { label: "Edge Guiding", value: "Sensor-Guided" },
    ],
    features: [
      { title: "Straight slitting", text: "Guided cutting along the wale line for true open-width fabric." },
      { title: "Clean edges", text: "Reduces edge curl and improves pinning on the stenter." },
      { title: "Less waste", text: "Accurate trimming minimises selvedge loss." },
    ],
    fabrics: ["Single jersey", "Rib & interlock", "Fleece"],
    process: "Slitting · Edge trimming",
    schematic: { kind: "cutter" },
  },
  {
    slug: "gas-direct-heating-system",
    code: "LEW-GDH-08",
    name: "Gas Direct Heating System",
    category: "Heating",
    summary:
      "Direct-fired gas burner packages for stenters and dryers — fast heat-up, precise modulation and lower energy cost compared with indirect heating.",
    intro:
      "Direct gas firing heats the chamber air with a burner flame inside the circulation duct — no thermic oil boiler, no heat-exchanger losses.",
    body: [
      "Each chamber carries its own modulating burner, controlled by the chamber temperature. Heat-up is fast and the response to set-point changes is immediate, which shortens start-up and changeover times.",
      "With natural gas, PNG or LPG supply, direct heating removes the energy losses of an intermediate thermic fluid loop, reduces maintenance of pumps and piping, and allows chamber-by-chamber temperature profiles.",
    ],
    specs: [
      { label: "Gas Systems", value: "Direct Low-NOx Burners" },
      { label: "Fuel", value: "Natural Gas / PNG / LPG" },
      { label: "Control", value: "Modulating, Per Chamber" },
      { label: "Retrofit", value: "Existing Stenters & Dryers" },
    ],
    features: [
      { title: "Fast response", text: "Burner modulation follows set-point changes within the chamber." },
      { title: "No thermic loop", text: "Removes heat-exchanger and piping losses and maintenance." },
      { title: "Zone profiles", text: "Independent temperature per chamber for precise curing curves." },
      { title: "Retrofit ready", text: "Can be fitted to existing stenter and dryer chambers." },
    ],
    fabrics: ["All stenter & dryer applications"],
    process: "Chamber heating",
    schematic: { kind: "burner", chambers: 4 },
  },
  {
    slug: "tumbler-dryer-terry-towels",
    code: "LEW-TDT-09",
    name: "Tumbler Dryer for Terry Towels",
    category: "Drying",
    summary:
      "Drum tumble drying for terry towels — lifting the pile, building bulk and delivering the soft, absorbent hand buyers expect.",
    intro:
      "A towel is judged by its hand. Tumble drying opens and lifts the terry loops so the towel feels thick, soft and absorbent.",
    body: [
      "Towels are loaded into a rotating perforated drum while heated air passes through the load. The continuous tumbling action separates the loops and prevents the flat, harsh feel of tension drying.",
      "Lucy's tumbler dryer is built for the heavy, high-GSM loads of towel processing, with reversing drum action to avoid tangling and even drying across the batch.",
    ],
    specs: [
      { label: "Tumbler Vol.", value: "Terry Towel Bulking" },
      { label: "Drum", value: "Perforated Stainless Steel" },
      { label: "Action", value: "Reversing Drum Rotation" },
      { label: "Heating Media", value: "Steam / Thermic Oil / Gas" },
    ],
    features: [
      { title: "Pile lift", text: "Tumbling opens terry loops for bulk and softness." },
      { title: "Even drying", text: "Reversing rotation prevents tangling and wet spots." },
      { title: "Heavy loads", text: "Built for high-GSM towel and bath-linen batches." },
    ],
    fabrics: ["Terry towels", "Bath linen", "Bathrobes"],
    process: "Tumble drying · Bulking",
    schematic: { kind: "drum" },
  },
];

export const getMachine = (slug: string) => machines.find((m) => m.slug === slug);

const shortNames: Record<string, string> = {
  "batching-stenter-machine": "Batching Stenter",
  "3-bowl-mangle-float-dryer": "3 Bowl Mangle",
  "relax-dryer-machine": "Relax Dryer",
};

/** The six cards shown on the home page, as in the design. */
export const homeMachineCards = [
  ...machines.slice(0, 5).map((m) => ({
    code: m.code,
    name: shortNames[m.slug] ?? m.name,
    summary: m.summary,
    specs: m.specs.slice(0, 3),
    href: `/machines/${m.slug}`,
  })),
  {
    code: "LEW-AUX-06",
    name: "Auxiliary Units",
    summary:
      "Integrated plant accessories including Selvedge Cutting for Knit Fabrics, Tumbler Dryers for Terry Towels, and Gas Direct Heating Burner packages.",
    specs: [
      { label: "Cutting Units", value: "High-Speed Rotary Trimmers" },
      { label: "Tumbler Vol.", value: "Terry Towel Bulking" },
      { label: "Gas Systems", value: "Direct Low-NOx Burners" },
    ],
    href: "/machines#auxiliary",
  },
];

export const milestones = [
  { year: "1985", title: "Inception & Tooling", text: "Operations commence inside a 650 m² workshop with a lean, skilled workforce of 7 engineers specializing in precision spare assemblies for stenter machinery.", tag: "Surat Foundry Sector" },
  { year: "1992", title: "First Stenter Machine", text: "Design and manufacture of the maiden proprietary Stenter Machine. Successful deployment leads to rapid market adoption and expansion to the 3,000 m² Sachin facility.", tag: "Sachin G.I.D.C. Expansion" },
  { year: "2000s", title: "Product Line Expansion", text: "Introduction of specialized 3 Bowl Mangle units with Float Dryers, Tensionless Relax Dryers, Continuous Drying Ranges, and Gas Direct Heating systems.", tag: "Thermodynamic Range" },
  { year: "Present", title: "500+ Machines Delivered", text: "Operating nationwide and internationally with full ISO 9001:2015 certification, driving energy-optimized stenter and drying systems for leading mills.", tag: "Verified Continuous Fleet" },
];

export const telemetry = [
  { param: "01", label: "Overfeed Control", value: "-10% → +50%", pct: 65, text: "Independent left/right servo overfeed drive synchronisation." },
  { param: "02", label: "Zone Temperature", value: "225°C MAX", pct: 85, text: "PID modulated continuous temperature control per chamber." },
  { param: "03", label: "Blower Speed", value: "2,800 RPM", pct: 75, text: "Inverter controlled nozzle impellers for variable fabric weights." },
  { param: "04", label: "Exhaust Efficiency", value: "94.2 %", pct: 94, text: "Thermodynamic moisture recovery damper automation." },
];

export const components = [
  { code: "COMP-01", title: "Pin Blocks & Clips", text: "Drop-forged high-strength alloy pin clips engineered to endure continuous high-temperature cycles without tensile deformation.", tag: "Heat-Treated Tool Steel" },
  { code: "COMP-02", title: "Scroll Expander Rollers", text: "Dynamically balanced stainless steel uncurlers providing uniform lateral fabric edge opening for sensitive knit goods.", tag: "Dynamic ISO Balanced" },
  { code: "COMP-03", title: "Air Nozzle Boxes", text: "Aerodynamically shaped slot and hole nozzles calibrated to induce symmetrical air cushions for non-contact drying.", tag: "CAD Flow Calibrated" },
  { code: "COMP-04", title: "Tubular Exchangers", text: "Heavy-wall seamless heat-exchanger banks yielding superior thermal transfer coefficient with minimal thermic oil delta-T.", tag: "Hydrostatic Tested" },
];

export const stages = [
  { title: "Specification & Thermal Calculation", text: "Calculation of water evaporation loads, chamber count requirements, and mill energy media integration." },
  { title: "Precision Fabrication & CNC Machining", text: "Heavy structural steel framing, precision CNC track milling, and laser profiling under stringent tolerance bands." },
  { title: "Mechanical & Electrical Assembly", text: "Installation of direct-coupled drives, heavy insulation panels, stainless exhaust lines, and standardized PLCs." },
  { title: "Rigorous Dynamic Run-In & Heat Calibration", text: "Continuous 72-hour drive synchronization, chain tension testing, and burner/heat-exchanger temperature validation." },
  { title: "Factory Acceptance & Logistics", text: "Client site sign-off, precision sectional breakdown, export crating, and direct transport from Sachin G.I.D.C." },
  { title: "Lifetime Spares & On-Site Support", text: "Immediate replacement parts availability and factory engineer dispatch backed by four decades of technical mastery." },
];

export const relaxSpecs = [
  { label: "Working Width", value: "600 — 3800 mm", text: "Accommodates ultra-narrow open knits through extra-wide furnishing textiles." },
  { label: "Fabric Passes", value: "1 / 2 / 3 Passes", text: "Modular conveyor belt routing tailored to mill floor dimensions and fabric bulk requirements." },
  { label: "Maximum Temperature", value: "225°C Calibrated", text: "High-precision thermal setting for synthetic knits and natural cotton blends." },
  { label: "Evaporation Capacity", value: "Up to 230 kg/hr", text: "High-efficiency water evaporation rated per chamber per operational hour." },
  { label: "Operational Speed", value: "0 — 30 m/min", text: "Infinitely variable line speed tuned to tensionless dimensional stabilization." },
  { label: "Chamber Configuration", value: "Up to 6 Chambers", text: "Expandable modular footprint engineered for multi-stage continuous heating cycles." },
  { label: "Heating Mediums", value: "Thermic Fluid • Direct Gas • Steam", text: "Multi-fuel compatibility engineered with industrial heat exchangers or clean direct gas firing burners.", wide: true },
];

export type Application = {
  icon: string;
  title: string;
  tag: string;
  challenge: string;
  route: string[];
  machines: string[];
};

/** Fabric applications — process routes follow standard wet-processing practice for each fabric class. */
export const applications: Application[] = [
  {
    icon: "texture",
    title: "Woven Fabrics",
    tag: "Suiting • Shirting",
    challenge: "Wovens need precise width, straight weft and stable dimensions after desizing, bleaching and dyeing.",
    route: ["Pre-treatment", "Dyeing", "Padding", "Cylinder drying", "Stenter finishing", "Batching"],
    machines: ["stenter-machine", "batching-stenter-machine", "drying-range", "3-bowl-mangle-float-dryer"],
  },
  {
    icon: "layers",
    title: "Knitted Textiles",
    tag: "Open / Circular Knits",
    challenge: "Knits stretch in wet processing and must recover without tension to meet shrinkage specs.",
    route: ["Dyeing", "Slitting", "Relax drying", "Stenter (overfeed)", "Compacting"],
    machines: ["relax-dryer-machine", "selvedge-cutting-knit-fabrics", "stenter-machine"],
  },
  {
    icon: "straighten",
    title: "Denim Ranges",
    tag: "Sizing & Finishing",
    challenge: "Heavy indigo fabric needs skew control and controlled shrinkage before sanforizing.",
    route: ["Singeing", "Padding", "Drying", "Stenter width setting", "Sanforizing"],
    machines: ["stenter-machine", "batching-stenter-machine", "drying-range"],
  },
  {
    icon: "dry",
    title: "Terry Towels",
    tag: "Bulking & Tumbling",
    challenge: "Towels are sold on hand-feel — the pile must be lifted and soft, not flattened.",
    route: ["Bleaching / dyeing", "Hydro-extraction", "Tumble drying", "Stenter (optional)"],
    machines: ["tumbler-dryer-terry-towels", "stenter-machine"],
  },
  {
    icon: "precision_manufacturing",
    title: "Technical Fabrics",
    tag: "Filters • Geotextiles",
    challenge: "Synthetics need exact heat-setting temperature and dwell time for thermal stability.",
    route: ["Padding / coating", "Pre-drying", "Heat-setting", "Curing", "Batching"],
    machines: ["3-bowl-mangle-float-dryer", "stenter-machine", "gas-direct-heating-system"],
  },
  {
    icon: "curtains",
    title: "Home Furnishing",
    tag: "Wide Sheeting • Drapes",
    challenge: "Extra-wide sheeting and drapery demand uniform airflow edge to edge.",
    route: ["Pre-treatment", "Pad-dry dyeing", "Wide-width stenter", "Batching"],
    machines: ["stenter-machine", "3-bowl-mangle-float-dryer", "batching-stenter-machine"],
  },
];

export const processFlow = [
  { step: "01", title: "Pre-treatment", text: "Desizing, scouring and bleaching prepare greige fabric for even dye uptake." },
  { step: "02", title: "Dyeing & Padding", text: "Dye or finish liquor applied in the bath or on a padding mangle for uniform pick-up.", machine: "3-bowl-mangle-float-dryer" },
  { step: "03", title: "Drying", text: "Contact, float or tension-free drying depending on fabric construction.", machine: "drying-range" },
  { step: "04", title: "Heat-setting", text: "Stenter sets width and stabilises synthetics at controlled temperature and dwell.", machine: "stenter-machine" },
  { step: "05", title: "Finishing & Curing", text: "Softeners, resins and functional finishes applied and cured in the chambers.", machine: "stenter-machine" },
  { step: "06", title: "Batching & Dispatch", text: "Controlled-tension roll winding or plaiting for inspection and shipping.", machine: "batching-stenter-machine" },
];

export const heatingMedia = [
  { name: "Thermic Fluid", temp: "Up to 225°C+", pros: "Stable, uniform temperature; proven for high-temperature heat-setting.", note: "Requires thermic fluid heater and circulation loop." },
  { name: "Direct Gas", temp: "Up to 225°C+", pros: "Fastest response and heat-up; no heat-exchanger losses; per-chamber control.", note: "Requires natural gas / PNG / LPG supply." },
  { name: "Steam", temp: "Typically ≤ 180°C", pros: "Simple, widely available in mills; ideal for drying duties.", note: "Temperature limits heat-setting of synthetics." },
];

export const faqs = [
  { q: "Which machine do I need for knitted fabric shrinkage?", a: "Tension-free drying on a Relax Dryer is the most effective step for reducing residual shrinkage in knits, usually followed by a stenter with overfeed for width setting." },
  { q: "Can you build to our working width?", a: "Yes. Stenters and dryers are configured to your fabric width, with working widths up to 3,600 mm for stenters and 600–3,800 mm for relax dryers." },
  { q: "Which heating medium should we choose?", a: "It depends on your fuel availability and process temperatures. Thermic fluid and direct gas suit high-temperature heat-setting; steam suits drying. Our engineers calculate this with you." },
  { q: "Do you supply spares for existing machines?", a: "Lucy began in 1985 as a stenter spares manufacturer and still supplies pin clips, chains, rollers, nozzles and other wear parts." },
];
