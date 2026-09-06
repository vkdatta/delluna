export const name="caret-double-down-duotone";
export const id="dl_05dc62861a274aa7be42";
export const url=new URL("../icons/caret-double-down-duotone.svg?v=0b8d1c2479bbe586574ee7b64b870354dbd736e21a92dc7b0e3df94ffd9616bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
