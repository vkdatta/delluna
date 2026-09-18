export const name="left_panel_open-fill";
export const id="dl_960ec8102fbb45eaa42d";
export const url=new URL("../icons/L/left_panel_open-fill.svg?v=8bde2d2b0716ad12550ef684b62c71f20690bcaba4f6de0d7eeccb632c04a78e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
