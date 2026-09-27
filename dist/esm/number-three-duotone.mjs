export const name="number-three-duotone";
export const id="dl_8f5d4a5cd4974097b83d";
export const url=new URL("../icons/number-three-duotone.svg?v=e7b430187eb6beba5a3a1338299c1111ad886a685b15377c0c08ba60d8638205",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
