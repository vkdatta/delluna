export const name="shift";
export const id="dl_b9f81d1ac35e7f8d63e0";
export const url=new URL("../icons/shift.svg?v=36ad6e222c62cb6e8319923c97535d67a2e370265cf9686a4aebb81e84c793b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
