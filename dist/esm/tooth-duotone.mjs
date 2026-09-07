export const name="tooth-duotone";
export const id="dl_1b202f7fea7c4e17a2b4";
export const url=new URL("../icons/T/tooth-duotone.svg?v=9331f2069955b7efc8cb1ec4283eeaba52fa5ab99e4115fd467c0c68710a0ef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
