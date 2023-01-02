import { useParams } from "react-router-dom";
import {
  useSelectedVariable,
  useReleatedStories,
} from "../../hooks/useReleatedStories";
import NetworkGraph from "../NetworkGraph";
import { FilterSection } from "./styles";

const Filter = () => {
  const { slug } = useParams();
  const releatedStories = useReleatedStories(slug as string);
  const selectedVariable = useSelectedVariable(slug as string);
  const title =
    (selectedVariable?.tag as string) || (selectedVariable?.category as string);
  const definition = selectedVariable?.definition;

  return (
    <>
      {selectedVariable?.category && releatedStories?.length > 0 && (
        <FilterSection>
          <div className="intro-text">
            <h1>{title}</h1>
            <p>{definition}</p>
          </div>
          <div className="graph-container">
            <NetworkGraph
              selectedVariable={selectedVariable}
              relatedStories={releatedStories}
            />
          </div>
        </FilterSection>
      )}
    </>
  );
};

export default Filter;
