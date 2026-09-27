export const name="ambulance-light";
export const id="dl_d6120f724f2143bbb8fd";
export const url=new URL("../icons/ambulance-light.svg?v=e0d05fb35a77e7e6da6611df94737b281f69e6d5f9606bd45e5ad113f1c94073",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
