export const name="gps-fill";
export const id="dl_b67a078d1a59432c9a7d";
export const url=new URL("../icons/gps-fill.svg?v=d79dbc9841426cbb05300ca71230587d5810be731f76f472139ad2b0ef2d121b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
