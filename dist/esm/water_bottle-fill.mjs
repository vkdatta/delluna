export const name="water_bottle-fill";
export const id="dl_cc1ba0e36f03af7eb6b8";
export const url=new URL("../icons/water_bottle-fill.svg?v=f418639ee227462e49831dd736256a64e3f031f975c62d282bfd8284a7888448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
