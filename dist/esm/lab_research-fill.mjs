export const name="lab_research-fill";
export const id="dl_e4ff51f3857842eb283c";
export const url=new URL("../icons/lab_research-fill.svg?v=e4689e62c4746297037d10f4bd2204f15e63016ef31aa38e77bb6d335b09eff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
