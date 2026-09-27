export const name="calendar-bold";
export const id="dl_631371e2b7664709a4c1";
export const url=new URL("../icons/calendar-bold.svg?v=ef697ffe63073fa55d6610ae13eb98cbec16ccb1281da86243229a1f4cc37788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
