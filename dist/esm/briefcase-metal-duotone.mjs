export const name="briefcase-metal-duotone";
export const id="dl_3bd2ef23f78c448caf3b";
export const url=new URL("../icons/briefcase-metal-duotone.svg?v=eca5467f775a31fe1623e12d2bf4aa108ee21d867ac39091a8eb5868b343c4f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
