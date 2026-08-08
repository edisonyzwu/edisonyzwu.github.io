// —— Map (NYT locator style) ——
const map = L.map("map", {
  scrollWheelZoom: false,
  zoomControl: true,
}).setView([37.76, -122.44], 12.3);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  maxZoom: 19,
}).addTo(map);

const locations = [
  {
    lat: 37.7802,
    lng: -122.5107,
    description:
      "On September 3 at 16:39, the driver of a sedan was speeding northbound, lost control of the vehicle, struck trees and vehicles, and was ejected. The driver succumbed to his injuries.",
  },
  {
    lat: 37.8007,
    lng: -122.4274,
    description:
      "On September 12 at 5:55, the driver of a sedan was speeding northbound, lost control of the vehicle, struck trees and vehicles, and was ejected. The driver succumbed to his injuries.",
  },
  {
    lat: 37.799,
    lng: -122.4264,
    description:
      "On September 21 at 23:32, a driver was traveling eastbound and struck the victim, who was crossing southbound in the west side crosswalk. The driver of the vehicle fled the scene.",
  },
  {
    lat: 37.78488444,
    lng: -122.4126387,
    description:
      "On May 23 at 12:37, the driver of a box truck was stopped at a red light at westbound Ellis St. The victim was walking northbound and proceeded to climb under the truck. When the Ellis St traffic signal became green, the driver proceeded and struck the victim, who succumbed to their injuries.",
  },
  {
    lat: 37.7213,
    lng: -122.4106,
    description:
      "On May 3 at 23:34, the driver was speeding eastbound on Mansell Street, ran the stop sign at San Bruno Avenue, struck a MUNI bus, and struck a building. The passenger of the vehicle later succumbed to their injuries a few days later.",
  },
  {
    lat: 37.7351,
    lng: -122.3874,
    description:
      "On May 30 at 10:27, a driver of a SFPUC pickup truck parked north of the intersection and opened the driver-side door. The victim was bicycling northbound and struck the open car door. The victim later succumbed to their injuries.",
  },
  {
    lat: 37.78169559,
    lng: -122.4151811,
    description:
      "On March 2 at 0:25, a driver of a pickup truck was parked on the north side of Golden Gate Avenue when the victim walked and stood in the roadway. The driver began traveling eastbound and struck the victim. The driver fled the scene and was later arrested. The victim was experiencing homelessness.",
  },
  {
    lat: 37.76879096,
    lng: -122.4683676,
    description:
      "On March 8 at 15:20, a driver of a motorcycle was speeding westbound and swerved to avoid a driver from the Music Concourse approach. The motorcyclist lost control, was ejected, and succumbed to their injuries.",
  },
  {
    lat: 37.7403,
    lng: -122.4646,
    description:
      "On March 16 at 12:13, the driver of a sedan was speeding northbound, lost control of the vehicle, struck trees and vehicles, and was ejected. The driver succumbed to his injuries.",
  },
  {
    lat: 37.7489,
    lng: -122.4407,
    description:
      "On March 30 at 10:27, the driver of a sedan was speeding northbound, lost control of the vehicle, struck trees and vehicles, and was ejected. The driver succumbed to his injuries.",
  },
  {
    lat: 37.74129376,
    lng: -122.4226683,
    description:
      "On June 10 at 3:41, a driver of a vehicle was traveling northbound and struck the victim.",
  },
  {
    lat: 37.77742608,
    lng: -122.4038761,
    description:
      "On June 30 at 16:48, a driver of a minivan was speeding westbound when the victim ran northbound in front of the vehicle midblock. The victim later succumbed to their injuries.",
  },
  {
    lat: 37.74408483,
    lng: -122.3987569,
    description:
      "On June 17 at 21:30, a driver of a tour bus was traveling eastbound, stopped at the STOP sign, made a left turn onto northbound Toland, and struck the victim, who was crossing westbound in the north side crosswalk.",
  },
  {
    lat: 37.7966,
    lng: -122.4233,
    description:
      "On June 15 at 11:36, a driver was traveling westbound on Broadway and struck the victim, who was crossing northbound in the west side crosswalk against the solid red hand. The victim later succumbed to their injuries.",
  },
  {
    lat: 37.71919259,
    lng: -122.4439543,
    description:
      "On July 11 at 0:40, a driver was traveling westbound under the influence and struck the victim, who was previously sitting in the roadway.",
  },
  {
    lat: 37.7652,
    lng: -122.4173,
    description:
      "On July 5 at 13:14, a driver of a vehicle was traveling northbound and struck the driver and passenger of a motorcycle, who were traveling southbound. The driver of the motorcycle later succumbed to their injuries. The driver of the vehicle fled the scene.",
  },
  {
    lat: 37.77430323,
    lng: -122.4584156,
    description:
      "On January 31 at 5:18, the driver of a minivan was traveling westbound, proceeded on a green light, and struck the victim, who was crossing northbound in the west side crosswalk.",
  },
  {
    lat: 37.70860136,
    lng: -122.4710062,
    description:
      "On January 1 at 20:26, the driver of a sedan was speeding northbound, lost control of the vehicle, struck trees and vehicles, and was ejected. The driver succumbed to his injuries.",
  },
  {
    lat: 37.71990031,
    lng: -122.4749546,
    description:
      "On February 8 at 1:06, the driver of a sedan was speeding southbound on 19th Avenue and collided with a parked tow truck. The driver succumbed to their injuries.",
  },
  {
    lat: 37.77603932,
    lng: -122.4025241,
    description:
      "On February 8 at 4:58, a driver of a pickup truck struck the victim, who was lying in the roadway for unknown reasons.",
  },
  {
    lat: 37.73103887,
    lng: -122.4295675,
    description:
      "On February 25 at 18:40, a driver traveling eastbound struck the victim, who was crossing southbound in the east side crosswalk. The driver fled the scene.",
  },
  {
    lat: 37.7438,
    lng: -122.4036,
    description:
      "On August 9 at 15:38, a driver of a pickup truck was making a southbound left turn into a parking lot and failed to yield to the victim, who was bicycling northbound and struck the rear of the pickup truck.",
  },
  {
    lat: 37.7332,
    lng: -122.4347,
    description:
      "On August 15 at 14:39, a driver of a box truck was making an eastbound right turn and struck the victim, who was crossing eastbound in the southside crosswalk.",
  },
];

