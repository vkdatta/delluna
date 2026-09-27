export const name="mobile_wrench";
export const id="dl_822df7c6a0e841713e02";
export const url=new URL("../icons/mobile_wrench.svg?v=8b2253b34d3d7e3c1520a33b49b7671cc99fd28aacad5e4e3db195e4afdac003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
