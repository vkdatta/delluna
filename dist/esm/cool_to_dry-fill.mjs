export const name="cool_to_dry-fill";
export const id="dl_18871a887ef12a9515f0";
export const url=new URL("../icons/cool_to_dry-fill.svg?v=3fbda7f4e2b55ec58c8265737a9819b56799a697bb3f5e2ff6aa93d57b0feba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
