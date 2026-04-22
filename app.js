const opportunities = [
  { account: "Renewal [2026] - GHA Technologies-Velocity Land", owner: "Aditya", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -17760, seats: -37, totalCarr: 89760 },
  { account: "Renewal [2026] - Odyssey Investment Partners-ChatGPT Enterprise", owner: "Aditya", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 24000 },
  { account: "Renewal [2026] - DFJ Growth Management LLC-ChatGPT Enterprise", owner: "Aditya", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 12000 },
  { account: "Renewal [2026] - Liontrust Asset Management-ChatGPT Enterprise", owner: "Aditya", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 2400, seats: 5, totalCarr: 24000 },
  { account: "Renewal [2026] - BioWound Solutions-ChatGPT Enterprise", owner: "Aditya", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 7200, seats: 15, totalCarr: 12000 },
  { account: "Renewal [2026] - Kirton McConkie-ChatGPT Enterprise", owner: "Aditya", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 24000, seats: 50, totalCarr: 88800 },
  { account: "Renewal [2026] - Pacvue - ChatGPT Enterprise", owner: "Ashana", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -178440, seats: -529, totalCarr: 226440 },
  { account: "Renewal [2026] - Lyles Services Co.-", owner: "Ashana", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -13920, seats: -29, totalCarr: 61920 },
  { account: "Renewal [2026] - Bernhard Capital Partners-ChatGPT Ent", owner: "Ashana", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -12000, seats: -25, totalCarr: 24000 },
  { account: "Renewal [2026] - interos.ai-", owner: "Ashana", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -11520, seats: -24, totalCarr: 40320 },
  { account: "Renewal [2026] - National Rural Utilities Cooperative Finance Corporation-ChatGPT Enterprise", owner: "Ashana", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 2400, seats: 5, totalCarr: 22080 },
  { account: "Renewal [2026] - Ilex Capital-", owner: "Ashana", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 2400, seats: 5, totalCarr: 12000 },
  { account: "Renewal [2026] - Javits-ChatGPT Enterprise", owner: "Ashana", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 3840, seats: 8, totalCarr: 15360 },
  { account: "Renewal [2026] - IDEAYA Biosciences - Renewal", owner: "Ashana", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 38400, seats: 80, totalCarr: 105600 },
  { account: "Renewal [2026] - Exostar-ChatGPT Enterprise", owner: "Chantal", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -50880, seats: -106, totalCarr: 36000 },
  { account: "Renewal [2026] - GiveDirectly-", owner: "Chantal", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -38400, seats: 12, totalCarr: 21360 },
  { account: "Renewal [2026] - BDT & MSD - ChatGPT Enterprise", owner: "Chantal", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -29400, seats: -50, totalCarr: 240000 },
  { account: "Renewal [2026] - Piping Rock Health Products, Inc", owner: "Chantal", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -6720, seats: -14, totalCarr: 168000 },
  { account: "Renewal [2026] - Vane Brothers (ChatGPT 25)-", owner: "Chantal", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 12000 },
  { account: "Renewal [2026] - Great Elm Group, Inc.-ChatGPT Enterprise", owner: "Chantal", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 24000 },
  { account: "Renewal [2026] - First Round - ChatGPT Enterprise", owner: "Chantal", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 480, seats: 1, totalCarr: 27360 },
  { account: "Renewal [2026] - Allen & Company-", owner: "Chantal", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 3840, seats: 8, totalCarr: 44160 },
  { account: "Renewal [2026] - CareDx Inc. // ChatGPT Enterprise", owner: "Chantal", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 3840, seats: 8, totalCarr: 46080 },
  { account: "Renewal [2026] - CU Direct Corporation-ChatGPT Enterprise", owner: "Chantal", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 10560, seats: 22, totalCarr: 22560 },
  { account: "Renewal [2026] - First Eagle Investments - ChatGPT Enterprise", owner: "Chantal", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 19200, seats: 40, totalCarr: 120000 },
  { account: "Renewal [2026] - Playground Tech-", owner: "Ebel", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-lost", icarr: -38880, seats: -81, totalCarr: 38880 },
  { account: "Renewal [2026] - The Extreme Light Infrastructure ERIC-", owner: "Ebel", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -37320, seats: 46, totalCarr: 66720 },
  { account: "Renewal [2026] - Columbia Road-", owner: "Ebel", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-lost", icarr: -33600, seats: -70, totalCarr: 33600 },
  { account: "Renewal [2026] - Alto Solutions Inc-ChatGPT Enterprise", owner: "Ebel", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -26760, seats: -55, totalCarr: 40800 },
  { account: "Renewal [2026] - Culture AI-", owner: "Ebel", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-lost", icarr: -19200, seats: -40, totalCarr: 19200 },
  { account: "Renewal [2026] - EUC - Chat", owner: "Ebel", region: "APAC", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -13740, seats: -57, totalCarr: 45340 },
  { account: "Renewal [2026] - Best in Parking AG-", owner: "Ebel", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -4200, seats: 0, totalCarr: 24000 },
  { account: "Renewal [2026] - Stonepeak Partners", owner: "Ebel", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -720, seats: 11, totalCarr: 114000 },
  { account: "Renewal [2026] - Leave a Nest - ChatGPT 150 seats", owner: "Ebel", region: "APAC", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 72000 },
  { account: "Renewal [2026] - Brighter Super-ChatGPT Enterprise", owner: "Ebel", region: "APAC", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 4320, seats: 9, totalCarr: 14880 },
  { account: "Renewal [2026] - Polar Capital Partners Ltd - ChatGPT Enterprise", owner: "Ebel", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 8160, seats: 17, totalCarr: 72000 },
  { account: "Renewal [2026] - Admiral Pioneer - ChatGPT Enterprise", owner: "Ebel", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 12000, seats: 25, totalCarr: 72000 },
  { account: "Renewal [2026] - Lucid Group Communications - ChatGPT Enterprise (CBP)", owner: "Ebel", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 23760, seats: -60, totalCarr: 172800 },
  { account: "Renewal [2026] - Herse Information Co. Ltd - ChatGPT Enterprise", owner: "Ebel", region: "APAC", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 51840, seats: 108, totalCarr: 172800 },
  { account: "Renewal [2026] - AlloSource-ChatGPT Enterprise", owner: "Lakshay", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -30480, seats: 2, totalCarr: 46080 },
  { account: "Renewal [2026] - CIRA (Canadian Internet Registration Authority)-", owner: "Lakshay", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -17160, seats: 59, totalCarr: 36360 },
  { account: "Renewal [2026] - Merchant Capital LLC-ChatGPT Enterprise", owner: "Lakshay", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -12000, seats: -25, totalCarr: 24000 },
  { account: "Renewal [2026] - Liberty Tax Services - ChatGPT Enterprise", owner: "Lakshay", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -4320, seats: -9, totalCarr: 41760 },
  { account: "Renewal [2026] - LRN- ChatGPT Enterprise", owner: "Lakshay", region: "Unspecified", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 96000 },
  { account: "Renewal [2026] - Prospect Administration - ChatGPT Enterprise - Land 100", owner: "Lakshay", region: "Unspecified", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 1068, seats: 5, totalCarr: 51948 },
  { account: "Renewal [2026] - Redwood Trust Inc.-ChatGPT Enterprise", owner: "Lakshay", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 15660, seats: 29, totalCarr: 132840 },
  { account: "Renewal [2026] - Emerson Collective, LLC - ChatGPT Enterprise", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -50160, seats: 0, totalCarr: 75240 },
  { account: "Renewal [2026] - ISI Enterprises - ChatGPT Enterprise", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -36960, seats: -77, totalCarr: 72960 },
  { account: "Renewal [2026] - John D. and Catherine T. MacArthur Foundation-ChatGPT Enterprise", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -34920, seats: 23, totalCarr: 56520 },
  { account: "Renewal [2026] - Ampsight, Inc. (ChatGPT 40)-", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-lost", icarr: -24480, seats: -51, totalCarr: 24480 },
  { account: "Renewal [2026] - iSeatz - Renewal", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -14400, seats: -30, totalCarr: 57600 },
  { account: "Renewal [2026] - FCP- ChatGPT Enterprise", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-lost", icarr: -12480, seats: -26, totalCarr: 12480 },
  { account: "Renewal [2026] - GS1 US-ChatGPT Enterprise", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-lost", icarr: -12000, seats: -25, totalCarr: 12000 },
  { account: "Renewal [2026] - Purewest Resources Inc-ChatGPT Enterprise", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -9600, seats: -20, totalCarr: 91200 },
  { account: "Renewal [2026] - Income Research + Management-ChatGPT Enterprise", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 39840 },
  { account: "Renewal [2026] - VeriSign - ChatGPT Enterprise", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 72000 },
  { account: "Renewal [2026] - CLV Group - ChatGPT Enterprise", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 480, seats: 1, totalCarr: 19200 },
  { account: "Renewal [2026] - OddBytes Inc. - ChatGPT Enterprise", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 960, seats: 2, totalCarr: 66240 },
  { account: "Renewal [2026] - Heaven Hill Brands- chatgpt 400 CBP", owner: "Lori", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 52140, seats: 25, totalCarr: 333120 },
  { account: "Renewal [2026] - Atomico- ChatGPT Enterprise", owner: "Nicolas", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -16800, seats: -35, totalCarr: 28800 },
  { account: "Renewal [2026] - Davidson Technology Consulting-NB-Cbiz-100", owner: "Nicolas", region: "APAC", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 48000 },
  { account: "Renewal [2026] - Pensjonskassen for helseforetakene i hovedstadsomradet (PKH)-", owner: "Nicolas", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 10296 },
  { account: "Renewal [2026] - Mutuelle Previfrance-", owner: "Nicolas", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 9900 },
  { account: "Renewal [2026] - Shenkman Capital Management Inc.-ChatGPT Enterprise", owner: "Nicolas", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 4320, seats: 12, totalCarr: 51840 },
  { account: "Renewal [2026] - Quantum Rise, Inc.-ChatGPT Enterprise", owner: "Nicolas", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 5280, seats: 11, totalCarr: 17280 },
  { account: "Renewal [2026] - Cydcor, LLC-ChatGPT Enterprise", owner: "Nicolas", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 5760, seats: 12, totalCarr: 73440 },
  { account: "Renewal [2026] - Jones & Wagener - ChatGPT Enterprise", owner: "Nicolas", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 7200, seats: 15, totalCarr: 72000 },
  { account: "Renewal [2026] - Prophix - ChatGPT Enterprise", owner: "Tyler", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -104160, seats: -217, totalCarr: 152160 },
  { account: "Renewal [2026] - HCI Equity Partners-", owner: "Tyler", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-lost", icarr: -12000, seats: -25, totalCarr: 12000 },
  { account: "Renewal [2026] - Waterfall Asset Management - ChatGPT Enterprise", owner: "Tyler", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 24000 },
  { account: "Renewal [2026] - Day One Biopharmaceuticals-", owner: "Tyler", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 5280, seats: 11, totalCarr: 78240 },
  { account: "Renewal [2026] - AAA Life - ChatGPT Enterprise", owner: "Tyler", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 24000, seats: 50, totalCarr: 72000 },
  { account: "Renewal [2026] - Monobank - ChatGPT Enterprise", owner: "Victor", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -62400, seats: -130, totalCarr: 144000 },
  { account: "Renewal [2026] - AppOmni Inc - ChatGPT Enterprise", owner: "Victor", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -36000, seats: -75, totalCarr: 84000 },
  { account: "Renewal [2026] - InterRent-New Business", owner: "Victor", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: -1920, seats: -4, totalCarr: 53280 },
  { account: "Renewal [2026] - ECE Real Estate Partners GmbH-", owner: "Victor", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 24000 },
  { account: "Renewal [2026] - echion Corporate Communication AG-", owner: "Victor", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 0, seats: 0, totalCarr: 12000 },
  { account: "Renewal [2026] - Apax Partners - ChatGPT Enterprise", owner: "Victor", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 2400, seats: 5, totalCarr: 155520 },
  { account: "Renewal [2026] - TBK Automatisierung und Messtechnik GmbH-", owner: "Victor", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 3780, seats: 0, totalCarr: 17820 },
  { account: "Renewal [2026] - Integra Capital - Renewal", owner: "Victor", region: "LATAM", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 3840, seats: 8, totalCarr: 84000 },
  { account: "Renewal [2026] - GIZEH Raucherbedarf GmbH", owner: "Victor", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 4800, seats: 10, totalCarr: 62880 },
  { account: "Renewal [2026] - Lysa AB-", owner: "Victor", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 8160, seats: 17, totalCarr: 34560 },
  { account: "Renewal [2026] - Ward Law Group, PL-", owner: "Victor", region: "AMER", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 13500, seats: 55, totalCarr: 76800 },
  { account: "Renewal [2026] - Zelestra-", owner: "Victor", region: "EMEA", segment: "Renewal", quarter: "Q2 2026", month: "Apr", status: "close-won", icarr: 75000, seats: 200, totalCarr: 147000 }
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const renewalReps = ["Ebel", "Tyler", "Victor", "Nicolas", "Lakshay", "Ashana", "Lori", "Chantal", "Aditya"];
const qtdQuarter = "Q2 2026";
const targetData = {
  Aditya: { seatTarget: 232, icarrTarget: 33000, portfolioTarget: 2800000, fullName: "Aditya Gera" },
  Ashana: { seatTarget: 282, icarrTarget: 39000, portfolioTarget: 3300000, fullName: "Ashana Raybe" },
  Chantal: { seatTarget: 339, icarrTarget: 47000, portfolioTarget: 4000000, fullName: "Chantal Przybysz" },
  Ebel: { seatTarget: 328, icarrTarget: 47000, portfolioTarget: 4000000, fullName: "Ebel Floridia" },
  Lakshay: { seatTarget: 289, icarrTarget: 42000, portfolioTarget: 3500000, fullName: "Lakshay Parashar" },
  Lori: { seatTarget: 286, icarrTarget: 41000, portfolioTarget: 3500000, fullName: "Lori Greening" },
  Nicolas: { seatTarget: 325, icarrTarget: 48000, portfolioTarget: 4000000, fullName: "Nicolas Fischer" },
  Tyler: { seatTarget: 248, icarrTarget: 34000, portfolioTarget: 2900000, fullName: "Tyler Arnold" },
  Victor: { seatTarget: 378, icarrTarget: 50000, portfolioTarget: 4200000, fullName: "Victor Pajares Liberal" }
};
const outcomeColors = {
  "close-won": "#0f766e",
  "close-lost": "#c2410c"
};
const seatTrendData = [
  {
    title: "Right-sizing to active usage",
    count: 16,
    seats: 1301,
    copy: "The most common contraction pattern is reducing to active users or current MAU, often after over-buying in the prior term."
  },
  {
    title: "Competitive or multi-tool shift",
    count: 8,
    seats: 1084,
    copy: "Several accounts reduced seats because teams moved workflows to Claude, Copilot, or other tools better aligned to technical or office workflows."
  },
  {
    title: "Budget and pricing pressure",
    count: 4,
    seats: 147,
    copy: "A smaller but recurring trend is price sensitivity, discount pressure, and budget constraints leading to smaller renewals or churn."
  },
  {
    title: "Org cleanup and departed users",
    count: 2,
    seats: 33,
    copy: "A narrower theme is cleanup from departed employees, duplicate seats, and identity-management issues."
  }
];
const closeLostReasonData = [
  { reason: "Did not recognize full value", count: 3 },
  { reason: "Pricing too high", count: 1 },
  { reason: "Self Service fits needs", count: 1 },
  { reason: "Timing", count: 1 },
  { reason: "Competitor", count: 1 }
];

const filters = {
  quarter: qtdQuarter,
  owner: "All",
  region: "All",
  status: "All"
};

const filterElements = {
  quarter: document.getElementById("quarterFilter"),
  owner: document.getElementById("ownerFilter"),
  region: document.getElementById("regionFilter"),
  status: document.getElementById("statusFilter")
};

const unique = (key) => [...new Set(opportunities.map((item) => item[key]))];
const getVisibleMonths = (data) => {
  const presentMonths = new Set(data.map((item) => item.month));
  return months.filter((month) => presentMonths.has(month));
};

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function compactCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value);
}

function integer(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function populateSelect(select, values) {
  select.innerHTML = ["All", ...values]
    .map((value) => `<option value="${value}">${value}</option>`)
    .join("");
}

function applyFilters(data) {
  return data.filter((item) => {
    return (
      (filters.quarter === "All" || item.quarter === filters.quarter) &&
      (filters.owner === "All" || item.owner === filters.owner) &&
      (filters.region === "All" || item.region === filters.region) &&
      (filters.status === "All" || item.status === filters.status)
    );
  });
}

function buildKpis(data) {
  const wonDeals = data.filter((item) => item.status === "close-won");
  const lostDeals = data.filter((item) => item.status === "close-lost");
  const addedIcarr = data.filter((item) => item.icarr > 0).reduce((sum, item) => sum + item.icarr, 0);
  const reducedIcarr = Math.abs(data.filter((item) => item.icarr < 0).reduce((sum, item) => sum + item.icarr, 0));
  const netIcarr = data.reduce((sum, item) => sum + item.icarr, 0);
  const addedSeats = data.filter((item) => item.seats > 0).reduce((sum, item) => sum + item.seats, 0);
  const reducedSeats = Math.abs(data.filter((item) => item.seats < 0).reduce((sum, item) => sum + item.seats, 0));
  const totalClosed = wonDeals.length + lostDeals.length;
  const winRate = totalClosed ? `${Math.round((wonDeals.length / totalClosed) * 100)}%` : "0%";

  return [
    { label: "iCARR Added", value: compactCurrency(addedIcarr), subtext: `${currency(addedIcarr)} positive incremental CARR`, negative: false },
    { label: "iCARR Reduction", value: compactCurrency(reducedIcarr), subtext: `${currency(reducedIcarr)} contraction or close-lost CARR`, negative: true },
    { label: "Net iCARR", value: compactCurrency(netIcarr), subtext: `${currency(netIcarr)} across all QTD renewals`, negative: netIcarr < 0 },
    { label: "iSeats Added", value: integer(addedSeats), subtext: `${integer(addedSeats)} positive incremental seats`, negative: false },
    { label: "Seat Reduction", value: integer(reducedSeats), subtext: `${integer(reducedSeats)} seats reduced or lost`, negative: true },
    { label: "Close-Won", value: integer(wonDeals.length), subtext: `${integer(totalClosed)} closed renewals in scope`, negative: false },
    { label: "Win Rate", value: winRate, subtext: `${integer(lostDeals.length)} close-lost renewals`, negative: false }
  ];
}

function renderKpis(data) {
  const kpiGrid = document.getElementById("kpiGrid");
  if (!kpiGrid) return;
  kpiGrid.innerHTML = buildKpis(data)
    .map(
      (kpi) => `
        <article class="panel kpi-card${kpi.negative ? " is-negative" : ""}">
          <p class="eyebrow">${kpi.label}</p>
          <div class="kpi-value">${kpi.value}</div>
          <p class="kpi-subtext">${kpi.subtext}</p>
        </article>
      `
    )
    .join("");
}

function renderRepLinks() {
  const repLinks = document.getElementById("repLinks");
  if (!repLinks) return;
  repLinks.innerHTML = renewalReps
    .map(
      (rep) => `
        <button type="button" class="rep-link${filters.owner === rep ? " is-active" : ""}" data-owner="${rep}">
          ${rep}
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".rep-link").forEach((button) => {
    button.addEventListener("click", () => {
      filters.owner = button.dataset.owner;
      filterElements.owner.value = button.dataset.owner;
      render();
      const opportunitySection = document.getElementById("opportunitySection");
      if (opportunitySection) {
        opportunitySection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function formatGap(actual, target, formatter) {
  const gap = target - actual;
  if (gap <= 0) return `Ahead by ${formatter(Math.abs(gap))}`;
  return `${formatter(gap)} to target`;
}

function renderTargetTracker(data) {
  const targetGrid = document.getElementById("targetGrid");
  if (!targetGrid) return;
  const grouped = renewalReps.map((owner) => {
    const ownerRows = data.filter((item) => item.owner === owner);
    return {
      owner,
      seatActual: ownerRows.reduce((sum, item) => sum + item.seats, 0),
      icarrActual: ownerRows.reduce((sum, item) => sum + item.icarr, 0),
      portfolioActual: ownerRows.reduce((sum, item) => sum + item.totalCarr, 0),
      ...targetData[owner]
    };
  });

  targetGrid.innerHTML = grouped
    .map((item) => {
      const seatProgress = Math.max(0, Math.min(100, (item.seatActual / item.seatTarget) * 100));
      const icarrProgress = Math.max(0, Math.min(100, (item.icarrActual / item.icarrTarget) * 100));
      const portfolioProgress = Math.max(0, Math.min(100, (item.portfolioActual / item.portfolioTarget) * 100));
      return `
        <div class="target-card">
          <div class="target-card-header">
            <div class="target-card-name">${item.fullName}</div>
            <div class="target-card-summary">${integer(item.seatActual)} seats · ${currency(item.icarrActual)} iCARR · ${compactCurrency(item.portfolioActual)} portfolio</div>
          </div>
          <div class="target-metrics">
            <div class="target-row">
              <div class="target-row-top">
                <span class="target-label">Seats</span>
                <span class="target-value">${integer(item.seatActual)} / ${integer(item.seatTarget)}</span>
              </div>
              <div class="target-bar"><div class="target-bar-fill" style="width:${seatProgress}%"></div></div>
              <div class="target-gap">${formatGap(item.seatActual, item.seatTarget, integer)}</div>
            </div>
            <div class="target-row">
              <div class="target-row-top">
                <span class="target-label">iCARR</span>
                <span class="target-value">${currency(item.icarrActual)} / ${currency(item.icarrTarget)}</span>
              </div>
              <div class="target-bar"><div class="target-bar-fill" style="width:${icarrProgress}%"></div></div>
              <div class="target-gap">${formatGap(item.icarrActual, item.icarrTarget, currency)}</div>
            </div>
            <div class="target-row">
              <div class="target-row-top">
                <span class="target-label">Portfolio</span>
                <span class="target-value">${compactCurrency(item.portfolioActual)} / ${compactCurrency(item.portfolioTarget)}</span>
              </div>
              <div class="target-bar"><div class="target-bar-fill" style="width:${portfolioProgress}%"></div></div>
              <div class="target-gap">${formatGap(item.portfolioActual, item.portfolioTarget, compactCurrency)}</div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderTrendInsights() {
  if (!document.getElementById("seatTrendList") || !document.getElementById("closeLostReasonList")) return;
  renderSeatTrendChart();
  renderCloseLostReasonChart();

  document.getElementById("seatTrendList").innerHTML = seatTrendData
    .map(
      (item) => `
        <div class="trend-card">
          <div class="trend-card-title">${item.title}</div>
          <div class="trend-card-meta">${integer(item.count)} renewals · ${integer(item.seats)} seats reduced</div>
          <div class="trend-card-copy">${item.copy}</div>
        </div>
      `
    )
    .join("");

  const maxCount = Math.max(...closeLostReasonData.map((item) => item.count));
  document.getElementById("closeLostReasonList").innerHTML = closeLostReasonData
    .map(
      (item) => `
        <div class="reason-row">
          <div class="reason-title">${item.reason}</div>
          <div class="reason-meta">${integer(item.count)} close-lost renewal${item.count === 1 ? "" : "s"}</div>
          <div class="reason-bar">
            <div class="reason-bar-fill" style="width:${(item.count / maxCount) * 100}%"></div>
          </div>
        </div>
      `
    )
    .join("");
}

function renderSeatTrendChart() {
  const svg = document.getElementById("seatTrendChart");
  if (!svg) return;
  const width = 760;
  const height = 320;
  const margin = { top: 24, right: 28, bottom: 28, left: 236 };
  const chartWidth = width - margin.left - margin.right;
  const barHeight = 34;
  const gap = 18;
  const maxSeats = Math.max(...seatTrendData.map((item) => item.seats), 1);

  svg.innerHTML = `
    <defs>
      <linearGradient id="seatTrendGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#b83280" />
        <stop offset="100%" stop-color="#7c3aed" />
      </linearGradient>
    </defs>
    ${seatTrendData
      .map((item, index) => {
        const y = margin.top + index * (barHeight + gap);
        const valueWidth = (item.seats / maxSeats) * chartWidth;
        return `
          <text x="${margin.left - 16}" y="${y + 20}" text-anchor="end" font-size="12" font-weight="600" fill="#24162d">${item.title}</text>
          <rect x="${margin.left}" y="${y}" width="${chartWidth}" height="${barHeight}" rx="14" fill="rgba(124, 58, 237, 0.08)" />
          <rect x="${margin.left}" y="${y}" width="${valueWidth}" height="${barHeight}" rx="14" fill="url(#seatTrendGradient)" />
          <text x="${Math.min(margin.left + valueWidth + 10, width - margin.right)}" y="${y + 21}" font-size="12" fill="#6f5f78">${integer(item.seats)} seats</text>
        `;
      })
      .join("")}
  `;
}

function renderCloseLostReasonChart() {
  const svg = document.getElementById("closeLostReasonChart");
  if (!svg) return;
  const width = 760;
  const height = 320;
  const margin = { top: 24, right: 28, bottom: 28, left: 220 };
  const chartWidth = width - margin.left - margin.right;
  const barHeight = 34;
  const gap = 18;
  const maxCount = Math.max(...closeLostReasonData.map((item) => item.count), 1);

  svg.innerHTML = `
    ${closeLostReasonData
      .map((item, index) => {
        const y = margin.top + index * (barHeight + gap);
        const valueWidth = (item.count / maxCount) * chartWidth;
        return `
          <text x="${margin.left - 16}" y="${y + 20}" text-anchor="end" font-size="12" font-weight="600" fill="#24162d">${item.reason}</text>
          <rect x="${margin.left}" y="${y}" width="${chartWidth}" height="${barHeight}" rx="14" fill="rgba(184, 50, 128, 0.08)" />
          <rect x="${margin.left}" y="${y}" width="${valueWidth}" height="${barHeight}" rx="14" fill="#b83280" />
          <text x="${Math.min(margin.left + valueWidth + 10, width - margin.right)}" y="${y + 21}" font-size="12" fill="#6f5f78">${integer(item.count)}</text>
        `;
      })
      .join("")}
  `;
}

function renderHighlights(data) {
  const list = document.getElementById("weeklyHighlights");
  if (!list) return;
  const wonDeal = data
    .filter((item) => item.status === "close-won")
    .sort((a, b) => b.icarr - a.icarr)[0];
  const seatLeader = data.slice().sort((a, b) => b.seats - a.seats)[0];
  const biggestReduction = data.slice().sort((a, b) => a.icarr - b.icarr)[0];

  list.innerHTML = [
    wonDeal ? `${wonDeal.owner} has the strongest positive iCARR renewal at ${currency(wonDeal.icarr)} on ${wonDeal.account}.` : "No close-won renewals in scope.",
    seatLeader ? `${seatLeader.owner} leads seat expansion with ${integer(seatLeader.seats)} seats on ${seatLeader.account}.` : "No seat movement in scope.",
    biggestReduction ? `${biggestReduction.owner} has the largest iCARR reduction at ${currency(Math.abs(biggestReduction.icarr))} on ${biggestReduction.account}.` : "No reductions in scope."
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderTable(data) {
  const table = document.getElementById("opportunityTable");
  if (!table) return;
  const rows = data.slice().sort((a, b) => a.icarr - b.icarr);
  table.innerHTML = rows
    .map(
      (item) => `
        <tr>
          <td>${item.account}</td>
          <td>${item.owner}</td>
          <td>${item.region}</td>
          <td><span class="status-pill ${item.status}">${item.status.replace("-", " ")}</span></td>
          <td>${currency(item.icarr)}</td>
          <td>${integer(item.seats)}</td>
        </tr>
      `
    )
    .join("");
}

function polylinePoints(points) {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

function renderTrendChart(data) {
  const svg = document.getElementById("trendChart");
  if (!svg) return;
  const width = 760;
  const height = 320;
  const margin = { top: 28, right: 26, bottom: 44, left: 58 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const visibleMonths = getVisibleMonths(data);
  const monthly = visibleMonths.map((month) => {
    const monthData = data.filter((item) => item.month === month);
    return {
      month,
      added: monthData.filter((item) => item.icarr > 0).reduce((sum, item) => sum + item.icarr, 0),
      reduced: Math.abs(monthData.filter((item) => item.icarr < 0).reduce((sum, item) => sum + item.icarr, 0))
    };
  });
  const maxValue = Math.max(1, ...monthly.flatMap((item) => [item.added, item.reduced]));
  const xStep = chartWidth / Math.max(monthly.length - 1, 1);
  const y = (value) => margin.top + chartHeight - (value / maxValue) * chartHeight;
  const addPoints = monthly.map((item, index) => ({ x: margin.left + index * xStep, y: y(item.added) }));
  const reducePoints = monthly.map((item, index) => ({ x: margin.left + index * xStep, y: y(item.reduced) }));
  const gridValues = [0, 0.25, 0.5, 0.75, 1].map((step) => Math.round(maxValue * step));

  svg.innerHTML = `
    ${gridValues
      .map((value) => {
        const yPos = y(value);
        return `
          <line x1="${margin.left}" y1="${yPos}" x2="${width - margin.right}" y2="${yPos}" stroke="rgba(17,35,29,0.1)" />
          <text x="${margin.left - 10}" y="${yPos + 4}" text-anchor="end" font-size="11" fill="#61716a">${compactCurrency(value)}</text>
        `;
      })
      .join("")}
    <polyline fill="none" stroke="#0f766e" stroke-width="3.5" points="${polylinePoints(addPoints)}" />
    <polyline fill="none" stroke="#c2410c" stroke-width="3.5" stroke-dasharray="6 6" points="${polylinePoints(reducePoints)}" />
    ${addPoints.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="4.5" fill="#0f766e" stroke="#fff" stroke-width="2" />`).join("")}
    ${reducePoints.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="4.5" fill="#c2410c" stroke="#fff" stroke-width="2" />`).join("")}
    ${monthly.map((item, index) => `<text x="${margin.left + index * xStep}" y="${height - 18}" text-anchor="middle" font-size="12" fill="#61716a">${item.month}</text>`).join("")}
    <g transform="translate(${width - 188}, 18)">
      <rect x="0" y="0" width="12" height="12" rx="3" fill="#0f766e" />
      <text x="18" y="10" font-size="12" fill="#11231d">Positive iCARR</text>
      <rect x="110" y="0" width="12" height="12" rx="3" fill="#c2410c" />
      <text x="128" y="10" font-size="12" fill="#11231d">Reduction</text>
    </g>
  `;
}

function renderOwnerChart(data) {
  const svg = document.getElementById("ownerChart");
  if (!svg) return;
  const width = 760;
  const height = 420;
  const margin = { top: 34, right: 34, bottom: 30, left: 144 };
  const chartWidth = width - margin.left - margin.right;
  const barHeight = 28;
  const gap = 20;
  const centerX = margin.left + chartWidth / 2;
  const grouped = renewalReps
    .map((owner) => {
      const ownerRows = data.filter((item) => item.owner === owner);
      const netIcarr = ownerRows.reduce((sum, item) => sum + item.icarr, 0);
      const netSeats = ownerRows.reduce((sum, item) => sum + item.seats, 0);
      const losses = ownerRows.filter((item) => item.status === "close-lost").length;
      return { owner, netIcarr, netSeats, losses };
    })
    .sort((a, b) => b.netIcarr - a.netIcarr);
  const maxAbsValue = Math.max(1, ...grouped.map((item) => Math.abs(item.netIcarr)));

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = `
    <defs>
      <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#0f766e" />
        <stop offset="100%" stop-color="#1d4ed8" />
      </linearGradient>
    </defs>
    <text x="${centerX - 10}" y="18" text-anchor="end" font-size="11" fill="#61716a">Negative net iCARR</text>
    <text x="${centerX + 10}" y="18" text-anchor="start" font-size="11" fill="#61716a">Positive net iCARR</text>
    ${grouped
      .map((item, index) => {
        const y = margin.top + index * (barHeight + gap);
        const widthValue = (Math.abs(item.netIcarr) / maxAbsValue) * (chartWidth / 2 - 12);
        const isNegative = item.netIcarr < 0;
        const barX = isNegative ? centerX - widthValue : centerX;
        const labelColor = widthValue > 72 ? "#fff" : "#11231d";
        const textX = isNegative ? Math.max(barX + 10, margin.left + 12) : Math.min(barX + widthValue - 10, width - margin.right - 12);
        const textAnchor = isNegative ? "start" : "end";
        const seatsPrefix = item.netSeats > 0 ? "+" : "";
        return `
          <text x="${margin.left - 16}" y="${y + 14}" text-anchor="end" font-size="12" font-weight="600" fill="#11231d">${item.owner}</text>
          <text x="${margin.left - 16}" y="${y + 30}" text-anchor="end" font-size="11" fill="#61716a">${seatsPrefix}${integer(item.netSeats)} seats · ${item.losses} lost</text>
          <rect x="${margin.left}" y="${y}" width="${chartWidth}" height="${barHeight}" rx="12" fill="rgba(17,35,29,0.05)" />
          <line x1="${centerX}" y1="${y - 8}" x2="${centerX}" y2="${y + barHeight + 8}" stroke="rgba(17,35,29,0.16)" stroke-width="2" />
          <rect x="${barX}" y="${y}" width="${widthValue}" height="${barHeight}" rx="12" fill="${isNegative ? "#c2410c" : "url(#barGradient)"}" />
          <text x="${textX}" y="${y + 19}" text-anchor="${textAnchor}" font-size="12" fill="${labelColor}">${item.netIcarr < 0 ? "-" : ""}${compactCurrency(Math.abs(item.netIcarr))}</text>
        `;
      })
      .join("")}
  `;
}

function polarToCartesian(cx, cy, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return { x: cx + radius * Math.cos(angleInRadians), y: cy + radius * Math.sin(angleInRadians) };
}

function describeArc(cx, cy, radius, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

function renderOutcomeChart(data) {
  const outcomeChart = document.getElementById("outcomeChart");
  const outcomeLegend = document.getElementById("outcomeLegend");
  if (!outcomeChart || !outcomeLegend) return;
  const counts = ["close-won", "close-lost"].map((status) => ({
    status,
    count: data.filter((item) => item.status === status).length,
    color: outcomeColors[status]
  }));
  const total = counts.reduce((sum, item) => sum + item.count, 0) || 1;
  let currentAngle = 0;
  const radius = 92;
  const center = 160;

  outcomeChart.innerHTML = `
    ${counts
      .filter((item) => item.count > 0)
      .map((item) => {
        const angle = (item.count / total) * 360;
        const path = describeArc(center, center, radius, currentAngle, currentAngle + angle);
        currentAngle += angle;
        return `<path d="${path}" stroke="${item.color}" stroke-width="30" fill="none" stroke-linecap="round" />`;
      })
      .join("")}
    <circle cx="${center}" cy="${center}" r="58" fill="#fff" />
    <text x="${center}" y="${center - 4}" text-anchor="middle" font-size="32" font-weight="700" fill="#11231d">${data.length}</text>
    <text x="${center}" y="${center + 20}" text-anchor="middle" font-size="12" fill="#61716a">Renewals</text>
  `;

  outcomeLegend.innerHTML = counts
    .map(
      (item) => `
        <div class="legend-row">
          <span class="legend-label">
            <span class="legend-swatch" style="background:${item.color}"></span>
            ${item.status.replace("-", " ")}
          </span>
          <strong>${integer(item.count)}</strong>
        </div>
      `
    )
    .join("");
}

function renderWindowLabel(data) {
  const labelNode = document.getElementById("activeWindowLabel");
  if (!labelNode) return;
  const label = [];
  if (filters.quarter !== "All") label.push(`${filters.quarter} QTD`);
  if (filters.owner !== "All") label.push(filters.owner);
  if (filters.region !== "All") label.push(filters.region);
  if (filters.status !== "All") label.push(filters.status.replace("-", " "));
  labelNode.textContent = label.length ? label.join(" • ") : `QTD (${data.length})`;
}

function render() {
  const filtered = applyFilters(opportunities);
  renderWindowLabel(filtered);
  renderKpis(filtered);
  renderRepLinks();
  renderTargetTracker(filtered);
  renderTrendInsights();
  renderHighlights(filtered);
  renderTrendChart(filtered);
  renderOwnerChart(filtered);
  renderOutcomeChart(filtered);
  renderTable(filtered);
}

populateSelect(filterElements.quarter, unique("quarter"));
populateSelect(filterElements.owner, unique("owner"));
populateSelect(filterElements.region, unique("region"));
populateSelect(filterElements.status, unique("status"));

Object.entries(filterElements).forEach(([key, element]) => {
  element.addEventListener("change", (event) => {
    filters[key] = event.target.value;
    render();
  });
});

document.getElementById("resetFilters").addEventListener("click", () => {
  filters.quarter = qtdQuarter;
  filters.owner = "All";
  filters.region = "All";
  filters.status = "All";
  filterElements.quarter.value = qtdQuarter;
  filterElements.owner.value = "All";
  filterElements.region.value = "All";
  filterElements.status.value = "All";
  render();
});

filterElements.quarter.value = filters.quarter;
filterElements.owner.value = filters.owner;
filterElements.region.value = filters.region;
filterElements.status.value = filters.status;

render();
