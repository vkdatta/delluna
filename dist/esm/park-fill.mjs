export const name="park-fill";
export const id="dl_cbb81df81e684eeba3fa";
export const url=new URL("../icons/park-fill.svg?v=dc97954077a373bf6459e12294baa2285814a7fe3d9fcdc33f747f73d9dd181c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
