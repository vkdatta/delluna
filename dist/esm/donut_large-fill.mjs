export const name="donut_large-fill";
export const id="dl_d1f8d0b408ba4b2f8075";
export const url=new URL("../icons/donut_large-fill.svg?v=bd99329757a5083800bd3a46243aa7b264539e6c37f39cdf475b6e0ab30d122e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
