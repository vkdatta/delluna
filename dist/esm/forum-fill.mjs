export const name="forum-fill";
export const id="dl_474d6a855dfff2ba2054";
export const url=new URL("../icons/forum-fill.svg?v=00f095a5990e68839dc32d98edafd288dac13329680d2bdb07d77c56c4ad623e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
