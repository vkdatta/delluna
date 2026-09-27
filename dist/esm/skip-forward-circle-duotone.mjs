export const name="skip-forward-circle-duotone";
export const id="dl_a3297f8110fd715d1676";
export const url=new URL("../icons/skip-forward-circle-duotone.svg?v=c79c93ae433e0e6365234c437e7125f6d645bb5058d621b845e99f9e09f0df43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
