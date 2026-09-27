export const name="bowl-food-bold";
export const id="dl_30d59260959948789436";
export const url=new URL("../icons/bowl-food-bold.svg?v=5ac997c82bb12d62cbd23b66e3c093191390c379c8dd4adab774ce87d254cc32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
