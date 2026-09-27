export const name="fan-fill";
export const id="dl_8c016d27689d479084e6";
export const url=new URL("../icons/fan-fill.svg?v=2575d3c13a215e4228e32d4422baddae311480f1c9936dd54417ad6ea8d64242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
