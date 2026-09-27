export const name="person_apron-fill";
export const id="dl_c2d7d0675099dca5d75f";
export const url=new URL("../icons/person_apron-fill.svg?v=e8876039038744e698f3b8ef63844e95f2f19c380cf6895259764ce103a7193d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
