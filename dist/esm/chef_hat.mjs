export const name="chef_hat";
export const id="dl_afc8a06729dc585f81d9";
export const url=new URL("../icons/chef_hat.svg?v=e9b3f66f42e4925478c0d3ef994178f4661411e34ceff3603e289d6790f36f42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
