export const name="phone-outgoing-duotone";
export const id="dl_a67f6ea4aab94a4d916b";
export const url=new URL("../icons/phone-outgoing-duotone.svg?v=a53396c5db0bf7c10cdcef1fcd253db46c5ecb09ad5871e523a827f2c698ceb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
