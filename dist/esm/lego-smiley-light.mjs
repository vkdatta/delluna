export const name="lego-smiley-light";
export const id="dl_002ca19cb1f94e8586eb";
export const url=new URL("../icons/lego-smiley-light.svg?v=47703bff6c11c4f34bdd5e939d6f11f64b52ea9514b1193ff027656a91c7e5bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
