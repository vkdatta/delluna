export const name="mobile_alert-fill";
export const id="dl_04510d6970d23beee828";
export const url=new URL("../icons/mobile_alert-fill.svg?v=8029769bb97770c5dd4a0c2ad79f36af41cfa3508a8d2388b85c9c0bb07d9646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
