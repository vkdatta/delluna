export const name="phone-plus-duotone";
export const id="dl_60aac705d8a94e4a9717";
export const url=new URL("../icons/phone-plus-duotone.svg?v=49d7ced72e15c90d432f837cc0df73bc55c03d31a465b30b56976fd8a07370f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
