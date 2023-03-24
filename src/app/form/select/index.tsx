import { Zoom } from "../enum";
import { StyledSelect } from "./styled";

interface Props {
  zoom: Zoom;
  setZoom: React.Dispatch<React.SetStateAction<Zoom>>;
}

export const Select = ({ zoom, setZoom }: Props) => (
  <StyledSelect value={zoom} onChange={({ target }) => setZoom(Number(target.value))}>
    {Object.keys(Zoom)
      .filter((key) => isNaN(Number(key)))
      .map((key) => (
        <option key={key} value={Zoom[key as keyof typeof Zoom]}>
          {key}
        </option>
      ))}
  </StyledSelect>
);
