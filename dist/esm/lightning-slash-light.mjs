export const name="lightning-slash-light";
export const id="dl_c7a69743716b45419420";
export const url=new URL("../icons/lightning-slash-light.svg?v=ea4cac99e925643d78bd44b2cff8c4dcd45204f2ae1586013a7fce538cca5ea0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
