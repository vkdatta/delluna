export const name="shovel-fill";
export const id="dl_525da62918204766b9f8";
export const url=new URL("../icons/S/shovel-fill.svg?v=f68f644b284c5d886278e7a222d35ef79d8a1eed449557e8a8ebd913248b684f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
