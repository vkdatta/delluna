export const name="turn_sharp_right";
export const id="dl_9cdf4e23f63c56a01300";
export const url=new URL("../icons/turn_sharp_right.svg?v=531bcc2b7be0492ccd86abe25fddb27167ac3faac1fa2e22e2df16380616897d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
