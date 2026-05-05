const opportunities = window.RENEWALS_DATA || [];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const renewalReps = ["Ebel", "Tyler", "Victor", "Nicolas", "Lakshay", "Ashana", "Lori", "Chantal", "Aditya"];
const qtdQuarter = "Q2 2026";
const targetData = {
  Aditya: { incSeatTarget: 66, totalSeatTarget: 6661, icarrTarget: 30000, fullName: "Aditya Gera" },
  Ashana: { incSeatTarget: 74, totalSeatTarget: 7494, icarrTarget: 32000, fullName: "Ashana Raybe" },
  Chantal: { incSeatTarget: 93, totalSeatTarget: 9426, icarrTarget: 39000, fullName: "Chantal Przybysz" },
  Ebel: { incSeatTarget: 99, totalSeatTarget: 9991, icarrTarget: 44000, fullName: "Ebel Floridia" },
  Lakshay: { incSeatTarget: 90, totalSeatTarget: 9085, icarrTarget: 39000, fullName: "Lakshay Parashar" },
  Lori: { incSeatTarget: 86, totalSeatTarget: 8683, icarrTarget: 37000, fullName: "Lori Greening" },
  Nicolas: { incSeatTarget: 102, totalSeatTarget: 10308, icarrTarget: 45000, fullName: "Nicolas Fischer" },
  Tyler: { incSeatTarget: 80, totalSeatTarget: 8030, icarrTarget: 32000, fullName: "Tyler Arnold" },
  Victor: { incSeatTarget: 121, totalSeatTarget: 12266, icarrTarget: 48000, fullName: "Victor P Liberal" }
};
const outcomeColors = {
  "close-won": "#0f766e",
  "close-lost": "#c2410c"
};
const trendThemeMeta = [
  {
    key: "right-sizing",
    title: "Right-sizing to active usage",
    copy: "The most common contraction pattern is reducing to active users or current MAU, often after over-buying in the prior term."
  },
  {
    key: "competitive-shift",
    title: "Competitive or multi-tool shift",
    copy: "Several accounts reduced seats because teams moved workflows to Claude, Copilot, or other tools better aligned to technical or office workflows."
  },
  {
    key: "budget-pricing",
    title: "Budget and pricing pressure",
    copy: "A smaller but recurring trend is price sensitivity, discount pressure, and budget constraints leading to smaller renewals or churn."
  },
  {
    key: "org-cleanup",
    title: "Org cleanup and departed users",
    copy: "A narrower theme is cleanup from departed employees, duplicate seats, and identity-management issues."
  }
];

const filters = {
  quarter: qtdQuarter,
  dateMode: "qtd",
  startDate: "",
  endDate: "",
  owner: "All",
  region: "All",
  status: "All"
};

const filterElements = {
  quarter: document.getElementById("quarterFilter"),
  dateMode: document.getElementById("dateModeFilter"),
  startDate: document.getElementById("startDateFilter"),
  endDate: document.getElementById("endDateFilter"),
  owner: document.getElementById("ownerFilter"),
  region: document.getElementById("regionFilter"),
  status: document.getElementById("statusFilter")
};

const unique = (key) => [...new Set(opportunities.map((item) => item[key]))];
const quarterRows = opportunities.filter((item) => item.quarter === qtdQuarter);
const qtdStartDate = quarterRows.reduce((min, item) => (item.closeDate < min ? item.closeDate : min), quarterRows[0]?.closeDate ?? "");
const qtdEndDate = quarterRows.reduce((max, item) => (item.closeDate > max ? item.closeDate : max), quarterRows[0]?.closeDate ?? "");
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

