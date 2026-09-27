export const name="rtt";
export const id="dl_9cf42284e7cff23c549b";
export const url=new URL("../icons/rtt.svg?v=8d5a85a141d0fef72c2170689607ca9a7ceee2dfd1872a35e9d92f51879ef8f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
