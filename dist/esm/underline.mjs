export const name="underline";
export const id="dl_d990962978f0468aa298";
export const url=new URL("../icons/underline.svg?v=b6a0320238efd88429fda2ab5c7593377b5d3b0498934f18acf930c3ae6c13d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
