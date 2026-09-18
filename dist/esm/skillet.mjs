export const name="skillet";
export const id="dl_b0852cb8a7d2400a808f";
export const url=new URL("../icons/skillet.svg?v=f229b531ea8192dd1851d462080504acbefa4694c95844c6a493ac3e05b93036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
