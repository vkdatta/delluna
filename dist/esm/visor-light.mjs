export const name="visor-light";
export const id="dl_d442d9a6654b5df9a32b";
export const url=new URL("../icons/visor-light.svg?v=fe30ed7afabf1f962bda56c75d5b8cf7758757b635dcd2775d47337ecac91171",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
