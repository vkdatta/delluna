export const name="calendar-minus-fill";
export const id="dl_6b3900127c5745b682b7";
export const url=new URL("../icons/calendar-minus-fill.svg?v=5fe5107121568010ada429985b64bc46671cd4c1ac0b0357ac780a3af12f7df6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
