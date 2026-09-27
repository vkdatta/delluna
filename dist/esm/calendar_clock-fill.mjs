export const name="calendar_clock-fill";
export const id="dl_5847a1bcbb9a335e4bf1";
export const url=new URL("../icons/calendar_clock-fill.svg?v=d0a659d02a1292923c5d1f8f1960586c50ff36385d750fb3edec278837fb510b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
