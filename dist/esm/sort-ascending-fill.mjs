export const name="sort-ascending-fill";
export const id="dl_21bda72f7536bcd85abd";
export const url=new URL("../icons/sort-ascending-fill.svg?v=c843a7376689bef8b215c651b697ec472f00b3bcb5916e9a755f97bded58aa09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
