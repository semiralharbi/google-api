import { Loader } from "@googlemaps/js-api-loader";
import React, { useRef } from "react";
import { useState } from "react";
import { getLocation, loader } from "../../api/api_client";
import { DivSquare } from "../div";
import { Zoom } from "./enum";
import { Select } from "./select";
import { StyledButton, StyledForm, StyledInput } from "./style";

export const Form = () => {
  const [address, setAddress] = useState("");
  const [zoom, setZoom] = useState(Zoom.x6);
  const inputRef = React.useRef<HTMLInputElement>(null);

  let map: google.maps.Map;
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inputRef.current!.focus();
    const coordinates = await getLocation(address);
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: coordinates,
        zoom: zoom,
      });
      new google.maps.Marker({ position: coordinates, map: map });
    });
  };

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
