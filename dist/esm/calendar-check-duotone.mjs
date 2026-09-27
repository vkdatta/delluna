export const name="calendar-check-duotone";
export const id="dl_785b065a6ade40289384";
export const url=new URL("../icons/calendar-check-duotone.svg?v=6683f494bc1b83390b47c855f0f3c594baddffe642c8b71a63756333dd3fc353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
