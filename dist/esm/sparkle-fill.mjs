export const name="sparkle-fill";
export const id="dl_0279fdc79874423ca856";
export const url=new URL("../icons/S/sparkle-fill.svg?v=9872a9255717f4ecc0f01b028b9436042e0f49391e4ce7a57f61aa466684fad1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
