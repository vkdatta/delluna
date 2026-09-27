export const name="shield_radar-fill";
export const id="dl_4f17fcd6348c3028cb71";
export const url=new URL("../icons/shield_radar-fill.svg?v=9ac2ace68120ba810a387cf2645947841854b3240663b972ede4d86d2387eede",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
