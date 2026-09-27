export const name="bowl-food-duotone";
export const id="dl_35cca0fc4ef9485eb6dc";
export const url=new URL("../icons/bowl-food-duotone.svg?v=8f06d155f2ab26a93c3962e70773d438dc636eea2ca2f22fd44bd282a8bdef59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
