export const name="headlights-fill";
export const id="dl_a99c87486a3a4afcbd07";
export const url=new URL("../icons/headlights-fill.svg?v=3ab4741e28407ccc96aff5c15c379608eae6fddcb80f27e5cdb28ba1e2880080",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
