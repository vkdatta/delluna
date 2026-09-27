export const name="closed-captioning-duotone";
export const id="dl_afac8db7fb89486cb62a";
export const url=new URL("../icons/closed-captioning-duotone.svg?v=2e49c4240139eae4f3639fd5b390cd76599070b9a40cfefb20345441056931b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
