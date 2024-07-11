import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";

export default function VisibilityToolbar({onVisibilityChange}) {

  


  return (
    <ToggleButtonGroup type="radio" name="visibility" defaultValue={"all"} onChange={onVisibilityChange}>
      <ToggleButton id="1" value="all">
        Svi
      </ToggleButton>
      <ToggleButton id="2" value="active">
        Aktivni
      </ToggleButton>
      <ToggleButton id="3" value="completed">
        Dovršeni
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

VisibilityToolbar.propTypes = {
  onVisibilityChange: PropTypes.func,
  
}