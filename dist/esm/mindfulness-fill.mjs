export const name="mindfulness-fill";
export const id="dl_cf3c10c8813a465762c6";
export const url=new URL("../icons/mindfulness-fill.svg?v=f948cba334776d7a31a978c027f15808b4ef6f4c4d885e72b726516945eb4abb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
