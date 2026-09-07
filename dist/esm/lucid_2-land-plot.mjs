export const name="lucid_2-land-plot";
export const id="dl_6286abf4a83e40e8a953";
export const url=new URL("../icons/lucid_2-land-plot.svg?v=19b663d38efdf0a160055042afa1dec389ff64f3d58d9fa26cac6f903c55f3a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
