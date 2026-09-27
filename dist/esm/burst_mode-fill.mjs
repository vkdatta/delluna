export const name="burst_mode-fill";
export const id="dl_c95b040d5ceba0101916";
export const url=new URL("../icons/burst_mode-fill.svg?v=43f85215c2a8f0034c2715a2f0f92b0a0c39e9e31d7dae8d5b23d3badf2165c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
