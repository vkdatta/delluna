export const name="phone-call-light";
export const id="dl_0762401a68a9411c96f7";
export const url=new URL("../icons/phone-call-light.svg?v=3c43421c4470c45080ee23b682e1c72836c43407f56fc0d54a7f6a2c16d0e52d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
