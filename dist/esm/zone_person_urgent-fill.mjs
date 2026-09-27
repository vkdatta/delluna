export const name="zone_person_urgent-fill";
export const id="dl_4ba14daafc5a75b27294";
export const url=new URL("../icons/zone_person_urgent-fill.svg?v=ebf90eb3bb017e7fe07c08ccbce07cfd728db23605ffdea193590c067fdc234c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
