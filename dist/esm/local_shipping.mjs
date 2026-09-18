export const name="local_shipping";
export const id="dl_9b78af11e10a465f9052";
export const url=new URL("../icons/local_shipping.svg?v=8a65f382bee958c21588ad429d40d5597880c88c177a5da019a5c9f303fb488a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
