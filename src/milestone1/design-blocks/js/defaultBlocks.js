var xmlString = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="if_electricity_cost" id="0$@AMnDPL+JclD4ap)u0" x="88" y="36"><field name="THRESHOLD">20</field><field name="LOCATION">LIVING_ROOM</field><statement name="DO"><block type="turn_off_non_essential" id=";:JYPx)!jn,iE1A7@]d+"></block></statement><statement name="DEVICES"><block type="philips_lightbulb" id="JR;=UP#MWp-fzFg;Ttzv"><next><block type="curtains" id="0-Y%rzfD?Lz$p43e#PVm"><next><block type="amazon_alexa" id="sfh?]ur|AR0h2JrZ3#pC"></block></next></block></next></block></statement></block></xml>';
var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var serializer = new XMLSerializer();
export const defaultBlocks = new XMLSerializer().serializeToString(xmlDoc);
