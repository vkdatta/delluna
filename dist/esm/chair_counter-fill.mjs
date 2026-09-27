export const name="chair_counter-fill";
export const id="dl_e609451d4f231738c308";
export const url=new URL("../icons/chair_counter-fill.svg?v=383fa6a9372861f03af6ee2a0ea28f2ba4c68ae4dd4569a3fa00fb647916ab27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
