export const name="filter_alt_off-fill";
export const id="dl_c0044b6bed86889b9d2e";
export const url=new URL("../icons/filter_alt_off-fill.svg?v=136b0eea584e9fd68f06e8b7d4ef632804c310409b19e961a9de323f01ef8085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
