export const name="text-italic-bold";
export const id="dl_a1409ad0198111232e7b";
export const url=new URL("../icons/text-italic-bold.svg?v=80fac56bbbb79b482882baaf90ca4f486c8298640e1663e73b4ca68b6d76df3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
