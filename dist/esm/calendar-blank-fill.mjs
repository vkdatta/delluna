export const name="calendar-blank-fill";
export const id="dl_9bca5a161f0f4ec08d21";
export const url=new URL("../icons/calendar-blank-fill.svg?v=405596825bf3705baa7d289ed1242106fded80e34967927549a0413f4303a0ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
