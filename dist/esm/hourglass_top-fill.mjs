export const name="hourglass_top-fill";
export const id="dl_56274a7dbc5a4812abd9";
export const url=new URL("../icons/H/hourglass_top-fill.svg?v=347cd31a610bffe8226114bb0e7d3a034093576cd3d1b45df7edfa5dff1a501e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