const markerStyle = {
  color: "#ffffff",
  weight: 1.5,
  fillColor: "#c41e3a",
  fillOpacity: 0.92,
  radius: 5.5,
};

locations.forEach(function (location) {
  const marker = L.circleMarker([location.lat, location.lng], markerStyle).addTo(map);

  marker.bindTooltip(location.description, {
    permanent: false,
    direction: "top",
    className: "nyt-tooltip",
    opacity: 1,
    offset: [0, -4],
  });
});

// —— Stacked bar chart (NYT graphic style) ——
const chartContainer = document.getElementById("chart");
const tooltipEl = document.getElementById("chart-tooltip");

const COLOR = {
  Pedestrian: "#6b0f1a",
  Passenger: "#9c1f2e",
  Driver: "#c41e3a",
  Motorcyclist: "#e07070",
  Bicyclist: "#e8a090",
  Other: "#f0cfc4",
};

const CATEGORY_ORDER = [
  "Pedestrian",
  "Passenger",
  "Driver",
  "Motorcyclist",
  "Bicyclist",
  "Other",
];

// Embedded so the chart works over file:// (d3.csv is blocked by browsers locally)
const CHART_DATA = [
  { accident_year: "2014", Pedestrian: 23, Passenger: 5, Driver: 11, Motorcyclist: 0, Bicyclist: 3, Other: 0 },
  { accident_year: "2015", Pedestrian: 22, Passenger: 0, Driver: 11, Motorcyclist: 0, Bicyclist: 4, Other: 0 },
  { accident_year: "2016", Pedestrian: 19, Passenger: 6, Driver: 19, Motorcyclist: 0, Bicyclist: 3, Other: 0 },
  { accident_year: "2017", Pedestrian: 13, Passenger: 0, Driver: 7, Motorcyclist: 0, Bicyclist: 2, Other: 0 },
  { accident_year: "2018", Pedestrian: 15, Passenger: 3, Driver: 6, Motorcyclist: 0, Bicyclist: 4, Other: 0 },
  { accident_year: "2019", Pedestrian: 21, Passenger: 8, Driver: 16, Motorcyclist: 0, Bicyclist: 1, Other: 0 },
  { accident_year: "2020", Pedestrian: 14, Passenger: 9, Driver: 14, Motorcyclist: 0, Bicyclist: 2, Other: 3 },
  { accident_year: "2021", Pedestrian: 14, Passenger: 5, Driver: 19, Motorcyclist: 0, Bicyclist: 2, Other: 0 },
  { accident_year: "2022", Pedestrian: 23, Passenger: 5, Driver: 19, Motorcyclist: 0, Bicyclist: 1, Other: 2 },
  { accident_year: "2023", Pedestrian: 22, Passenger: 4, Driver: 13, Motorcyclist: 0, Bicyclist: 1, Other: 5 },
  { accident_year: "2024", Pedestrian: 14, Passenger: 2, Driver: 3, Motorcyclist: 2, Bicyclist: 2, Other: 0 },
];

