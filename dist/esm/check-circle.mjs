export const name="check-circle";
export const id="dl_8b5ad650902049c5ba57";
export const url=new URL("../icons/check-circle.svg?v=c27ff96e59d5c32912d6e86f23dfbecf86b83192941c889f33eb477e9673a98b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
