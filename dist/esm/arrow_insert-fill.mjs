export const name="arrow_insert-fill";
export const id="dl_bd1fae63293a4491b103";
export const url=new URL("../icons/A/arrow_insert-fill.svg?v=538caf2b6edc1bd3b118c69e4d3c4877881732a4008abddaabcbe8929e7416e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
