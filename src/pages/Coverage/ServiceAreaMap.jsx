// src/components/ServiceAreaMap.jsx
import React, { useEffect } from 'react'; // Removed useRef as it's not strictly needed here
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';
import L from 'leaflet';
import SearchBar from './SearchBar'; // Import the SearchBar

// Leaflet Icon Fix (keep this at the top level of the file)
// Make sure this line is exactly like this and no google search URL
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// });

// Component to handle map movement
const MapMover = ({ targetCoordinates, targetZoom }) => {
  const map = useMap(); // Get access to the Leaflet map instance

  useEffect(() => {
    if (targetCoordinates && targetCoordinates[0] && targetCoordinates[1]) {
      map.flyTo(targetCoordinates, targetZoom, {
        duration: 1.5, // Smooth animation duration
      });
    }
  }, [targetCoordinates, targetZoom, map]);

  return null; // This component doesn't render anything visible
};

const ServiceAreaMap = () => {
  const { isPending, error, data: serviceAreas } = useQuery({
    queryKey: ['serviceAreasData'],
    queryFn: () =>
      fetch('/src/assets/warehouses.json').then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok: ' + res.statusText);
        }
        return res.json();
      }),
  });

  // State to hold the coordinates and zoom for the map to move to
  const [mapTarget, setMapTarget] = React.useState({
    coordinates: [23.7, 90.35], // Default to Dhaka center
    zoom: 7, // Default zoom for Bangladesh
  });

  const handleSearch = (searchTerm) => {
    if (!serviceAreas) return;

    const normalizedSearchTerm = searchTerm.toLowerCase();

    // If the search term is empty, reset the map to the default view
    if (!normalizedSearchTerm) {
      setMapTarget({
        coordinates: [23.7, 90.35],
        zoom: 7,
      });
      return; // Exit early
    }

    const foundArea = serviceAreas.find(
      (area) =>
        area.district.toLowerCase().includes(normalizedSearchTerm) ||
        area.city.toLowerCase().includes(normalizedSearchTerm) ||
        area.covered_area.some((ca) =>
          ca.toLowerCase().includes(normalizedSearchTerm)
        )
    );

    if (foundArea && foundArea.latitude && foundArea.longitude) {
      setMapTarget({
        coordinates: [foundArea.latitude, foundArea.longitude],
        zoom: 12, // Zoom in more when a specific location is searched
      });
    } else {
      // If not found, perhaps don't move the map, or revert to default
      // For now, let's just log or alert (alert can be annoying)
      // console.log(`Location "${searchTerm}" not found or coordinates missing.`);
      // Optionally reset map to default or show a different message
      // setMapTarget({ coordinates: [23.7, 90.35], zoom: 7 });
    }
  };


  if (isPending) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        <p>Error loading map data: {error.message}</p>
        <p>Please ensure 'service-areas.json' is in 'public/assets' and is valid JSON.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Our Service Areas</h2>
      <div className="flex justify-center flex-col items-center">
        {/* SearchBar Component - onSearch will now trigger on every change */}
        <SearchBar onSearch={handleSearch} />

        <MapContainer
          center={mapTarget.coordinates}
          zoom={mapTarget.zoom}
          scrollWheelZoom={false}
          className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-lg shadow-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapMover
            targetCoordinates={mapTarget.coordinates}
            targetZoom={mapTarget.zoom}
          />

          {serviceAreas.map((area, index) => (
            area.status === 'active' && area.latitude && area.longitude ? (
              <Marker key={index} position={[area.latitude, area.longitude]}>
                <Popup>
                  <h3 className="font-bold">{area.city}, {area.district}</h3>
                  <p>Region: {area.region}</p>
                  <p>Covered Areas: {area.covered_area.join(', ')}</p>
                  {area.flowchart && (
                    <a href={area.flowchart} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      View Flowchart
                    </a>
                  )}
                </Popup>
              </Marker>
            ) : null
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ServiceAreaMap;