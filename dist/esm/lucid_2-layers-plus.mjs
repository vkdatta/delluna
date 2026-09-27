export const name="lucid_2-layers-plus";
export const id="dl_0d0c8ce8f1114c1cba47";
export const url=new URL("../icons/lucid_2-layers-plus.svg?v=8afa57b042bbf2d346c2485667234b689bc8a2be811d6f09059dbadfff096a88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
