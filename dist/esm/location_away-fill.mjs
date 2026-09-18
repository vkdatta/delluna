export const name="location_away-fill";
export const id="dl_f469a13da9aa4ca2bf7f";
export const url=new URL("../icons/L/location_away-fill.svg?v=3b03f5f23530f8f3ba2ab6a609be3a42de4cbf6eae75b800b075f65f473fefc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
