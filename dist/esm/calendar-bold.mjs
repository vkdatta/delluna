export const name="calendar-bold";
export const id="dl_631371e2b7664709a4c1";
export const url=new URL("../icons/calendar-bold.svg?v=b35a6e74cea1fcf3392e8feac12218063c6d6b2384e6d6a1c339587952dacbef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
