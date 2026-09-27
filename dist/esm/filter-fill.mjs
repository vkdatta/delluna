export const name="filter-fill";
export const id="dl_ce53baa5427fe234dadd";
export const url=new URL("../icons/filter-fill.svg?v=8fda1ce093e0ba3462c001e07cf2d3a2c9d57e88d2a351a208ffe559d07b2528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
