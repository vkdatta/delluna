export const name="aq_indoor";
export const id="dl_15c419e023a941c69b2c";
export const url=new URL("../icons/aq_indoor.svg?v=139fea233776d4f07b51d8857eca1c8f863adfd4021b8a6cc3f91693854bc2e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
