export const name="feather";
export const id="dl_33cc54a5ad1d45369eaf";
export const url=new URL("../icons/feather.svg?v=b685e8ee9435ac14b47fc64a98fa4ba8e3e6b5729b27a46ce7348c73ecc46716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
