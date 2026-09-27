export const name="shield_radar";
export const id="dl_ff6604d418500cd527b8";
export const url=new URL("../icons/shield_radar.svg?v=3f558d417708467f96c9e4b7dcf0958747da690c7dc719c291981d752de43208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
