export const name="arrows-left-right";
export const id="dl_1264da9a0b934e868ae9";
export const url=new URL("../icons/arrows-left-right.svg?v=c1676adfa83d3473a587061b9ef6131b43753a7853194219fc992ab304887bfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
