export const name="map_search-fill";
export const id="dl_fe07f6df733b0033be1f";
export const url=new URL("../icons/map_search-fill.svg?v=1275b3a548a337532b9b66e79ec39986901544643279ac38ace1c8d165353c9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
