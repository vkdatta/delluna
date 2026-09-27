export const name="garage_home-fill";
export const id="dl_e6d1e64a5ad655a46fe0";
export const url=new URL("../icons/garage_home-fill.svg?v=27abfc392346b0e5fb3e25f89a1e8d279be805591dd8d48b07db3d2650b06976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
