export const name="phone-outgoing-duotone";
export const id="dl_a67f6ea4aab94a4d916b";
export const url=new URL("../icons/phone-outgoing-duotone.svg?v=6f6d23bcda06b2cc100ecfaf43ae0941f466051e5d7ac3a6b5192cdc180f7026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
