export const name="calendar-blank-light";
export const id="dl_2f2b9cb2f6a94c938085";
export const url=new URL("../icons/calendar-blank-light.svg?v=b7e731c3b2159494ad62fb9e57972b1b7105c3550a2423002402ac0ae08405b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
