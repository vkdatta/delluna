export const name="arrow-fat-up-duotone";
export const id="dl_7a8d3aea476a4ad2a973";
export const url=new URL("../icons/arrow-fat-up-duotone.svg?v=08f61c1763bbd3b31b789e77cdcdf122da1f49070a28e900e72bb7fa1d3e37c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