function renderChart() {
  chartContainer.innerHTML = "";

  const data = CHART_DATA.map((row) => ({ ...row }));
  const subgroups = CATEGORY_ORDER;
  const groups = data.map((d) => d.accident_year);

  const containerWidth = chartContainer.clientWidth || 960;
  const margin = { top: 48, right: 16, bottom: 36, left: 40 };
  const width = Math.max(280, containerWidth - margin.left - margin.right);
  const height = Math.max(280, Math.min(420, window.innerWidth < 768 ? 300 : 380));

  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("role", "presentation");

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand().domain(groups).range([0, width]).padding(0.18);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d3.sum(subgroups, (key) => d[key]))])
    .nice()
    .range([height, 0]);

  const color = d3
    .scaleOrdinal()
    .domain(subgroups)
    .range(subgroups.map((k) => COLOR[k] || "#999"));

  // Legend (horizontal, wraps on narrow widths)
  const legend = svg
    .append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${margin.left}, 8)`);

  let legendX = 0;
  let legendY = 0;
  const legendGap = 14;
  const legendRowH = 16;
  const legendItems = legend
    .selectAll("g")
    .data(subgroups)
    .enter()
    .append("g")
    .attr("class", (d) => `legend-item legend-${d}`)
    .attr("transform", (d) => {
      const labelWidth = d.length * 6.8 + 20;
      if (legendX > 0 && legendX + labelWidth > width) {
        legendX = 0;
        legendY += legendRowH;
      }
      const xPos = legendX;
      const yPos = legendY;
      legendX += labelWidth + legendGap;
      return `translate(${xPos}, ${yPos})`;
    });

  // Push plot down if legend wraps
  const legendRows = legendY / legendRowH + 1;
  const legendOffset = Math.max(0, (legendRows - 1) * legendRowH);
  if (legendOffset > 0) {
    g.attr("transform", `translate(${margin.left},${margin.top + legendOffset})`);
    svg.attr(
      "viewBox",
      `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom + legendOffset}`
    );
  }

  legendItems
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("y", 1)
    .attr("fill", (d) => color(d));

  legendItems
    .append("text")
    .attr("x", 14)
    .attr("y", 10)
    .attr("fill", "#121212")
    .attr("font-family", "Libre Franklin, Helvetica Neue, sans-serif")
    .attr("font-size", 11)
    .text((d) => d);

  // Gridlines
  const yTicks = y.ticks(5);
  g.append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(y).tickValues(yTicks).tickSize(-width).tickFormat(""))
    .call((sel) => sel.select(".domain").remove())
    .call((sel) =>
      sel.selectAll("line").attr("stroke", "#e2e2e2").attr("stroke-width", 1)
    );

  // X axis
  g.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickSize(0).tickPadding(10))
    .call((sel) => sel.select(".domain").attr("stroke", "#121212").attr("stroke-width", 1))
    .call((sel) =>
      sel
        .selectAll("text")
        .attr("fill", "#121212")
        .attr("font-family", "Libre Franklin, Helvetica Neue, sans-serif")
        .attr("font-size", 11)
    );

  // Y axis
  g.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(y).tickValues(yTicks).tickSize(0).tickPadding(8))
    .call((sel) => sel.select(".domain").remove())
    .call((sel) =>
      sel
        .selectAll("text")
        .attr("fill", "#666666")
        .attr("font-family", "Libre Franklin, Helvetica Neue, sans-serif")
        .attr("font-size", 11)
    );

  const stackedData = d3.stack().keys(subgroups)(data);

  g.append("g")
    .attr("class", "bars")
    .selectAll("g")
    .data(stackedData)
    .enter()
    .append("g")
    .attr("fill", (d) => color(d.key))
    .attr("class", (d) => `subgroup subgroup-${d.key}`)
    .selectAll("rect")
    .data((d) => d)
    .enter()
    .append("rect")
    .attr("x", (d) => x(d.data.accident_year))
    .attr("y", (d) => y(d[1]))
    .attr("height", (d) => Math.max(0, y(d[0]) - y(d[1])))
    .attr("width", x.bandwidth())
    .style("cursor", "pointer")
    .on("mouseover", function (event, d) {
      const subgroup = d3.select(this.parentNode).datum().key;
      const value = d[1] - d[0];

      g.selectAll(".bars rect").attr("fill-opacity", 0.28);
      g.selectAll(`.subgroup-${subgroup} rect`).attr("fill-opacity", 1);

      legend.selectAll(".legend-item").attr("opacity", 0.35);
      legend.select(`.legend-${subgroup}`).attr("opacity", 1);

      tooltipEl.hidden = false;
      tooltipEl.innerHTML = `
        <div class="tt-year">${d.data.accident_year}</div>
        <div class="tt-row">${subgroup}: <span class="tt-value">${value}</span></div>
      `;
    })
    .on("mousemove", function (event) {
      const pad = 14;
      let left = event.clientX + pad;
      let top = event.clientY + pad;
      const rect = tooltipEl.getBoundingClientRect();
      if (left + rect.width > window.innerWidth - 8) {
        left = event.clientX - rect.width - pad;
      }
      if (top + rect.height > window.innerHeight - 8) {
        top = event.clientY - rect.height - pad;
      }
      tooltipEl.style.left = `${left}px`;
      tooltipEl.style.top = `${top}px`;
    })
    .on("mouseout", function () {
      g.selectAll(".bars rect").attr("fill-opacity", 1);
      legend.selectAll(".legend-item").attr("opacity", 1);
      tooltipEl.hidden = true;
    });
}

renderChart();

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(renderChart, 180);
});
