export const name="magnifying-glass-fill";
export const id="dl_8fe1e0419be44cb39cbd";
export const url=new URL("../icons/magnifying-glass-fill.svg?v=7058a2f845fbad12ef4cc3fe5da69421941bdcac3e162dcc0cb1b790a2050512",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