function formatDateLabel(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${value}T00:00:00`));
}

function populateSelect(select, values) {
  select.innerHTML = ["All", ...values]
    .map((value) => `<option value="${value}">${value}</option>`)
    .join("");
}

function applyFilters(data) {
  return data.filter((item) => {
    const isInDateRange =
      filters.dateMode !== "custom" ||
      ((!filters.startDate || item.closeDate >= filters.startDate) &&
        (!filters.endDate || item.closeDate <= filters.endDate));
    return (
      (filters.quarter === "All" || item.quarter === filters.quarter) &&
      isInDateRange &&
      (filters.owner === "All" || item.owner === filters.owner) &&
      (filters.region === "All" || item.region === filters.region) &&
      (filters.status === "All" || item.status === filters.status)
    );
  });
}

function buildContractionTrendData(data) {
  return trendThemeMeta.map((theme) => {
    const rows = data.filter((item) => item.status === "close-won" && item.seats < 0 && item.trendTags.includes(theme.key));
    return {
      ...theme,
      count: rows.length,
      seats: rows.reduce((sum, item) => sum + Math.abs(item.seats), 0)
    };
  });
}

function buildCloseLostSeatTrendData(data) {
  const counts = data
    .filter((item) => item.status === "close-lost" && item.closeLostReason)
    .reduce((map, item) => {
      const current = map.get(item.closeLostReason) || { reason: item.closeLostReason, count: 0, seats: 0 };
      current.count += 1;
      current.seats += Math.abs(item.seats);
      map.set(item.closeLostReason, current);
      return map;
    }, new Map());

  return [...counts.entries()]
    .map(([, value]) => value)
    .sort((a, b) => b.seats - a.seats || b.count - a.count || a.reason.localeCompare(b.reason));
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
      totalSeatActual: ownerRows
        .filter((item) => item.status === "close-won")
        .reduce((sum, item) => sum + (item.currentSeats || 0), 0),
      seatActual: ownerRows.reduce((sum, item) => sum + item.seats, 0),
      icarrActual: ownerRows.reduce((sum, item) => sum + item.icarr, 0),
      ...targetData[owner]
    };
  });

  targetGrid.innerHTML = grouped
    .map((item) => {
      const totalSeatProgress = Math.max(0, Math.min(100, (item.totalSeatActual / item.totalSeatTarget) * 100));
      const seatProgress = Math.max(0, Math.min(100, (item.seatActual / item.incSeatTarget) * 100));
      const icarrProgress = Math.max(0, Math.min(100, (item.icarrActual / item.icarrTarget) * 100));
      return `
        <div class="target-card">
          <div class="target-card-header">
            <div>
              <div class="target-card-name">${item.fullName}</div>
              <div class="target-card-summary">Actuals: ${integer(item.totalSeatActual)} total seats · ${integer(item.seatActual)} iSeats · ${currency(item.icarrActual)} iCARR</div>
            </div>
            <div class="target-card-meta">Targets from latest rep plan</div>
          </div>
          <div class="target-metrics">
            <div class="target-row">
              <div class="target-row-top">
                <span class="target-label">Total Seat Target</span>
                <span class="target-value">${integer(item.totalSeatActual)} / ${integer(item.totalSeatTarget)}</span>
              </div>
              <div class="target-bar"><div class="target-bar-fill" style="width:${totalSeatProgress}%"></div></div>
              <div class="target-gap">${formatGap(item.totalSeatActual, item.totalSeatTarget, integer)}</div>
            </div>
            <div class="target-row">
              <div class="target-row-top">
                <span class="target-label">Inc Seats Goal</span>
                <span class="target-value">${integer(item.seatActual)} / ${integer(item.incSeatTarget)}</span>
              </div>
              <div class="target-bar"><div class="target-bar-fill" style="width:${seatProgress}%"></div></div>
              <div class="target-gap">${formatGap(item.seatActual, item.incSeatTarget, integer)}</div>
            </div>
            <div class="target-row">
              <div class="target-row-top">
                <span class="target-label">iCARR</span>
                <span class="target-value">${currency(item.icarrActual)} / ${currency(item.icarrTarget)}</span>
              </div>
              <div class="target-bar"><div class="target-bar-fill" style="width:${icarrProgress}%"></div></div>
              <div class="target-gap">${formatGap(item.icarrActual, item.icarrTarget, currency)}</div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderTrendInsights(data) {
  if (!document.getElementById("seatTrendList") || !document.getElementById("closeLostReasonList")) return;
  const seatTrendData = buildContractionTrendData(data);
  const closeLostReasonData = buildCloseLostSeatTrendData(data);
  renderSeatTrendChart(seatTrendData);
  renderCloseLostReasonChart(closeLostReasonData);

  document.getElementById("seatTrendList").innerHTML = seatTrendData
    .map(
      (item) => `
        <div class="trend-card">
          <div class="trend-card-title">${item.title}</div>
          <div class="trend-card-meta">${integer(item.count)} contracted renewals · ${integer(item.seats)} seats reduced</div>
          <div class="trend-card-copy">${item.copy}</div>
        </div>
      `
    )
    .join("");

  if (!closeLostReasonData.length) {
    document.getElementById("closeLostReasonList").innerHTML = `<div class="reason-row"><div class="reason-title">No close-lost seat loss in scope</div><div class="reason-meta">Adjust the date window or filters to inspect churn-driven seat loss.</div></div>`;
    return;
  }

  const maxSeats = Math.max(...closeLostReasonData.map((item) => item.seats));
  document.getElementById("closeLostReasonList").innerHTML = closeLostReasonData
    .map(
      (item) => `
        <div class="reason-row">
          <div class="reason-title">${item.reason}</div>
          <div class="reason-meta">${integer(item.count)} close-lost renewal${item.count === 1 ? "" : "s"} · ${integer(item.seats)} seats lost</div>
          <div class="reason-bar">
            <div class="reason-bar-fill" style="width:${(item.seats / maxSeats) * 100}%"></div>
          </div>
        </div>
      `
    )
    .join("");
}

function renderSeatTrendChart(seatTrendData) {
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

function renderCloseLostReasonChart(closeLostReasonData) {
  const svg = document.getElementById("closeLostReasonChart");
  if (!svg) return;
  const width = 760;
  const height = 320;
  const margin = { top: 24, right: 28, bottom: 28, left: 220 };
  const chartWidth = width - margin.left - margin.right;
  const barHeight = 34;
  const gap = 18;
  if (!closeLostReasonData.length) {
    svg.innerHTML = `<text x="${width / 2}" y="${height / 2}" text-anchor="middle" font-size="14" fill="#6f5f78">No close-lost seat loss in scope for the current filter window.</text>`;
    return;
  }
  const maxSeats = Math.max(...closeLostReasonData.map((item) => item.seats), 1);

  svg.innerHTML = `
    ${closeLostReasonData
      .map((item, index) => {
        const y = margin.top + index * (barHeight + gap);
        const valueWidth = (item.seats / maxSeats) * chartWidth;
        return `
          <text x="${margin.left - 16}" y="${y + 20}" text-anchor="end" font-size="12" font-weight="600" fill="#24162d">${item.reason}</text>
          <rect x="${margin.left}" y="${y}" width="${chartWidth}" height="${barHeight}" rx="14" fill="rgba(184, 50, 128, 0.08)" />
          <rect x="${margin.left}" y="${y}" width="${valueWidth}" height="${barHeight}" rx="14" fill="#b83280" />
          <text x="${Math.min(margin.left + valueWidth + 10, width - margin.right)}" y="${y + 21}" font-size="12" fill="#6f5f78">${integer(item.seats)} seats</text>
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

function renderCloseLostNotes(data) {
  const notesList = document.getElementById("closeLostNotesList");
  if (!notesList) return;
  const rows = data
    .filter((item) => item.status === "close-lost")
    .sort((a, b) => a.closeDate.localeCompare(b.closeDate));

  if (!rows.length) {
    notesList.innerHTML = `<div class="notes-empty">No close-lost renewal notes match the current filter window.</div>`;
    return;
  }

  notesList.innerHTML = rows
    .map(
      (item) => `
        <article class="note-card">
          <div class="note-card-header">
            <div>
              <div class="note-card-title">${item.account}</div>
              <div class="note-card-meta">${item.owner} · ${item.region} · ${formatDateLabel(item.closeDate)}</div>
            </div>
            <div class="note-card-stats">
              <div>${currency(item.icarr)}</div>
              <div>${integer(item.seats)} seats</div>
            </div>
          </div>
          <div class="note-reason">${item.closeLostReason || "No reason provided"}</div>
          <div class="note-copy">${item.closeLostNote || "No close-lost note was provided in the export."}</div>
        </article>
      `
    )
    .join("");
}

function renderCloseLostSnapshot(data) {
  const snapshot = document.getElementById("closeLostSnapshot");
  if (!snapshot) return;
  const lostRows = data.filter((item) => item.status === "close-lost");
  const totalRevenueLost = Math.abs(lostRows.reduce((sum, item) => sum + item.icarr, 0));
  const totalSeatsLost = Math.abs(lostRows.reduce((sum, item) => sum + item.seats, 0));
  const averageRevenueLost = lostRows.length ? Math.round(totalRevenueLost / lostRows.length) : 0;

  snapshot.innerHTML = [
    {
      label: "Revenue Lost",
      value: compactCurrency(totalRevenueLost),
      subtext: `${currency(totalRevenueLost)} across close-lost renewals`
    },
    {
      label: "Seats Lost",
      value: integer(totalSeatsLost),
      subtext: `${integer(totalSeatsLost)} seats removed from lost deals`
    },
    {
      label: "Lost Renewals",
      value: integer(lostRows.length),
      subtext: lostRows.length ? `${currency(averageRevenueLost)} average revenue lost per deal` : "No close-lost renewals in scope"
    }
  ]
    .map(
      (kpi) => `
        <article class="panel kpi-card is-negative">
          <p class="eyebrow">${kpi.label}</p>
          <div class="kpi-value">${kpi.value}</div>
          <p class="kpi-subtext">${kpi.subtext}</p>
        </article>
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
  if (filters.dateMode === "custom") {
    const start = filters.startDate ? formatDateLabel(filters.startDate) : "Start";
    const end = filters.endDate ? formatDateLabel(filters.endDate) : "End";
    label.push(`${start} - ${end}`);
  } else if (filters.quarter !== "All") {
    label.push(`${filters.quarter} QTD`);
  }
  if (filters.owner !== "All") label.push(filters.owner);
  if (filters.region !== "All") label.push(filters.region);
  if (filters.status !== "All") label.push(filters.status.replace("-", " "));
  labelNode.textContent = label.length ? label.join(" • ") : `QTD (${data.length})`;
}

function syncDateInputsState() {
  const isCustom = filters.dateMode === "custom";
  filterElements.startDate.disabled = !isCustom;
  filterElements.endDate.disabled = !isCustom;
}

function render() {
  const notesPage = Boolean(document.getElementById("closeLostNotesList"));
  if (notesPage && filters.status === "All") {
    filters.status = "close-lost";
    filterElements.status.value = "close-lost";
  }
  const filtered = applyFilters(opportunities);
  renderWindowLabel(filtered);
  renderKpis(filtered);
  renderRepLinks();
  renderTargetTracker(filtered);
  renderTrendInsights(filtered);
  renderHighlights(filtered);
  renderTrendChart(filtered);
  renderOwnerChart(filtered);
  renderOutcomeChart(filtered);
  renderTable(filtered);
  renderCloseLostSnapshot(filtered);
  renderCloseLostNotes(filtered);
}

populateSelect(filterElements.quarter, unique("quarter"));
populateSelect(filterElements.owner, unique("owner"));
populateSelect(filterElements.region, unique("region"));
populateSelect(filterElements.status, unique("status"));

Object.entries(filterElements).forEach(([key, element]) => {
  element.addEventListener("change", (event) => {
    filters[key] = event.target.value;
    syncDateInputsState();
    render();
  });
});

document.getElementById("resetFilters").addEventListener("click", () => {
  filters.quarter = qtdQuarter;
  filters.dateMode = "qtd";
  filters.startDate = qtdStartDate;
  filters.endDate = qtdEndDate;
  filters.owner = "All";
  filters.region = "All";
  filters.status = "All";
  filterElements.quarter.value = qtdQuarter;
  filterElements.dateMode.value = "qtd";
  filterElements.startDate.value = qtdStartDate;
  filterElements.endDate.value = qtdEndDate;
  filterElements.owner.value = "All";
  filterElements.region.value = "All";
  filterElements.status.value = "All";
  syncDateInputsState();
  render();
});

filters.startDate = qtdStartDate;
filters.endDate = qtdEndDate;
filterElements.quarter.value = filters.quarter;
filterElements.dateMode.value = filters.dateMode;
filterElements.startDate.value = filters.startDate;
filterElements.endDate.value = filters.endDate;
filterElements.startDate.min = qtdStartDate;
filterElements.startDate.max = qtdEndDate;
filterElements.endDate.min = qtdStartDate;
filterElements.endDate.max = qtdEndDate;
filterElements.owner.value = filters.owner;
filterElements.region.value = filters.region;
filterElements.status.value = filters.status;

syncDateInputsState();
render();
