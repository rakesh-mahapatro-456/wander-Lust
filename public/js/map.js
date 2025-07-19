if (document.getElementById("map")) {
  const fallbackCoordinates = [138.7274, 35.3606];

  const isValidCoordinates =
    typeof COORDINATES !== "undefined" &&
    Array.isArray(COORDINATES) &&
    COORDINATES.length === 2 &&
    COORDINATES.every(coord => typeof coord === "number");

  const centerCoordinates = isValidCoordinates ? COORDINATES : fallbackCoordinates;

  const map = new maplibregl.Map({
    container: "map",
    style: `https://api.maptiler.com/maps/streets/style.json?key=${MAPTILER_KEY}`,
    center: centerCoordinates,
    zoom: 10,
  });

  const marker = new maplibregl.Marker({ color: "red" })
    .setLngLat(centerCoordinates)
    .addTo(map);

  // Use inline style to apply 'Plus Jakarta Sans'
  const popup = new maplibregl.Popup({ offset: 25 }).setHTML(`
    <div style="
      font-family: 'Plus Jakarta Sans', sans-serif;
      padding: 5px;
      color: #333;
    ">
      <h4 style="margin: 0 0 5px 0; font-size: 16px;">Selected Location</h4>
      <p style="margin: 0; font-size: 14px;">Exact location will be shown after booking.</p>
    </div>
  `);

  const markerElement = marker.getElement();

  markerElement.addEventListener("mouseenter", () => {
    popup.setLngLat(centerCoordinates).addTo(map);
  });

  markerElement.addEventListener("mouseleave", () => {
    popup.remove();
  });

  map.addControl(new maplibregl.NavigationControl());
}
