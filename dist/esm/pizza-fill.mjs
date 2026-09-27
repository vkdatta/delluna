export const name="pizza-fill";
export const id="dl_80d7a06ee83b492c8750";
export const url=new URL("../icons/pizza-fill.svg?v=bb346cd5e14c11d5c096d8cf3cc7fe5ad2fb38e60dfeda3e7577175f87b9a5de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
