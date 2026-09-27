export const name="scroll-duotone";
export const id="dl_3a025721f7b41419d364";
export const url=new URL("../icons/scroll-duotone.svg?v=b3b0429d02667995fc6c53499fba43a9aef13a7a84d52c6c952f7127a3494f97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
