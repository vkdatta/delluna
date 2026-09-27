export const name="zone_person_urgent-fill";
export const id="dl_50be8026c04e29f90e47";
export const url=new URL("../icons/zone_person_urgent-fill.svg?v=529dc323a4cf02ff8b407138fe4d4d698beb30505eafeb670c4291f78ad1979e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
