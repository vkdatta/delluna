export const name="calendar-plus";
export const id="dl_08055d559c574cdf804f";
export const url=new URL("../icons/calendar-plus.svg?v=2058fc2fdeff6a98209c1a16b92f1fa4c024883a2a945eb6b67b6fa60363a012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
