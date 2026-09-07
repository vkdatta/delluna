export const name="closed-captioning-duotone";
export const id="dl_afac8db7fb89486cb62a";
export const url=new URL("../icons/closed-captioning-duotone.svg?v=f45b1a4b92f67ceb3390d92e9638c17110dee548e5aa5233da5e1db33f38b120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
