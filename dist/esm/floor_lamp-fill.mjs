export const name="floor_lamp-fill";
export const id="dl_7d64ac130efa9062e245";
export const url=new URL("../icons/floor_lamp-fill.svg?v=17d556d7af36ba5a07eb48f595a071c63b851911981bb2db3c125f42d8750387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
