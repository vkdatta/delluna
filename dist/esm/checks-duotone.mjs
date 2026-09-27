export const name="checks-duotone";
export const id="dl_48b779549dd34db7997e";
export const url=new URL("../icons/checks-duotone.svg?v=203d0570153066b2a7863185288b7298bb84e89ba8a6fd843d747a29b528275a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
