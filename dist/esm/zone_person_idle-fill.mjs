export const name="zone_person_idle-fill";
export const id="dl_d6e0c230f831fda2064a";
export const url=new URL("../icons/zone_person_idle-fill.svg?v=937eb4eab9cee7b240aee17b433aa94b747bcfe5c26496aca0b73cff3f1f6bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
