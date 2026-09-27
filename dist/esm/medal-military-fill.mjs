export const name="medal-military-fill";
export const id="dl_e6c2fb5018cd4ed9bf7f";
export const url=new URL("../icons/medal-military-fill.svg?v=1044d14b469bec7b7a03857a72062d471602d5607c4093c0d2cbdad89c3b1f80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
