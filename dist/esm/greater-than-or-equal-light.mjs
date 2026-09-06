export const name="greater-than-or-equal-light";
export const id="dl_033b61063c84434c99e2";
export const url=new URL("../icons/greater-than-or-equal-light.svg?v=eea5a7ef1488bc7d2e6405101798b15da60b41cac60b51a205ea5037eb51394f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
