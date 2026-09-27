export const name="lucid_3-separator-horizontal";
export const id="dl_655b581df49941dea478";
export const url=new URL("../icons/lucid_3-separator-horizontal.svg?v=073bb7150a45bbcd2e5c8eb1f2de981dcd99dccb400c15bcc0ad8352bbc5dd4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
