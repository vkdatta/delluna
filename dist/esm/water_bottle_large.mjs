export const name="water_bottle_large";
export const id="dl_47c08371c34d4ed9afc1";
export const url=new URL("../icons/water_bottle_large.svg?v=bed8084683808895c63615aa65911612718de6dc6077ba20456daa82f8a8accb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
