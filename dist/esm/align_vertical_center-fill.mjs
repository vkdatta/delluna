export const name="align_vertical_center-fill";
export const id="dl_e66c88551c26799b6006";
export const url=new URL("../icons/align_vertical_center-fill.svg?v=959dd5530df682d13275bb6f3aee9d5a502c08593250837d09f36c163006cb60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
