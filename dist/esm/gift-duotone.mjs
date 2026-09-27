export const name="gift-duotone";
export const id="dl_63aae71faf2e4d0180ba";
export const url=new URL("../icons/gift-duotone.svg?v=254407ba6dbf1f9c1a0ac577108f7dc268acc530734f43220f4f353c4679afd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
