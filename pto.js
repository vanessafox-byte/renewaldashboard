const ptoEntries = [
  { employee: "Aditya", fullName: "Aditya Gera", date: "2026-03-02", month: "March", type: "PTO" },
  { employee: "Aditya", fullName: "Aditya Gera", date: "2026-03-16", month: "March", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-03-19", month: "March", type: "PTO" },
  { employee: "Aditya", fullName: "Aditya Gera", date: "2026-03-23", month: "March", type: "PTO" },
  { employee: "Lakshay", fullName: "Lakshay Parashar", date: "2026-03-25", month: "March", type: "PTO" },
  { employee: "Tyler", fullName: "Tyler Arnold", date: "2026-03-25", month: "March", type: "PTO" },
  { employee: "Tyler", fullName: "Tyler Arnold", date: "2026-03-26", month: "March", type: "PTO" },
  { employee: "Vanessa", fullName: "Vanessa Fox", date: "2026-03-27", month: "March", type: "PTO" },
  { employee: "Lori", fullName: "Lori Greening", date: "2026-04-03", month: "April", type: "PTO" },
  { employee: "Vanessa", fullName: "Vanessa Fox", date: "2026-04-03", month: "April", type: "PTO" },
  { employee: "Ashana", fullName: "Ashana Raybe", date: "2026-04-06", month: "April", type: "PTO" },
  { employee: "Lori", fullName: "Lori Greening", date: "2026-04-08", month: "April", type: "PTO" },
  { employee: "Chantal", fullName: "Chantal Przybysz", date: "2026-04-09", month: "April", type: "PTO" },
  { employee: "Chantal", fullName: "Chantal Przybysz", date: "2026-04-10", month: "April", type: "PTO" },
  { employee: "Chantal", fullName: "Chantal Przybysz", date: "2026-04-13", month: "April", type: "PTO" },
  { employee: "Chantal", fullName: "Chantal Przybysz", date: "2026-04-14", month: "April", type: "PTO" },
  { employee: "Tyler", fullName: "Tyler Arnold", date: "2026-04-20", month: "April", type: "PTO" },
  { employee: "Tyler", fullName: "Tyler Arnold", date: "2026-04-21", month: "April", type: "PTO" },
  { employee: "Victor", fullName: "Victor Pajares Liberal", date: "2026-04-21", month: "April", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-04-24", month: "April", type: "PTO" },
  { employee: "Aditya", fullName: "Aditya Gera", date: "2026-04-27", month: "April", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-04-27", month: "April", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-04-28", month: "April", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-04-29", month: "April", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-04-30", month: "April", type: "PTO" },
  { employee: "Chantal", fullName: "Chantal Przybysz", date: "2026-05-01", month: "May", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-05-01", month: "May", type: "PTO" },
  { employee: "Tyler", fullName: "Tyler Arnold", date: "2026-05-11", month: "May", type: "PTO" },
  { employee: "Tyler", fullName: "Tyler Arnold", date: "2026-05-12", month: "May", type: "PTO" },
  { employee: "Nicolas", fullName: "Nicolas Fisher", date: "2026-05-13", month: "May", type: "PTO" },
  { employee: "Nicolas", fullName: "Nicolas Fisher", date: "2026-05-14", month: "May", type: "PTO" },
  { employee: "Nicolas", fullName: "Nicolas Fisher", date: "2026-05-15", month: "May", type: "PTO" },
  { employee: "Vanessa", fullName: "Vanessa Fox", date: "2026-05-15", month: "May", type: "PTO" },
  { employee: "Lakshay", fullName: "Lakshay Parashar", date: "2026-05-18", month: "May", type: "PTO" },
  { employee: "Vanessa", fullName: "Vanessa Fox", date: "2026-05-18", month: "May", type: "PTO" },
  { employee: "Lakshay", fullName: "Lakshay Parashar", date: "2026-05-19", month: "May", type: "PTO" },
  { employee: "Vanessa", fullName: "Vanessa Fox", date: "2026-05-19", month: "May", type: "PTO" },
  { employee: "Lakshay", fullName: "Lakshay Parashar", date: "2026-05-20", month: "May", type: "PTO" },
  { employee: "Tyler", fullName: "Tyler Arnold", date: "2026-06-19", month: "June", type: "PTO" },
  { employee: "Tyler", fullName: "Tyler Arnold", date: "2026-06-22", month: "June", type: "PTO" },
  { employee: "Tyler", fullName: "Tyler Arnold", date: "2026-06-23", month: "June", type: "PTO" },
  { employee: "Tyler", fullName: "Tyler Arnold", date: "2026-06-24", month: "June", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-07-20", month: "July", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-07-21", month: "July", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-07-22", month: "July", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-07-23", month: "July", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-07-24", month: "July", type: "PTO" },
  { employee: "Nicolas", fullName: "Nicolas Fisher", date: "2026-07-24", month: "July", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-07-27", month: "July", type: "PTO" },
  { employee: "Nicolas", fullName: "Nicolas Fisher", date: "2026-07-27", month: "July", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-07-28", month: "July", type: "PTO" },
  { employee: "Nicolas", fullName: "Nicolas Fisher", date: "2026-07-28", month: "July", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-07-29", month: "July", type: "PTO" },
  { employee: "Nicolas", fullName: "Nicolas Fisher", date: "2026-07-29", month: "July", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-07-30", month: "July", type: "PTO" },
  { employee: "Nicolas", fullName: "Nicolas Fisher", date: "2026-07-30", month: "July", type: "PTO" },
  { employee: "Ebel", fullName: "Ebel Floridia", date: "2026-07-31", month: "July", type: "PTO" },
  { employee: "Nicolas", fullName: "Nicolas Fisher", date: "2026-07-31", month: "July", type: "PTO" }
];

const buddyCoverage = [
  { employee: "Aditya", buddy: "Lakshay" },
  { employee: "Tyler", buddy: "Ashana" },
  { employee: "Chantal", buddy: "Lori" },
  { employee: "Victor", buddy: "Nicolas" },
  { employee: "Nicolas", buddy: "Ebel" },
  { employee: "Ebel", buddy: "Nicolas" }
];

const ptoFilters = {
  month: "All",
  employee: "All"
};

const ptoFilterElements = {
  month: document.getElementById("ptoMonthFilter"),
  employee: document.getElementById("ptoEmployeeFilter")
};

const monthNames = [...new Set(ptoEntries.map((item) => item.month))];
const employees = [...new Set(ptoEntries.map((item) => item.employee))].sort((a, b) => a.localeCompare(b));

function populatePtoSelect(select, values) {
  select.innerHTML = ["All", ...values].map((value) => `<option value="${value}">${value}</option>`).join("");
}

function formatPtoDate(value, options = { month: "short", day: "numeric" }) {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(`${value}T00:00:00`));
}

function daysBetween(start, end) {
  return Math.round((end - start) / 86400000);
}

function applyPtoFilters(data) {
  return data.filter((item) => {
    return (
      (ptoFilters.month === "All" || item.month === ptoFilters.month) &&
      (ptoFilters.employee === "All" || item.employee === ptoFilters.employee)
    );
  });
}

function groupPtoRanges(data) {
  const groups = new Map();
  data.forEach((item) => {
    if (!groups.has(item.employee)) groups.set(item.employee, []);
    groups.get(item.employee).push(item);
  });

  return [...groups.entries()].flatMap(([employee, entries]) => {
    const sorted = entries.slice().sort((a, b) => a.date.localeCompare(b.date));
    const ranges = [];
    let current = null;

    sorted.forEach((entry) => {
      const entryDate = new Date(`${entry.date}T00:00:00`);
      if (!current) {
        current = { employee, fullName: entry.fullName, month: entry.month, start: entry.date, end: entry.date, days: 1 };
        return;
      }

      const previousDate = new Date(`${current.end}T00:00:00`);
      const contiguous = daysBetween(previousDate, entryDate) === 1 && entry.month === current.month;
      if (contiguous) {
        current.end = entry.date;
        current.days += 1;
      } else {
        ranges.push(current);
        current = { employee, fullName: entry.fullName, month: entry.month, start: entry.date, end: entry.date, days: 1 };
      }
    });

    if (current) ranges.push(current);
    return ranges;
  }).sort((a, b) => a.start.localeCompare(b.start) || a.employee.localeCompare(b.employee));
}

function getBuddy(employee) {
  return buddyCoverage.find((item) => item.employee === employee)?.buddy || "Not assigned";
}

function renderPtoWindowLabel() {
  const node = document.getElementById("ptoActiveWindowLabel");
  if (!node) return;
  const parts = [];
  if (ptoFilters.month !== "All") parts.push(ptoFilters.month);
  if (ptoFilters.employee !== "All") parts.push(ptoFilters.employee);
  node.textContent = parts.length ? parts.join(" • ") : "All Scheduled PTO";
}

function renderPtoKpis(data) {
  const grid = document.getElementById("ptoKpiGrid");
  if (!grid) return;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcoming = data.filter((item) => new Date(`${item.date}T00:00:00`) >= today);
  const uniqueEmployees = new Set(data.map((item) => item.employee));
  const nextPto = upcoming.slice().sort((a, b) => a.date.localeCompare(b.date))[0];

  const cards = [
    {
      label: "PTO Days",
      value: String(data.length),
      subtext: `${data.length} scheduled PTO day${data.length === 1 ? "" : "s"} in scope`
    },
    {
      label: "Team Members",
      value: String(uniqueEmployees.size),
      subtext: `${uniqueEmployees.size} rep${uniqueEmployees.size === 1 ? "" : "s"} with PTO in scope`
    },
    {
      label: "Upcoming PTO",
      value: String(upcoming.length),
      subtext: `${upcoming.length} future PTO day${upcoming.length === 1 ? "" : "s"} from today`
    },
    {
      label: "Next Out",
      value: nextPto ? nextPto.employee : "None",
      subtext: nextPto ? `${formatPtoDate(nextPto.date)} · ${getBuddy(nextPto.employee)} covering` : "No upcoming PTO scheduled"
    }
  ];

  grid.innerHTML = cards
    .map(
      (card) => `
        <article class="panel kpi-card">
          <p class="eyebrow">${card.label}</p>
          <div class="kpi-value">${card.value}</div>
          <p class="kpi-subtext">${card.subtext}</p>
        </article>
      `
    )
    .join("");
}

function renderPtoRanges(data) {
  const grid = document.getElementById("ptoRangeGrid");
  if (!grid) return;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcomingOnly = data.filter((item) => new Date(`${item.date}T00:00:00`) >= today);
  const ranges = groupPtoRanges(upcomingOnly);

  if (!ranges.length) {
    grid.innerHTML = `<div class="notes-empty">No upcoming PTO matches the current filter window.</div>`;
    return;
  }

  grid.innerHTML = ranges
    .map((range) => {
      const label = range.start === range.end
        ? formatPtoDate(range.start)
        : `${formatPtoDate(range.start)} - ${formatPtoDate(range.end)}`;
      return `
        <article class="pto-card">
          <div class="pto-card-header">
            <div class="pto-card-title">${range.employee}</div>
            <div class="pto-badge">${range.days} day${range.days === 1 ? "" : "s"}</div>
          </div>
          <div class="pto-card-meta">${range.fullName} · ${range.month}</div>
          <div class="pto-card-subtext">${label}</div>
          <div class="pto-card-subtext">Coverage buddy: ${getBuddy(range.employee)}</div>
        </article>
      `;
    })
    .join("");
}

function renderBuddyCoverage() {
  const grid = document.getElementById("buddyGrid");
  if (!grid) return;
  const visible = ptoFilters.employee === "All"
    ? buddyCoverage
    : buddyCoverage.filter((item) => item.employee === ptoFilters.employee || item.buddy === ptoFilters.employee);

  grid.innerHTML = visible.length
    ? visible
        .map(
          (item) => `
            <article class="buddy-card">
              <div class="buddy-card-header">
                <div class="buddy-card-title">${item.employee}</div>
                <div class="pto-badge">${item.buddy}</div>
              </div>
              <div class="buddy-card-meta">${item.employee} is paired with ${item.buddy} for PTO coverage.</div>
            </article>
          `
        )
        .join("")
    : `<div class="notes-empty">No buddy coverage rows match the current employee filter.</div>`;
}

function renderPto() {
  const filtered = applyPtoFilters(ptoEntries);
  renderPtoWindowLabel();
  renderPtoKpis(filtered);
  renderPtoRanges(filtered);
  renderBuddyCoverage();
}

populatePtoSelect(ptoFilterElements.month, monthNames);
populatePtoSelect(ptoFilterElements.employee, employees);

Object.entries(ptoFilterElements).forEach(([key, element]) => {
  element.addEventListener("change", (event) => {
    ptoFilters[key] = event.target.value;
    renderPto();
  });
});

document.getElementById("ptoResetFilters").addEventListener("click", () => {
  ptoFilters.month = "All";
  ptoFilters.employee = "All";
  ptoFilterElements.month.value = "All";
  ptoFilterElements.employee.value = "All";
  renderPto();
});

ptoFilterElements.month.value = ptoFilters.month;
ptoFilterElements.employee.value = ptoFilters.employee;

renderPto();
