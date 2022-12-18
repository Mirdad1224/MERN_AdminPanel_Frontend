import {
  GridColumnMenuContainer,
  GridFilterMenuItem,
  HideGridColMenuItem,
  GridColumnMenuProps,
} from "@mui/x-data-grid";

type PaletteColorKey = "primary" | "secondary";
type OwnerState = {
  color: PaletteColorKey;
};

const CustomColumnMenu = (props: GridColumnMenuProps & OwnerState) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
