export const name="offline_pin-fill";
export const id="dl_9d538ec79707d186d2b9";
export const url=new URL("../icons/offline_pin-fill.svg?v=8b44f05a079e3ae4c66abb799b2653efd0962987f390d13f5538a9c2244397eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
