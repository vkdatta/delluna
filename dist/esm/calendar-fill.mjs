export const name="calendar-fill";
export const id="dl_77bd2f1c7d2d48bf8634";
export const url=new URL("../icons/calendar-fill.svg?v=71c7fb2e276cb81b6f396869a10c8c2f78d96fa778837ea0aed9a3eb7c97431e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
