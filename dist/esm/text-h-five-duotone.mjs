export const name="text-h-five-duotone";
export const id="dl_a1509871086aa533d102";
export const url=new URL("../icons/text-h-five-duotone.svg?v=54fb4569ba6833f95068704737ffd7aeb470a8bec30b681773cd82cdaf08ccfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
