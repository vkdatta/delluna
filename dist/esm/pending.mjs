export const name="pending";
export const id="dl_4f68d897cd2efaff9c06";
export const url=new URL("../icons/pending.svg?v=8031742cbdbff226bdbb1805d3b4c7f792c006d02cad736a7bbece05209a97cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
