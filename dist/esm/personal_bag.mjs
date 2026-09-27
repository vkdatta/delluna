export const name="personal_bag";
export const id="dl_fecffd38441e17fea038";
export const url=new URL("../icons/personal_bag.svg?v=dacb68d5ad5ad5b9dfad3a6a45b1411fd804c5a748907816ee835d58a5fd2d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
