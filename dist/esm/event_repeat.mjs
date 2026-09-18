export const name="event_repeat";
export const id="dl_4d4755618e3743e0ba96";
export const url=new URL("../icons/event_repeat.svg?v=10be6976cfe405e4586caa86cbc9c146f25aeda3aedaa86725d015a8402ab971",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
