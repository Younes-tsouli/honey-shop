import React from "react";
import "./Strip.css";

const ITEMS = [
  { icon: "eco", label: "Bio" },
  { icon: "location_on", label: "Récolte locale" },
  { icon: "local_fire_department", label: "Non chauffé" },
  { icon: "local_shipping", label: "Livraison rapide" },
];

export default function Strip() {
  return (
    <div className="strip" role="list" aria-label="Nos engagements">
      {ITEMS.map((item, i) => (
        <React.Fragment key={item.label}>
          <div className="strip-item" role="listitem">
            <span className="material-symbols-outlined strip-icon" aria-hidden="true">
              {item.icon}
            </span>
            {item.label}
          </div>
          {i < ITEMS.length - 1 && <span className="strip-dot" aria-hidden="true" />}
        </React.Fragment>
      ))}
    </div>
  );
}