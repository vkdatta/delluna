export const name="van";
export const id="dl_0669eac682c7431599db";
export const url=new URL("../icons/van.svg?v=2184a6a08f389f82aa56b3607d4c903dc2f4dad254097c347c8a4a9e3d2e8312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
