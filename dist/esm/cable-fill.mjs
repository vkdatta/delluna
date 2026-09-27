export const name="cable-fill";
export const id="dl_26d3cd2f51d4b89d0042";
export const url=new URL("../icons/cable-fill.svg?v=7603aef95aa5c606ea8fb222d123e27a5389b2a37aaf4685db55788919722a7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
