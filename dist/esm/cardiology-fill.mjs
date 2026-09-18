export const name="cardiology-fill";
export const id="dl_fee4af3282424c4990f9";
export const url=new URL("../icons/cardiology-fill.svg?v=235d2995d010c3bc4b497c3bd0fb57a2453d2e647691c0017ddcb72f156cdaac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
