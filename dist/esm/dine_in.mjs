export const name="dine_in";
export const id="dl_af4bbcfe199d88250238";
export const url=new URL("../icons/dine_in.svg?v=021912dcd07372096c80ef4007ced51f4ade25c7da2179a74131f3d50ddc9a09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
