export const name="lucid_3-redo-dot";
export const id="dl_4cc2875ba07241ed9fa8";
export const url=new URL("../icons/lucid_3-redo-dot.svg?v=afd3c7453d81671401620b0223d1b74c53dd988ca0f1b0b0acb82411e8848757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
