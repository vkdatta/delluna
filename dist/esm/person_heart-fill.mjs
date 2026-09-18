export const name="person_heart-fill";
export const id="dl_bfcecb60a15746e1ac5a";
export const url=new URL("../icons/person_heart-fill.svg?v=987081f9b4b736e71d903887d14eef361ecc26215238cf320d29dc26e78d578b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
