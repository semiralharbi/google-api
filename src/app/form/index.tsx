import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { getLocation, loader } from "../../api/api_client";
import { Zoom } from "./enum";
import { Select } from "./select";
import { StyledButton, StyledForm, StyledInput } from "./style";

interface Props {
  theme: string;
}

export const Form = ({ theme }: Props) => {
  const [address, setAddress] = useState("");
  const [zoom, setZoom] = useState(Zoom.x6);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isMobile) {
      inputRef.current!.focus();
    }
    const coordinates = await getLocation(address);
    loader.load().then(() => {
      const newMap = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: coordinates,
        zoom: zoom,
      });
      new google.maps.Marker({ position: coordinates, map: newMap });
      setMap(newMap);
    });
  };

  useEffect(() => {
    if (map) {
      map.setOptions({
        styles:
          theme !== "Light"
            ? [
                { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                {
                  featureType: "administrative.locality",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "poi",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [{ color: "#263c3f" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#6b9a76" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [{ color: "#38414e" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#212a37" }],
                },
                {
                  featureType: "road",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#9ca5b3" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry",
                  stylers: [{ color: "#746855" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#1f2835" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#f3d19c" }],
                },
                {
                  featureType: "transit",
                  elementType: "geometry",
                  stylers: [{ color: "#2f3948" }],
                },
                {
                  featureType: "transit.station",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{ color: "#17263c" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#515c6d" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.stroke",
                  stylers: [{ color: "#17263c" }],
                },
              ]
            : null,
      });
    }
  }, [theme]);

  return (
    <>
      <StyledForm onSubmit={(event) => handleSubmit(event)}>
        <StyledInput
          ref={inputRef}
          placeholder="Type the address"
          type="string"
          min="1"
          value={address}
          onChange={({ target }) => setAddress(target.value)}
        ></StyledInput>
        <Select zoom={zoom} setZoom={setZoom}></Select>
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
    </>
  );
};
