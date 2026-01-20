import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Corrige ícones padrão do Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Parceiros() {
  // Coordenada exata do Google Maps
  const position: [number, number] = [-8.0578569, -34.8795674];



  return (
    <div className="p-8 max-w-7xl mx-auto bg-white">
      {/* Título */}
      <h1 className="font-bolota font-bold text-[#259C38] text-5xl mb-2">
        Parceiros
      </h1>

      {/* Subtítulo */}
      <p className="font-josefin font-normal text-[#2B3826] text-xl mb-8">
        Pontos de coleta de resíduos
      </p>

      {/* Mapa */}
      <MapContainer
        center={position}
        zoom={18}
        style={{ height: "500px", width: "100%" }}
        className="rounded-lg shadow-md"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marcador */}
        <Marker position={position}>
          <Popup maxWidth={300}>
            <div className="font-dmsans text-[#2B3826]">
              <h2 className="font-josefin font-semibold text-lg mb-1">
                Associação Trapeiros de Emaús Recife
              </h2>

              <p className="text-sm text-[#259C38] mb-2">
                Coleta de resíduos
              </p>

              <p className="text-sm italic mb-3">
                R. Mamede Simões, 53 <br />
                Santo Amaro, Recife – PE <br />
                CEP 50050-570
              </p>

              <img
                src="/images/164-hd_Projetos-Pernambuco-004.jpg"
                alt="Associação Trapeiros de Emaús Recife"
                className="w-full rounded-md"
              />
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
